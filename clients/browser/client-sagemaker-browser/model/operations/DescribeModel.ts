import { DescribeModelInput } from "../shapes/DescribeModelInput";
import { DescribeModelOutput } from "../shapes/DescribeModelOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeModelInput
  },
  output: {
    shape: DescribeModelOutput
  },
  errors: []
};
