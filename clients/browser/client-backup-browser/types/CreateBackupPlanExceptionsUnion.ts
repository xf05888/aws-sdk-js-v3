import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateBackupPlanExceptionsUnion =
  | LimitExceededException
  | AlreadyExistsException
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException;
