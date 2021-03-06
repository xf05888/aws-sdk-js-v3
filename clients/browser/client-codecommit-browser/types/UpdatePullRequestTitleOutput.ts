import { _UnmarshalledPullRequest } from "./_PullRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePullRequestTitleOutput shape
 */
export interface UpdatePullRequestTitleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: _UnmarshalledPullRequest;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
