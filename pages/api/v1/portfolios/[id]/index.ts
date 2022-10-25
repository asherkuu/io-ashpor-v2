import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";

import connectDB from "../../../../../src/middleware/mongodb";
import Portfolios from "../../../../../src/models/portfolio";
import IPortfolio from "interfaces/portfolio";
import { CatchType } from "typings";

/***
 * 상세 조회
 * @METHOD `GET`
 * @PATH `/api/v1/portfolios/:id`
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IPortfolio | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);

  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    res.status(422).json({ msg: firstError });
  } else {
    try {
      await Portfolios.findById(req.query.id).exec(
        (err: Object, portfolio: IPortfolio) => {
          if (err || !portfolio) {
            res.status(400).json({
              msg: "게시글이 존재하지 않습니다.",
            });
          }
          res.status(200).json(portfolio);
        }
      );
    } catch (error) {
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

export default connectDB(handler);
