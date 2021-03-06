import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetNetworkProfile } from "../model/operations/GetNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNetworkProfileInput } from "../types/GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "../types/GetNetworkProfileOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetNetworkProfileInput";
export * from "../types/GetNetworkProfileOutput";
export * from "../types/GetNetworkProfileExceptionsUnion";

export class GetNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNetworkProfileInput,
      OutputTypesUnion,
      GetNetworkProfileOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNetworkProfileInput,
    GetNetworkProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetNetworkProfileInput, GetNetworkProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNetworkProfileInput, GetNetworkProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
