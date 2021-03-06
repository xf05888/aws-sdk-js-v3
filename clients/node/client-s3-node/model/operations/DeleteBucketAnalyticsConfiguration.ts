import { DeleteBucketAnalyticsConfigurationInput } from "../shapes/DeleteBucketAnalyticsConfigurationInput";
import { DeleteBucketAnalyticsConfigurationOutput } from "../shapes/DeleteBucketAnalyticsConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketAnalyticsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketAnalyticsConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?analytics"
  },
  input: {
    shape: DeleteBucketAnalyticsConfigurationInput
  },
  output: {
    shape: DeleteBucketAnalyticsConfigurationOutput
  },
  errors: []
};
