import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutAnomalyDetector } from "../model/operations/PutAnomalyDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAnomalyDetectorInput } from "../types/PutAnomalyDetectorInput";
import { PutAnomalyDetectorOutput } from "../types/PutAnomalyDetectorOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/PutAnomalyDetectorInput";
export * from "../types/PutAnomalyDetectorOutput";
export * from "../types/PutAnomalyDetectorExceptionsUnion";

export class PutAnomalyDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAnomalyDetectorInput,
      OutputTypesUnion,
      PutAnomalyDetectorOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = PutAnomalyDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAnomalyDetectorInput,
    PutAnomalyDetectorOutput,
    Blob
  >();

  constructor(readonly input: PutAnomalyDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAnomalyDetectorInput,
    PutAnomalyDetectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAnomalyDetectorInput, PutAnomalyDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
