import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAcceleratorInput shape
 */
export interface UpdateAcceleratorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator to update.</p>
   */
  AcceleratorArn: string;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The value for the address type must be IPv4. </p>
   */
  IpAddressType?: "IPV4" | string;

  /**
   * <p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>
   */
  Enabled?: boolean;

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
