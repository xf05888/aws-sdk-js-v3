import { CancelBundleTaskInput } from "../shapes/CancelBundleTaskInput";
import { CancelBundleTaskOutput } from "../shapes/CancelBundleTaskOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelBundleTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelBundleTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelBundleTaskInput
  },
  output: {
    shape: CancelBundleTaskOutput
  },
  errors: []
};
