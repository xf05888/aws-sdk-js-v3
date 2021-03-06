import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "ResourceId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
