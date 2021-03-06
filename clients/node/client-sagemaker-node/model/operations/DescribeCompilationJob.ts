import { DescribeCompilationJobInput } from "../shapes/DescribeCompilationJobInput";
import { DescribeCompilationJobOutput } from "../shapes/DescribeCompilationJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCompilationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCompilationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCompilationJobInput
  },
  output: {
    shape: DescribeCompilationJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
