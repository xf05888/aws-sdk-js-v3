import { _Video } from "./_Video";
import { _NotificationChannel } from "./_NotificationChannel";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartFaceDetectionInput shape
 */
export interface StartFaceDetectionInput {
  /**
   * <p>The video in which you want to detect faces. The video must be stored in an Amazon S3 bucket.</p>
   */
  Video: _Video;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple <code>StartFaceDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the face detection operation.</p>
   */
  NotificationChannel?: _NotificationChannel;

  /**
   * <p>The face attributes you want returned.</p> <p> <code>DEFAULT</code> - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. </p> <p> <code>ALL</code> - All facial attributes are returned.</p>
   */
  FaceAttributes?: "DEFAULT" | "ALL" | string;

  /**
   * <p>Unique identifier you specify to identify the job in the completion status published to the Amazon Simple Notification Service topic. </p>
   */
  JobTag?: string;

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
