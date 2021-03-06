import { _SchemaFacetList } from "./_SchemaFacetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectInformationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaFacets: {
      shape: _SchemaFacetList
    },
    ObjectIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
