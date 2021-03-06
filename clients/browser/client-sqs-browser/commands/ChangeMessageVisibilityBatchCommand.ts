import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ChangeMessageVisibilityBatch } from "../model/operations/ChangeMessageVisibilityBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ChangeMessageVisibilityBatchInput } from "../types/ChangeMessageVisibilityBatchInput";
import { ChangeMessageVisibilityBatchOutput } from "../types/ChangeMessageVisibilityBatchOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/ChangeMessageVisibilityBatchInput";
export * from "../types/ChangeMessageVisibilityBatchOutput";
export * from "../types/ChangeMessageVisibilityBatchExceptionsUnion";

export class ChangeMessageVisibilityBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ChangeMessageVisibilityBatchInput,
      OutputTypesUnion,
      ChangeMessageVisibilityBatchOutput,
      SQSResolvedConfiguration,
      Blob
    > {
  readonly model = ChangeMessageVisibilityBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ChangeMessageVisibilityBatchInput,
    ChangeMessageVisibilityBatchOutput,
    Blob
  >();

  constructor(readonly input: ChangeMessageVisibilityBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ChangeMessageVisibilityBatchInput,
    ChangeMessageVisibilityBatchOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ChangeMessageVisibilityBatchInput,
        ChangeMessageVisibilityBatchOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
