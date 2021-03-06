import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateServer } from "../model/operations/UpdateServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServerInput } from "../types/UpdateServerInput";
import { UpdateServerOutput } from "../types/UpdateServerOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/UpdateServerInput";
export * from "../types/UpdateServerOutput";
export * from "../types/UpdateServerExceptionsUnion";

export class UpdateServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServerInput,
      OutputTypesUnion,
      UpdateServerOutput,
      OpsWorksCMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServerInput,
    UpdateServerOutput,
    Blob
  >();

  constructor(readonly input: UpdateServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateServerInput, UpdateServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServerInput, UpdateServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
