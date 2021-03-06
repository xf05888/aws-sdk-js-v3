import { AttachInternetGatewayInput } from "../shapes/AttachInternetGatewayInput";
import { AttachInternetGatewayOutput } from "../shapes/AttachInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachInternetGatewayInput
  },
  output: {
    shape: AttachInternetGatewayOutput
  },
  errors: []
};
