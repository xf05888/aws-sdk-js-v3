import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConstraintInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
