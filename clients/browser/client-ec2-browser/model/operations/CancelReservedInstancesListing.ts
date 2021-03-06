import { CancelReservedInstancesListingInput } from "../shapes/CancelReservedInstancesListingInput";
import { CancelReservedInstancesListingOutput } from "../shapes/CancelReservedInstancesListingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelReservedInstancesListing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelReservedInstancesListing",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelReservedInstancesListingInput
  },
  output: {
    shape: CancelReservedInstancesListingOutput
  },
  errors: []
};
