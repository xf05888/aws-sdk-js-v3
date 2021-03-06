import { _TagKeyList } from "./_TagKeyList";
import { _TagValueList } from "./_TagValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceName: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    },
    TagValues: {
      shape: _TagValueList
    }
  }
};
