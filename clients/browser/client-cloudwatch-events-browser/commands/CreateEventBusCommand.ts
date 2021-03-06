import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEventBus } from "../model/operations/CreateEventBus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEventBusInput } from "../types/CreateEventBusInput";
import { CreateEventBusOutput } from "../types/CreateEventBusOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/CreateEventBusInput";
export * from "../types/CreateEventBusOutput";
export * from "../types/CreateEventBusExceptionsUnion";

export class CreateEventBusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEventBusInput,
      OutputTypesUnion,
      CreateEventBusOutput,
      CloudWatchEventsResolvedConfiguration,
      Blob
    > {
  readonly model = CreateEventBus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEventBusInput,
    CreateEventBusOutput,
    Blob
  >();

  constructor(readonly input: CreateEventBusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateEventBusInput, CreateEventBusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEventBusInput, CreateEventBusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
