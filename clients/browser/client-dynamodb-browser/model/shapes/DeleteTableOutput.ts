import { _TableDescription } from "./_TableDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableDescription: {
      shape: _TableDescription
    }
  }
};
