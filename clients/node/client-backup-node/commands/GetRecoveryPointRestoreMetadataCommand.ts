import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRecoveryPointRestoreMetadata } from "../model/operations/GetRecoveryPointRestoreMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRecoveryPointRestoreMetadataInput } from "../types/GetRecoveryPointRestoreMetadataInput";
import { GetRecoveryPointRestoreMetadataOutput } from "../types/GetRecoveryPointRestoreMetadataOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetRecoveryPointRestoreMetadataInput";
export * from "../types/GetRecoveryPointRestoreMetadataOutput";
export * from "../types/GetRecoveryPointRestoreMetadataExceptionsUnion";

export class GetRecoveryPointRestoreMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRecoveryPointRestoreMetadataInput,
      OutputTypesUnion,
      GetRecoveryPointRestoreMetadataOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRecoveryPointRestoreMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRecoveryPointRestoreMetadataInput,
    GetRecoveryPointRestoreMetadataOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRecoveryPointRestoreMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRecoveryPointRestoreMetadataInput,
    GetRecoveryPointRestoreMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRecoveryPointRestoreMetadataInput,
        GetRecoveryPointRestoreMetadataOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
