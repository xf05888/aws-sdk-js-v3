import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelImportTask } from "../model/operations/CancelImportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelImportTaskInput } from "../types/CancelImportTaskInput";
import { CancelImportTaskOutput } from "../types/CancelImportTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelImportTaskInput";
export * from "../types/CancelImportTaskOutput";
export * from "../types/CancelImportTaskExceptionsUnion";

export class CancelImportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelImportTaskInput,
      OutputTypesUnion,
      CancelImportTaskOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CancelImportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelImportTaskInput,
    CancelImportTaskOutput,
    Blob
  >();

  constructor(readonly input: CancelImportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelImportTaskInput, CancelImportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelImportTaskInput, CancelImportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
