import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBillingGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    namePrefixFilter: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "namePrefixFilter"
    }
  }
};
