import { _AccelerationSettings } from "./_AccelerationSettings";
import { _JobTemplateSettings } from "./_JobTemplateSettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobTemplateInput shape
 */
export interface CreateJobTemplateInput {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: _AccelerationSettings;

  /**
   * Optional. A category for the job template you are creating
   */
  Category?: string;

  /**
   * Optional. A description of the job template you are creating.
   */
  Description?: string;

  /**
   * The name of the job template you are creating.
   */
  Name: string;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: _JobTemplateSettings;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?:
    | "SECONDS_10"
    | "SECONDS_12"
    | "SECONDS_15"
    | "SECONDS_20"
    | "SECONDS_30"
    | "SECONDS_60"
    | "SECONDS_120"
    | "SECONDS_180"
    | "SECONDS_240"
    | "SECONDS_300"
    | "SECONDS_360"
    | "SECONDS_420"
    | "SECONDS_480"
    | "SECONDS_540"
    | "SECONDS_600"
    | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
