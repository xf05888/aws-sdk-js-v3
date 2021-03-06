import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
