import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserSettings } from "../model/operations/UpdateUserSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserSettingsInput } from "../types/UpdateUserSettingsInput";
import { UpdateUserSettingsOutput } from "../types/UpdateUserSettingsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateUserSettingsInput";
export * from "../types/UpdateUserSettingsOutput";
export * from "../types/UpdateUserSettingsExceptionsUnion";

export class UpdateUserSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserSettingsInput,
      OutputTypesUnion,
      UpdateUserSettingsOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserSettingsInput,
    UpdateUserSettingsOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserSettingsInput,
    UpdateUserSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserSettingsInput, UpdateUserSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
