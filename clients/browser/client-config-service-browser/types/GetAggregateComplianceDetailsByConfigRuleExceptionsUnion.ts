import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
export type GetAggregateComplianceDetailsByConfigRuleExceptionsUnion =
  | ValidationException
  | InvalidLimitException
  | InvalidNextTokenException
  | NoSuchConfigurationAggregatorException;
