import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CopyObjectResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ETag: {
      shape: {
        type: "string"
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
