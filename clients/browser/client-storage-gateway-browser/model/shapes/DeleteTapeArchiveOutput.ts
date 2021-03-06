import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTapeArchiveOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
