import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationExecutionTargetsFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Value"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
