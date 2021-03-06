import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBatchPrediction } from "../model/operations/CreateBatchPrediction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBatchPredictionInput } from "../types/CreateBatchPredictionInput";
import { CreateBatchPredictionOutput } from "../types/CreateBatchPredictionOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateBatchPredictionInput";
export * from "../types/CreateBatchPredictionOutput";
export * from "../types/CreateBatchPredictionExceptionsUnion";

export class CreateBatchPredictionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBatchPredictionInput,
      OutputTypesUnion,
      CreateBatchPredictionOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBatchPrediction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBatchPredictionInput,
    CreateBatchPredictionOutput,
    Blob
  >();

  constructor(readonly input: CreateBatchPredictionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateBatchPredictionInput,
    CreateBatchPredictionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBatchPredictionInput, CreateBatchPredictionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
