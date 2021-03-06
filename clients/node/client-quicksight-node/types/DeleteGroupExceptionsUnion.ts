import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type DeleteGroupExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ThrottlingException
  | PreconditionNotMetException
  | InternalFailureException
  | ResourceUnavailableException;
