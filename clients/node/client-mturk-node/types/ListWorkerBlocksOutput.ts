import { _UnmarshalledWorkerBlock } from "./_WorkerBlock";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWorkerBlocksOutput shape
 */
export interface ListWorkerBlocksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p> The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p> The list of WorkerBlocks, containing the collection of Worker IDs and reasons for blocking.</p>
   */
  WorkerBlocks?: Array<_UnmarshalledWorkerBlock>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
