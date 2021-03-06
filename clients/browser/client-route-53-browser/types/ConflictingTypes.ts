import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type than the current type for the instance. You specified the type in the JSON document in the <code>CreateTrafficPolicy</code> or <code>CreateTrafficPolicyVersion</code>request. </p>
 */
export interface ConflictingTypes
  extends __ServiceException__<_ConflictingTypesDetails> {
  name: "ConflictingTypes";
}

export interface _ConflictingTypesDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
