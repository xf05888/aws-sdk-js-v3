import { _Target } from "./_Target";
import { _PatchOrchestratorFilter } from "./_PatchOrchestratorFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowScheduleInput shape
 */
export interface DescribeMaintenanceWindowScheduleInput {
  /**
   * <p>The ID of the maintenance window to retrieve information about.</p>
   */
  WindowId?: string;

  /**
   * <p>The instance ID or key/value pair to retrieve information about.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The type of resource you want to retrieve information about. For example, "INSTANCE".</p>
   */
  ResourceType?: "INSTANCE" | "RESOURCE_GROUP" | string;

  /**
   * <p>Filters used to limit the range of results. For example, you can limit maintenance window executions to only those scheduled before or after a certain date and time.</p>
   */
  Filters?:
    | Array<_PatchOrchestratorFilter>
    | Iterable<_PatchOrchestratorFilter>;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
