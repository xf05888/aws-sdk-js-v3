import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateJobTemplate } from "../model/operations/CreateJobTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateJobTemplateInput } from "../types/CreateJobTemplateInput";
import { CreateJobTemplateOutput } from "../types/CreateJobTemplateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/CreateJobTemplateInput";
export * from "../types/CreateJobTemplateOutput";
export * from "../types/CreateJobTemplateExceptionsUnion";

export class CreateJobTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateJobTemplateInput,
      OutputTypesUnion,
      CreateJobTemplateOutput,
      MediaConvertResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateJobTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateJobTemplateInput,
    CreateJobTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateJobTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateJobTemplateInput, CreateJobTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateJobTemplateInput, CreateJobTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
