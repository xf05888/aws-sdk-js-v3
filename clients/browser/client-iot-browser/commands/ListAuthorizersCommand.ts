import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAuthorizers } from "../model/operations/ListAuthorizers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuthorizersInput } from "../types/ListAuthorizersInput";
import { ListAuthorizersOutput } from "../types/ListAuthorizersOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuthorizersInput";
export * from "../types/ListAuthorizersOutput";
export * from "../types/ListAuthorizersExceptionsUnion";

export class ListAuthorizersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuthorizersInput,
      OutputTypesUnion,
      ListAuthorizersOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListAuthorizers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuthorizersInput,
    ListAuthorizersOutput,
    Blob
  >();

  constructor(readonly input: ListAuthorizersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAuthorizersInput, ListAuthorizersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAuthorizersInput, ListAuthorizersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
