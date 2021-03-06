import { _Update } from "./_Update";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUpdateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    update: {
      shape: _Update
    }
  }
};
