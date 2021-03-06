import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConfig } from "../model/operations/CreateConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigInput } from "../types/CreateConfigInput";
import { CreateConfigOutput } from "../types/CreateConfigOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/CreateConfigInput";
export * from "../types/CreateConfigOutput";
export * from "../types/CreateConfigExceptionsUnion";

export class CreateConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigInput,
      OutputTypesUnion,
      CreateConfigOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigInput,
    CreateConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateConfigInput, CreateConfigOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConfigInput, CreateConfigOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
