import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
 */
export interface CertificateNotFoundFault
  extends __ServiceException__<_CertificateNotFoundFaultDetails> {
  name: "CertificateNotFoundFault";
}

export interface _CertificateNotFoundFaultDetails {}
