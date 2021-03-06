import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetExportInput shape
 */
export interface GetExportInput {
  /**
   * <p>The name of the bot to export.</p>
   */
  name: string;

  /**
   * <p>The version of the bot to export.</p>
   */
  version: string;

  /**
   * <p>The type of resource to export. </p>
   */
  resourceType: "BOT" | "INTENT" | "SLOT_TYPE" | string;

  /**
   * <p>The format of the exported data.</p>
   */
  exportType: "ALEXA_SKILLS_KIT" | "LEX" | string;

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
