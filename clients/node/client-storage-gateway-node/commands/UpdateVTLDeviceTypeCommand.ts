import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVTLDeviceType } from "../model/operations/UpdateVTLDeviceType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVTLDeviceTypeInput } from "../types/UpdateVTLDeviceTypeInput";
import { UpdateVTLDeviceTypeOutput } from "../types/UpdateVTLDeviceTypeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateVTLDeviceTypeInput";
export * from "../types/UpdateVTLDeviceTypeOutput";
export * from "../types/UpdateVTLDeviceTypeExceptionsUnion";

export class UpdateVTLDeviceTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVTLDeviceTypeInput,
      OutputTypesUnion,
      UpdateVTLDeviceTypeOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateVTLDeviceType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVTLDeviceTypeInput,
    UpdateVTLDeviceTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVTLDeviceTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVTLDeviceTypeInput,
    UpdateVTLDeviceTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
