import { _UnmarshalledProjectSummary } from "./_ProjectSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProjectsOutput shape
 */
export interface ListProjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing the list of projects.</p>
   */
  projects: Array<_UnmarshalledProjectSummary>;

  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there are no further results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
