import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCACertificateInput: _Structure_ = {
  type: "structure",
  required: ["certificateId"],
  members: {
    certificateId: {
      shape: {
        type: "string",
        min: 64
      },
      location: "uri",
      locationName: "caCertificateId"
    }
  }
};
