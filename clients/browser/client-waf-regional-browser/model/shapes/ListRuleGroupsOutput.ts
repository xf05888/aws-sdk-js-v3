import { _RuleGroupSummaries } from "./_RuleGroupSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRuleGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RuleGroups: {
      shape: _RuleGroupSummaries
    }
  }
};
