import { _UnmarshalledWorkteam } from "./_Workteam";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateWorkteamOutput shape
 */
export interface UpdateWorkteamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: _UnmarshalledWorkteam;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
