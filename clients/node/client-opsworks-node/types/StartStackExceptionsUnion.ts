import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type StartStackExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
