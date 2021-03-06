import { DeleteConfigurationSetInput } from "../shapes/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "../shapes/DeleteConfigurationSetOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSet",
  http: {
    method: "DELETE",
    requestUri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}"
  },
  input: {
    shape: DeleteConfigurationSetInput
  },
  output: {
    shape: DeleteConfigurationSetOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
