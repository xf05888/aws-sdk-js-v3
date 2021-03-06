import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ConfirmPrivateVirtualInterface } from "../model/operations/ConfirmPrivateVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmPrivateVirtualInterfaceInput } from "../types/ConfirmPrivateVirtualInterfaceInput";
import { ConfirmPrivateVirtualInterfaceOutput } from "../types/ConfirmPrivateVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/ConfirmPrivateVirtualInterfaceInput";
export * from "../types/ConfirmPrivateVirtualInterfaceOutput";
export * from "../types/ConfirmPrivateVirtualInterfaceExceptionsUnion";

export class ConfirmPrivateVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmPrivateVirtualInterfaceInput,
      OutputTypesUnion,
      ConfirmPrivateVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ConfirmPrivateVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmPrivateVirtualInterfaceInput,
    ConfirmPrivateVirtualInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ConfirmPrivateVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmPrivateVirtualInterfaceInput,
    ConfirmPrivateVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ConfirmPrivateVirtualInterfaceInput,
        ConfirmPrivateVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
