import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetPermission } from "../model/operations/SetPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetPermissionInput } from "../types/SetPermissionInput";
import { SetPermissionOutput } from "../types/SetPermissionOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/SetPermissionInput";
export * from "../types/SetPermissionOutput";
export * from "../types/SetPermissionExceptionsUnion";

export class SetPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetPermissionInput,
      OutputTypesUnion,
      SetPermissionOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = SetPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetPermissionInput,
    SetPermissionOutput,
    Blob
  >();

  constructor(readonly input: SetPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<SetPermissionInput, SetPermissionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetPermissionInput, SetPermissionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
