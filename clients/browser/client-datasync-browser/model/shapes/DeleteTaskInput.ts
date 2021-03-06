import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTaskInput: _Structure_ = {
  type: "structure",
  required: ["TaskArn"],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    }
  }
};
