import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateCreatedArtifactInput shape
 */
export interface DisassociateCreatedArtifactInput {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string;

  /**
   * <p>Unique identifier that references the migration task to be disassociated with the artifact.</p>
   */
  MigrationTaskName: string;

  /**
   * <p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)</p>
   */
  CreatedArtifactName: string;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
