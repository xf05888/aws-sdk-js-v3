import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoLocationDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContinentCode: {
      shape: {
        type: "string",
        min: 2
      }
    },
    ContinentName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CountryCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CountryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubdivisionCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubdivisionName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
