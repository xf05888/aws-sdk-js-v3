import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResourceDefinition } from "../model/operations/DeleteResourceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourceDefinitionInput } from "../types/DeleteResourceDefinitionInput";
import { DeleteResourceDefinitionOutput } from "../types/DeleteResourceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteResourceDefinitionInput";
export * from "../types/DeleteResourceDefinitionOutput";
export * from "../types/DeleteResourceDefinitionExceptionsUnion";

export class DeleteResourceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResourceDefinitionInput,
      OutputTypesUnion,
      DeleteResourceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteResourceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourceDefinitionInput,
    DeleteResourceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: DeleteResourceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResourceDefinitionInput,
    DeleteResourceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResourceDefinitionInput, DeleteResourceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
