import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOrganization } from "../model/operations/DescribeOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrganizationInput } from "../types/DescribeOrganizationInput";
import { DescribeOrganizationOutput } from "../types/DescribeOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribeOrganizationInput";
export * from "../types/DescribeOrganizationOutput";
export * from "../types/DescribeOrganizationExceptionsUnion";

export class DescribeOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrganizationInput,
      OutputTypesUnion,
      DescribeOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrganizationInput,
    DescribeOrganizationOutput,
    Blob
  >();

  constructor(readonly input: DescribeOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrganizationInput,
    DescribeOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOrganizationInput, DescribeOrganizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
