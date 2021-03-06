import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateClientVpnRoute } from "../model/operations/CreateClientVpnRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClientVpnRouteInput } from "../types/CreateClientVpnRouteInput";
import { CreateClientVpnRouteOutput } from "../types/CreateClientVpnRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateClientVpnRouteInput";
export * from "../types/CreateClientVpnRouteOutput";
export * from "../types/CreateClientVpnRouteExceptionsUnion";

export class CreateClientVpnRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClientVpnRouteInput,
      OutputTypesUnion,
      CreateClientVpnRouteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateClientVpnRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClientVpnRouteInput,
    CreateClientVpnRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateClientVpnRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClientVpnRouteInput,
    CreateClientVpnRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClientVpnRouteInput, CreateClientVpnRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
