import { PutPipelineDefinitionInput } from "../shapes/PutPipelineDefinitionInput";
import { PutPipelineDefinitionOutput } from "../shapes/PutPipelineDefinitionOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPipelineDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPipelineDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPipelineDefinitionInput
  },
  output: {
    shape: PutPipelineDefinitionOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
