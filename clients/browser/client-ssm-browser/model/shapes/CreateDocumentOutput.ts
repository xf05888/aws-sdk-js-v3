import { _DocumentDescription } from "./_DocumentDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentDescription: {
      shape: _DocumentDescription
    }
  }
};
