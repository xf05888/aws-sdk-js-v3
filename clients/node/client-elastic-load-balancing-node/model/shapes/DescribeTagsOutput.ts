import { _TagDescriptions } from "./_TagDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TagDescriptions: {
      shape: _TagDescriptions
    }
  }
};
