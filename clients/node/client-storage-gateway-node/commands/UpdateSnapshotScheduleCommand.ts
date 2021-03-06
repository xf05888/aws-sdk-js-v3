import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSnapshotSchedule } from "../model/operations/UpdateSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSnapshotScheduleInput } from "../types/UpdateSnapshotScheduleInput";
import { UpdateSnapshotScheduleOutput } from "../types/UpdateSnapshotScheduleOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateSnapshotScheduleInput";
export * from "../types/UpdateSnapshotScheduleOutput";
export * from "../types/UpdateSnapshotScheduleExceptionsUnion";

export class UpdateSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSnapshotScheduleInput,
      OutputTypesUnion,
      UpdateSnapshotScheduleOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSnapshotScheduleInput,
    UpdateSnapshotScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSnapshotScheduleInput,
    UpdateSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
