import { ListCommandInvocationsInput } from "../shapes/ListCommandInvocationsInput";
import { ListCommandInvocationsOutput } from "../shapes/ListCommandInvocationsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidCommandId } from "../shapes/InvalidCommandId";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCommandInvocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCommandInvocations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCommandInvocationsInput
  },
  output: {
    shape: ListCommandInvocationsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidCommandId
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidNextToken
    }
  ]
};
