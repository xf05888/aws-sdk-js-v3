import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLifecycleHook } from "../model/operations/DeleteLifecycleHook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLifecycleHookInput } from "../types/DeleteLifecycleHookInput";
import { DeleteLifecycleHookOutput } from "../types/DeleteLifecycleHookOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DeleteLifecycleHookInput";
export * from "../types/DeleteLifecycleHookOutput";
export * from "../types/DeleteLifecycleHookExceptionsUnion";

export class DeleteLifecycleHookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLifecycleHookInput,
      OutputTypesUnion,
      DeleteLifecycleHookOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLifecycleHook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLifecycleHookInput,
    DeleteLifecycleHookOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLifecycleHookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLifecycleHookInput,
    DeleteLifecycleHookOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLifecycleHookInput, DeleteLifecycleHookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
