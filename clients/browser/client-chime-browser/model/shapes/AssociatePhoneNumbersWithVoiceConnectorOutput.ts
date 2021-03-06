import { _PhoneNumberErrorList } from "./_PhoneNumberErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociatePhoneNumbersWithVoiceConnectorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberErrors: {
      shape: _PhoneNumberErrorList
    }
  }
};
