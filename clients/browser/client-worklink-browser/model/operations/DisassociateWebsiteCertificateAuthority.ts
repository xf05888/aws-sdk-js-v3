import { DisassociateWebsiteCertificateAuthorityInput } from "../shapes/DisassociateWebsiteCertificateAuthorityInput";
import { DisassociateWebsiteCertificateAuthorityOutput } from "../shapes/DisassociateWebsiteCertificateAuthorityOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateWebsiteCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateWebsiteCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/disassociateWebsiteCertificateAuthority"
  },
  input: {
    shape: DisassociateWebsiteCertificateAuthorityInput
  },
  output: {
    shape: DisassociateWebsiteCertificateAuthorityOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
