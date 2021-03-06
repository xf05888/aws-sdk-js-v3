import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServer } from "../model/operations/DeleteServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServerInput } from "../types/DeleteServerInput";
import { DeleteServerOutput } from "../types/DeleteServerOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/DeleteServerInput";
export * from "../types/DeleteServerOutput";
export * from "../types/DeleteServerExceptionsUnion";

export class DeleteServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServerInput,
      OutputTypesUnion,
      DeleteServerOutput,
      TransferResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServerInput,
    DeleteServerOutput,
    Blob
  >();

  constructor(readonly input: DeleteServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteServerInput, DeleteServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServerInput, DeleteServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
