import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A change with the specified change ID does not exist.</p>
 */
export interface NoSuchChange
  extends __ServiceException__<_NoSuchChangeDetails> {
  name: "NoSuchChange";
}

export interface _NoSuchChangeDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
