import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBaiduChannel } from "../model/operations/UpdateBaiduChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBaiduChannelInput } from "../types/UpdateBaiduChannelInput";
import { UpdateBaiduChannelOutput } from "../types/UpdateBaiduChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateBaiduChannelInput";
export * from "../types/UpdateBaiduChannelOutput";
export * from "../types/UpdateBaiduChannelExceptionsUnion";

export class UpdateBaiduChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBaiduChannelInput,
      OutputTypesUnion,
      UpdateBaiduChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBaiduChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBaiduChannelInput,
    UpdateBaiduChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBaiduChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBaiduChannelInput,
    UpdateBaiduChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBaiduChannelInput, UpdateBaiduChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
