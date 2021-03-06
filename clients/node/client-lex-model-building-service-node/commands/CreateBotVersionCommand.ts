import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBotVersion } from "../model/operations/CreateBotVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBotVersionInput } from "../types/CreateBotVersionInput";
import { CreateBotVersionOutput } from "../types/CreateBotVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/CreateBotVersionInput";
export * from "../types/CreateBotVersionOutput";
export * from "../types/CreateBotVersionExceptionsUnion";

export class CreateBotVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBotVersionInput,
      OutputTypesUnion,
      CreateBotVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateBotVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBotVersionInput,
    CreateBotVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBotVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBotVersionInput, CreateBotVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBotVersionInput, CreateBotVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
