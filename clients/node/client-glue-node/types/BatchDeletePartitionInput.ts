import { _PartitionValueList } from "./_PartitionValueList";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeletePartitionInput shape
 */
export interface BatchDeletePartitionInput {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question resides.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the table where the partitions to be deleted is located.</p>
   */
  TableName: string;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define the partitions to be deleted.</p>
   */
  PartitionsToDelete:
    | Array<_PartitionValueList>
    | Iterable<_PartitionValueList>;

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
