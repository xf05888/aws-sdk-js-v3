import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidParameterValueException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidParameterValueException",
  exceptionCode: "ParameterValueInvalid"
};
