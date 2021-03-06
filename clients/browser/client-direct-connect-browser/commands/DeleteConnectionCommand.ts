import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConnection } from "../model/operations/DeleteConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConnectionInput } from "../types/DeleteConnectionInput";
import { DeleteConnectionOutput } from "../types/DeleteConnectionOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteConnectionInput";
export * from "../types/DeleteConnectionOutput";
export * from "../types/DeleteConnectionExceptionsUnion";

export class DeleteConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConnectionInput,
      OutputTypesUnion,
      DeleteConnectionOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConnectionInput,
    DeleteConnectionOutput,
    Blob
  >();

  constructor(readonly input: DeleteConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteConnectionInput, DeleteConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConnectionInput, DeleteConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
