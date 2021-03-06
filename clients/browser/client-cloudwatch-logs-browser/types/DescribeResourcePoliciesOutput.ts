import { _UnmarshalledResourcePolicy } from "./_ResourcePolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeResourcePoliciesOutput shape
 */
export interface DescribeResourcePoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource policies that exist in this account.</p>
   */
  resourcePolicies?: Array<_UnmarshalledResourcePolicy>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
