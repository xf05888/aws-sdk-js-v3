import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentityProviderConfiguration } from "../model/operations/DescribeIdentityProviderConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityProviderConfigurationInput } from "../types/DescribeIdentityProviderConfigurationInput";
import { DescribeIdentityProviderConfigurationOutput } from "../types/DescribeIdentityProviderConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeIdentityProviderConfigurationInput";
export * from "../types/DescribeIdentityProviderConfigurationOutput";
export * from "../types/DescribeIdentityProviderConfigurationExceptionsUnion";

export class DescribeIdentityProviderConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityProviderConfigurationInput,
      OutputTypesUnion,
      DescribeIdentityProviderConfigurationOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIdentityProviderConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityProviderConfigurationInput,
    DescribeIdentityProviderConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeIdentityProviderConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIdentityProviderConfigurationInput,
    DescribeIdentityProviderConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeIdentityProviderConfigurationInput,
        DescribeIdentityProviderConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
