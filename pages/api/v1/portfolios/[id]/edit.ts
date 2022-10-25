import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";

import connectDB from "../../../../../src/middleware/mongodb";
import Portfolios from "../../../../../src/models/portfolio";
import IPortfolio from "interfaces/portfolio";
import { CatchType } from "typings";

/***
 * 수정
 * @METHOD `GET`
 * @PATH `/api/v1/portfolios/:id/edit`
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IPortfolio | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    const {
      body,
      query: { id },
    } = req;

    try {
      const updatePortfolio = await Portfolios.findByIdAndUpdate(id, body, {
        new: true,
        upsert: true,
      }).exec();

      return res.json(updatePortfolio);
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

export default connectDB(handler);
