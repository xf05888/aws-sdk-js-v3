import { _DBClusterParameterGroup } from "./_DBClusterParameterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterParameterGroup: {
      shape: _DBClusterParameterGroup
    }
  }
};
