import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
