import { UpdateApplicationInput } from "../shapes/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../shapes/UpdateApplicationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationInput
  },
  output: {
    shape: UpdateApplicationOutput,
    resultWrapper: "UpdateApplicationResult"
  },
  errors: []
};
