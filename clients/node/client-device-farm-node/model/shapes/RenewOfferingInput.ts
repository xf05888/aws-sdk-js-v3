import { Structure as _Structure_ } from "@aws-sdk/types";

export const RenewOfferingInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offeringId: {
      shape: {
        type: "string",
        min: 32
      }
    },
    quantity: {
      shape: {
        type: "integer"
      }
    }
  }
};
