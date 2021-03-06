import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTypedLinkFacetInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "Name"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
