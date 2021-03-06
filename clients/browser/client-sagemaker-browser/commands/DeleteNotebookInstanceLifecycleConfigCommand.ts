import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNotebookInstanceLifecycleConfig } from "../model/operations/DeleteNotebookInstanceLifecycleConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../types/DeleteNotebookInstanceLifecycleConfigInput";
import { DeleteNotebookInstanceLifecycleConfigOutput } from "../types/DeleteNotebookInstanceLifecycleConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteNotebookInstanceLifecycleConfigInput";
export * from "../types/DeleteNotebookInstanceLifecycleConfigOutput";
export * from "../types/DeleteNotebookInstanceLifecycleConfigExceptionsUnion";

export class DeleteNotebookInstanceLifecycleConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotebookInstanceLifecycleConfigInput,
      OutputTypesUnion,
      DeleteNotebookInstanceLifecycleConfigOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteNotebookInstanceLifecycleConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotebookInstanceLifecycleConfigInput,
    DeleteNotebookInstanceLifecycleConfigOutput,
    Blob
  >();

  constructor(readonly input: DeleteNotebookInstanceLifecycleConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotebookInstanceLifecycleConfigInput,
    DeleteNotebookInstanceLifecycleConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteNotebookInstanceLifecycleConfigInput,
        DeleteNotebookInstanceLifecycleConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
