import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    }
  }
};
