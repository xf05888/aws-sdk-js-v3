import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreBackupOutput shape
 */
export interface RestoreBackupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information on the <code>Backup</code> object created.</p>
   */
  Backup?: _UnmarshalledBackup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
