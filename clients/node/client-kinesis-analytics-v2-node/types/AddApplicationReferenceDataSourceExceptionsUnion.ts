import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
export type AddApplicationReferenceDataSourceExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | ConcurrentModificationException
  | InvalidRequestException;
