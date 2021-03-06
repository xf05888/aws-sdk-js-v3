import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Amazon ML returns the following elements. </p>
 */
export interface DescribeTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the tagged ML object.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the tagged ML object.</p>
   */
  ResourceType?:
    | "BatchPrediction"
    | "DataSource"
    | "Evaluation"
    | "MLModel"
    | string;

  /**
   * <p>A list of tags associated with the ML object.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
