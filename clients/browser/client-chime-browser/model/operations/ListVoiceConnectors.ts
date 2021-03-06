import { ListVoiceConnectorsInput } from "../shapes/ListVoiceConnectorsInput";
import { ListVoiceConnectorsOutput } from "../shapes/ListVoiceConnectorsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVoiceConnectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVoiceConnectors",
  http: {
    method: "GET",
    requestUri: "/voice-connectors"
  },
  input: {
    shape: ListVoiceConnectorsInput
  },
  output: {
    shape: ListVoiceConnectorsOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
