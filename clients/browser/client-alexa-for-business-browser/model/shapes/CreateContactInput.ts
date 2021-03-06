import { _PhoneNumberList } from "./_PhoneNumberList";
import { _SipAddressList } from "./_SipAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateContactInput: _Structure_ = {
  type: "structure",
  required: ["FirstName"],
  members: {
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FirstName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PhoneNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    PhoneNumbers: {
      shape: _PhoneNumberList
    },
    SipAddresses: {
      shape: _SipAddressList
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
