import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExportBackupPlanTemplate } from "../model/operations/ExportBackupPlanTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportBackupPlanTemplateInput } from "../types/ExportBackupPlanTemplateInput";
import { ExportBackupPlanTemplateOutput } from "../types/ExportBackupPlanTemplateOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ExportBackupPlanTemplateInput";
export * from "../types/ExportBackupPlanTemplateOutput";
export * from "../types/ExportBackupPlanTemplateExceptionsUnion";

export class ExportBackupPlanTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportBackupPlanTemplateInput,
      OutputTypesUnion,
      ExportBackupPlanTemplateOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExportBackupPlanTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportBackupPlanTemplateInput,
    ExportBackupPlanTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExportBackupPlanTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportBackupPlanTemplateInput,
    ExportBackupPlanTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
