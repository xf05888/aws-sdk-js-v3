import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateNFSFileShareOutput</p>
 */
export interface CreateNFSFileShareOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share. </p>
   */
  FileShareARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
