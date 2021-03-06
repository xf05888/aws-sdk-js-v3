import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationSetEventDestination } from "../model/operations/DeleteConfigurationSetEventDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationSetEventDestinationInput } from "../types/DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "../types/DeleteConfigurationSetEventDestinationOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/DeleteConfigurationSetEventDestinationInput";
export * from "../types/DeleteConfigurationSetEventDestinationOutput";
export * from "../types/DeleteConfigurationSetEventDestinationExceptionsUnion";

export class DeleteConfigurationSetEventDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationSetEventDestinationInput,
      OutputTypesUnion,
      DeleteConfigurationSetEventDestinationOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConfigurationSetEventDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationSetEventDestinationInput,
    DeleteConfigurationSetEventDestinationOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigurationSetEventDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationSetEventDestinationInput,
    DeleteConfigurationSetEventDestinationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConfigurationSetEventDestinationInput,
        DeleteConfigurationSetEventDestinationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
