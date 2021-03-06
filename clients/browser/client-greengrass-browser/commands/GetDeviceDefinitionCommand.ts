import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeviceDefinition } from "../model/operations/GetDeviceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceDefinitionInput } from "../types/GetDeviceDefinitionInput";
import { GetDeviceDefinitionOutput } from "../types/GetDeviceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetDeviceDefinitionInput";
export * from "../types/GetDeviceDefinitionOutput";
export * from "../types/GetDeviceDefinitionExceptionsUnion";

export class GetDeviceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceDefinitionInput,
      OutputTypesUnion,
      GetDeviceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetDeviceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceDefinitionInput,
    GetDeviceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: GetDeviceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeviceDefinitionInput,
    GetDeviceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeviceDefinitionInput, GetDeviceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
