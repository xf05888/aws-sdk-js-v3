import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
export type GetPipelineDefinitionExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException
  | PipelineNotFoundException
  | PipelineDeletedException;
