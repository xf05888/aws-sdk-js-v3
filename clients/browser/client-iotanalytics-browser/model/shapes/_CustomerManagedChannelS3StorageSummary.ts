import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerManagedChannelS3StorageSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    keyPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
