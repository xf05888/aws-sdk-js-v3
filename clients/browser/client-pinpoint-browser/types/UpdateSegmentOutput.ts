import { _UnmarshalledSegmentResponse } from "./_SegmentResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSegmentOutput shape
 */
export interface UpdateSegmentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: _UnmarshalledSegmentResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
