import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteGroupOutput shape
 */
export interface DeleteGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the deleted resource group.</p>
   */
  Group?: _UnmarshalledGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
