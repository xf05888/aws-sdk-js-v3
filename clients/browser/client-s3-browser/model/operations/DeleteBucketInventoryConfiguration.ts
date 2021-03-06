import { DeleteBucketInventoryConfigurationInput } from "../shapes/DeleteBucketInventoryConfigurationInput";
import { DeleteBucketInventoryConfigurationOutput } from "../shapes/DeleteBucketInventoryConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketInventoryConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketInventoryConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?inventory"
  },
  input: {
    shape: DeleteBucketInventoryConfigurationInput
  },
  output: {
    shape: DeleteBucketInventoryConfigurationOutput
  },
  errors: []
};
