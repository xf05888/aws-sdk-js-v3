import { List as _List_ } from "@aws-sdk/types";
import { _FailedWorkspaceChangeRequest } from "./_FailedWorkspaceChangeRequest";

export const _FailedRebuildWorkspaceRequests: _List_ = {
  type: "list",
  member: {
    shape: _FailedWorkspaceChangeRequest
  }
};
