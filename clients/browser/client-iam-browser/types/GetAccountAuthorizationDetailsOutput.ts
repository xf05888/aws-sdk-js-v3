import { _UnmarshalledUserDetail } from "./_UserDetail";
import { _UnmarshalledGroupDetail } from "./_GroupDetail";
import { _UnmarshalledRoleDetail } from "./_RoleDetail";
import { _UnmarshalledManagedPolicyDetail } from "./_ManagedPolicyDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. </p>
 */
export interface GetAccountAuthorizationDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list containing information about IAM users.</p>
   */
  UserDetailList?: Array<_UnmarshalledUserDetail>;

  /**
   * <p>A list containing information about IAM groups.</p>
   */
  GroupDetailList?: Array<_UnmarshalledGroupDetail>;

  /**
   * <p>A list containing information about IAM roles.</p>
   */
  RoleDetailList?: Array<_UnmarshalledRoleDetail>;

  /**
   * <p>A list containing information about managed policies.</p>
   */
  Policies?: Array<_UnmarshalledManagedPolicyDetail>;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the <code>Marker</code> request parameter to retrieve more items. Note that IAM might return fewer than the <code>MaxItems</code> number of results even when there are more results available. We recommend that you check <code>IsTruncated</code> after every call to ensure that you receive all your results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent pagination request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
