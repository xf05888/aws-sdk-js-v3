import { _CreateAccountStatus } from "./_CreateAccountStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateAccountStatus: {
      shape: _CreateAccountStatus
    }
  }
};
