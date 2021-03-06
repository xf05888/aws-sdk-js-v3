import { DescribeReservedInstancesListingsInput } from "../shapes/DescribeReservedInstancesListingsInput";
import { DescribeReservedInstancesListingsOutput } from "../shapes/DescribeReservedInstancesListingsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedInstancesListings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedInstancesListings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedInstancesListingsInput
  },
  output: {
    shape: DescribeReservedInstancesListingsOutput
  },
  errors: []
};
