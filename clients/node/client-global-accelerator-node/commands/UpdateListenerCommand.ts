import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateListener } from "../model/operations/UpdateListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateListenerInput } from "../types/UpdateListenerInput";
import { UpdateListenerOutput } from "../types/UpdateListenerOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/UpdateListenerInput";
export * from "../types/UpdateListenerOutput";
export * from "../types/UpdateListenerExceptionsUnion";

export class UpdateListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateListenerInput,
      OutputTypesUnion,
      UpdateListenerOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateListenerInput,
    UpdateListenerOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateListenerInput, UpdateListenerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateListenerInput, UpdateListenerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
