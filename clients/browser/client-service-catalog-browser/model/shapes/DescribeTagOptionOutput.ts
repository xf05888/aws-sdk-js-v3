import { _TagOptionDetail } from "./_TagOptionDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagOptionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TagOptionDetail: {
      shape: _TagOptionDetail
    }
  }
};
