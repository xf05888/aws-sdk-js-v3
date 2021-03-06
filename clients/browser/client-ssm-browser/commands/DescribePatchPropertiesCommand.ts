import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePatchProperties } from "../model/operations/DescribePatchProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePatchPropertiesInput } from "../types/DescribePatchPropertiesInput";
import { DescribePatchPropertiesOutput } from "../types/DescribePatchPropertiesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribePatchPropertiesInput";
export * from "../types/DescribePatchPropertiesOutput";
export * from "../types/DescribePatchPropertiesExceptionsUnion";

export class DescribePatchPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePatchPropertiesInput,
      OutputTypesUnion,
      DescribePatchPropertiesOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePatchProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePatchPropertiesInput,
    DescribePatchPropertiesOutput,
    Blob
  >();

  constructor(readonly input: DescribePatchPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePatchPropertiesInput,
    DescribePatchPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePatchPropertiesInput, DescribePatchPropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
