import { _CacheBehaviorList } from "./_CacheBehaviorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheBehaviors: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _CacheBehaviorList
    }
  }
};
