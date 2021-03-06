import { ListBucketMetricsConfigurationsInput } from "../shapes/ListBucketMetricsConfigurationsInput";
import { ListBucketMetricsConfigurationsOutput } from "../shapes/ListBucketMetricsConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBucketMetricsConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBucketMetricsConfigurations",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?metrics"
  },
  input: {
    shape: ListBucketMetricsConfigurationsInput
  },
  output: {
    shape: ListBucketMetricsConfigurationsOutput
  },
  errors: []
};
