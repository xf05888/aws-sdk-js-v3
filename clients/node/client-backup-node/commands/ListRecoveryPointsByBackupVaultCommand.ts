import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRecoveryPointsByBackupVault } from "../model/operations/ListRecoveryPointsByBackupVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRecoveryPointsByBackupVaultInput } from "../types/ListRecoveryPointsByBackupVaultInput";
import { ListRecoveryPointsByBackupVaultOutput } from "../types/ListRecoveryPointsByBackupVaultOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListRecoveryPointsByBackupVaultInput";
export * from "../types/ListRecoveryPointsByBackupVaultOutput";
export * from "../types/ListRecoveryPointsByBackupVaultExceptionsUnion";

export class ListRecoveryPointsByBackupVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRecoveryPointsByBackupVaultInput,
      OutputTypesUnion,
      ListRecoveryPointsByBackupVaultOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRecoveryPointsByBackupVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRecoveryPointsByBackupVaultInput,
    ListRecoveryPointsByBackupVaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRecoveryPointsByBackupVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRecoveryPointsByBackupVaultInput,
    ListRecoveryPointsByBackupVaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListRecoveryPointsByBackupVaultInput,
        ListRecoveryPointsByBackupVaultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
