import { DeleteTransitGatewayInput } from "../shapes/DeleteTransitGatewayInput";
import { DeleteTransitGatewayOutput } from "../shapes/DeleteTransitGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTransitGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTransitGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTransitGatewayInput
  },
  output: {
    shape: DeleteTransitGatewayOutput
  },
  errors: []
};
