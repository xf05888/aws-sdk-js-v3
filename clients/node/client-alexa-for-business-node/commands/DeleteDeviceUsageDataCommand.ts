import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDeviceUsageData } from "../model/operations/DeleteDeviceUsageData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeviceUsageDataInput } from "../types/DeleteDeviceUsageDataInput";
import { DeleteDeviceUsageDataOutput } from "../types/DeleteDeviceUsageDataOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteDeviceUsageDataInput";
export * from "../types/DeleteDeviceUsageDataOutput";
export * from "../types/DeleteDeviceUsageDataExceptionsUnion";

export class DeleteDeviceUsageDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeviceUsageDataInput,
      OutputTypesUnion,
      DeleteDeviceUsageDataOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDeviceUsageData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeviceUsageDataInput,
    DeleteDeviceUsageDataOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDeviceUsageDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeviceUsageDataInput,
    DeleteDeviceUsageDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeviceUsageDataInput, DeleteDeviceUsageDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
