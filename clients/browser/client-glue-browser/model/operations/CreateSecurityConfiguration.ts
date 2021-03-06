import { CreateSecurityConfigurationInput } from "../shapes/CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "../shapes/CreateSecurityConfigurationOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSecurityConfigurationInput
  },
  output: {
    shape: CreateSecurityConfigurationOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    }
  ]
};
