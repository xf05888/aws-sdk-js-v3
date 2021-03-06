import { ListGroupMembersInput } from "../shapes/ListGroupMembersInput";
import { ListGroupMembersOutput } from "../shapes/ListGroupMembersOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroupMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupMembers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupMembersInput
  },
  output: {
    shape: ListGroupMembersOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
