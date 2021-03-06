import { DeleteIndexFieldInput } from "../shapes/DeleteIndexFieldInput";
import { DeleteIndexFieldOutput } from "../shapes/DeleteIndexFieldOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIndexField: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIndexField",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIndexFieldInput
  },
  output: {
    shape: DeleteIndexFieldOutput,
    resultWrapper: "DeleteIndexFieldResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
