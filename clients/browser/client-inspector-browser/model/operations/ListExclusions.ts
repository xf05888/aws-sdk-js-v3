import { ListExclusionsInput } from "../shapes/ListExclusionsInput";
import { ListExclusionsOutput } from "../shapes/ListExclusionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListExclusions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListExclusions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListExclusionsInput
  },
  output: {
    shape: ListExclusionsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    }
  ]
};
