import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServicesOutput shape
 */
export interface ListServicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of full ARN entries for each service associated with the specified cluster.</p>
   */
  serviceArns?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListServices</code> request. When the results of a <code>ListServices</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
