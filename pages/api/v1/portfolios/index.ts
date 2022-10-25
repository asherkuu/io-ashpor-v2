import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";

import connectDB from "../../../../src/middleware/mongodb";
import Portfolios from "../../../../src/models/portfolio";
import IPortfolio from "interfaces/portfolio";
import { CatchType } from "typings";

/***
 * 리스트 조회
 * @METHOD `GET`
 * @PATH `/api/v1/portfolios`
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IPortfolio[] | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);

  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await Portfolios.find({})
        .sort({ createdAt: -1 })
        .exec(async (err: Object, portfolios: IPortfolio[]) => {
          res.status(200).json(portfolios);
        });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

export default connectDB(handler);
