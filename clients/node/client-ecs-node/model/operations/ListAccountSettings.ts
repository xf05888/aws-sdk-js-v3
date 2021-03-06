import { ListAccountSettingsInput } from "../shapes/ListAccountSettingsInput";
import { ListAccountSettingsOutput } from "../shapes/ListAccountSettingsOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccountSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccountSettingsInput
  },
  output: {
    shape: ListAccountSettingsOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
