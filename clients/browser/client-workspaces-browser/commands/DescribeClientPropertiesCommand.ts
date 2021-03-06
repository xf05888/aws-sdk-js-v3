import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClientProperties } from "../model/operations/DescribeClientProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientPropertiesInput } from "../types/DescribeClientPropertiesInput";
import { DescribeClientPropertiesOutput } from "../types/DescribeClientPropertiesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeClientPropertiesInput";
export * from "../types/DescribeClientPropertiesOutput";
export * from "../types/DescribeClientPropertiesExceptionsUnion";

export class DescribeClientPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientPropertiesInput,
      OutputTypesUnion,
      DescribeClientPropertiesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeClientProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientPropertiesInput,
    DescribeClientPropertiesOutput,
    Blob
  >();

  constructor(readonly input: DescribeClientPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientPropertiesInput,
    DescribeClientPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClientPropertiesInput, DescribeClientPropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
