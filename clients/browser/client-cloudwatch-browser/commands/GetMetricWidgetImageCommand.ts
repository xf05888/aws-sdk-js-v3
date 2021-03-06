import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMetricWidgetImage } from "../model/operations/GetMetricWidgetImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMetricWidgetImageInput } from "../types/GetMetricWidgetImageInput";
import { GetMetricWidgetImageOutput } from "../types/GetMetricWidgetImageOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/GetMetricWidgetImageInput";
export * from "../types/GetMetricWidgetImageOutput";
export * from "../types/GetMetricWidgetImageExceptionsUnion";

export class GetMetricWidgetImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMetricWidgetImageInput,
      OutputTypesUnion,
      GetMetricWidgetImageOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = GetMetricWidgetImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMetricWidgetImageInput,
    GetMetricWidgetImageOutput,
    Blob
  >();

  constructor(readonly input: GetMetricWidgetImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMetricWidgetImageInput,
    GetMetricWidgetImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMetricWidgetImageInput, GetMetricWidgetImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
