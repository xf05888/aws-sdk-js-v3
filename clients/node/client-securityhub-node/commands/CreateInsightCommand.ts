import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateInsight } from "../model/operations/CreateInsight";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInsightInput } from "../types/CreateInsightInput";
import { CreateInsightOutput } from "../types/CreateInsightOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/CreateInsightInput";
export * from "../types/CreateInsightOutput";
export * from "../types/CreateInsightExceptionsUnion";

export class CreateInsightCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInsightInput,
      OutputTypesUnion,
      CreateInsightOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateInsight;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInsightInput,
    CreateInsightOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateInsightInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateInsightInput, CreateInsightOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInsightInput, CreateInsightOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
