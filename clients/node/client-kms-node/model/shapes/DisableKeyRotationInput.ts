import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableKeyRotationInput: _Structure_ = {
  type: "structure",
  required: ["KeyId"],
  members: {
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
