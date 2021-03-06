import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGroupVersionOutput shape
 */
export interface CreateGroupVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the version.
   */
  Id?: string;

  /**
   * The unique ID of the version.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
