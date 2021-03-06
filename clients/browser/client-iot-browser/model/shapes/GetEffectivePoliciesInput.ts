import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEffectivePoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    principal: {
      shape: {
        type: "string"
      }
    },
    cognitoIdentityPoolId: {
      shape: {
        type: "string"
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "thingName"
    }
  }
};
