import { _DagNodes } from "./_DagNodes";
import { _DagEdges } from "./_DagEdges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataflowGraphOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DagNodes: {
      shape: _DagNodes
    },
    DagEdges: {
      shape: _DagEdges
    }
  }
};
