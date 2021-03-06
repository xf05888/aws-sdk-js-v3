import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceGraphOutput shape
 */
export interface GetServiceGraphOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The start of the time frame for which the graph was generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time frame for which the graph was generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>The services that have processed a traced request during the specified time frame.</p>
   */
  Services?: Array<_UnmarshalledService>;

  /**
   * <p>A flag indicating whether the group's filter expression has been consistent, or if the returned service graph may show traces from an older version of the group's filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token. Not used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
