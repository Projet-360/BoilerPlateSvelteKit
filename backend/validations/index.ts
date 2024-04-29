import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { greetingsValidators } from './validators.js';

const OPERATION_NAMES = {
  CREATE_GREETING: 'CreateGreeting',
};

export function graphqlValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const operationName = req.body.operationName;
  console.log(operationName);

  let validators;
  switch (operationName) {
    case OPERATION_NAMES.CREATE_GREETING:
      validators = greetingsValidators;
      break;
    default:
      return next();
  }

  Promise.all(validators.map((validation) => validation.run(req))).then(() => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  });
}
