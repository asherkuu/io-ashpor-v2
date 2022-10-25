import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";

import connectDB from "../../../../src/middleware/mongodb";
import Portfolios from "../../../../src/models/portfolio";
import IPortfolio from "interfaces/portfolio";
import { CatchType } from "typings";

import mongoose from "mongoose";
const Portfolio = mongoose.model("Portfolios");

/***
 * 포폴 추가
 * @METHOD `POST`
 * @PATH `/api/v1/portfolios`
 */
export const handler = async (
  req: any,
  res: NextApiResponse<IPortfolio | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);

  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      let portfolioData = req.body;
      portfolioData.userId = req.user.sub;
      portfolioData.img = req.file;

      const portfolio: any = new Portfolio(portfolioData);
      portfolio.startDate = new Date(req.body.startDate);
      portfolio.endDate = new Date(req.body.endDate);
      portfolio.published = "n";

      const newPortfolio = await portfolio.save();
      return res.status(200).json(newPortfolio);
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

export default connectDB(handler);
