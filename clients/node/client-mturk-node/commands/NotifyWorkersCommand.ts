import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { NotifyWorkers } from "../model/operations/NotifyWorkers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { NotifyWorkersInput } from "../types/NotifyWorkersInput";
import { NotifyWorkersOutput } from "../types/NotifyWorkersOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/NotifyWorkersInput";
export * from "../types/NotifyWorkersOutput";
export * from "../types/NotifyWorkersExceptionsUnion";

export class NotifyWorkersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      NotifyWorkersInput,
      OutputTypesUnion,
      NotifyWorkersOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = NotifyWorkers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    NotifyWorkersInput,
    NotifyWorkersOutput,
    _stream.Readable
  >();

  constructor(readonly input: NotifyWorkersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<NotifyWorkersInput, NotifyWorkersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<NotifyWorkersInput, NotifyWorkersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
