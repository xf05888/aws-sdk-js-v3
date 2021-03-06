import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAccountInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    }
  }
};
