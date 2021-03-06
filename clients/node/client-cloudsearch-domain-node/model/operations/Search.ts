import { SearchInput } from "../shapes/SearchInput";
import { SearchOutput } from "../shapes/SearchOutput";
import { SearchException } from "../shapes/SearchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Search: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Search",
  http: {
    method: "GET",
    requestUri: "/2013-01-01/search?format=sdk&pretty=true"
  },
  input: {
    shape: SearchInput
  },
  output: {
    shape: SearchOutput
  },
  errors: [
    {
      shape: SearchException
    }
  ]
};
