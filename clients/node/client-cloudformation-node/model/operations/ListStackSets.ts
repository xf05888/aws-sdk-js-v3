import { ListStackSetsInput } from "../shapes/ListStackSetsInput";
import { ListStackSetsOutput } from "../shapes/ListStackSetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStackSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackSetsInput
  },
  output: {
    shape: ListStackSetsOutput,
    resultWrapper: "ListStackSetsResult"
  },
  errors: []
};
