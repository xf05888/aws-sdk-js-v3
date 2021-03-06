import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLunaClient } from "../model/operations/DeleteLunaClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLunaClientInput } from "../types/DeleteLunaClientInput";
import { DeleteLunaClientOutput } from "../types/DeleteLunaClientOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DeleteLunaClientInput";
export * from "../types/DeleteLunaClientOutput";
export * from "../types/DeleteLunaClientExceptionsUnion";

export class DeleteLunaClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLunaClientInput,
      OutputTypesUnion,
      DeleteLunaClientOutput,
      CloudHSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLunaClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLunaClientInput,
    DeleteLunaClientOutput,
    Blob
  >();

  constructor(readonly input: DeleteLunaClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLunaClientInput, DeleteLunaClientOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLunaClientInput, DeleteLunaClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
