import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfiguration } from "../model/operations/DescribeConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationInput } from "../types/DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "../types/DescribeConfigurationOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeConfigurationInput";
export * from "../types/DescribeConfigurationOutput";
export * from "../types/DescribeConfigurationExceptionsUnion";

export class DescribeConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationInput,
      OutputTypesUnion,
      DescribeConfigurationOutput,
      mqResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationInput,
    DescribeConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationInput,
    DescribeConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConfigurationInput, DescribeConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
