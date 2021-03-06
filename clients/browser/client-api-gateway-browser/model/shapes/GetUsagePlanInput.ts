import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlanInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
    }
  }
};
