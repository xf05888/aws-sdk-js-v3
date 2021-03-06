import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateEnvironment } from "../model/operations/UpdateEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEnvironmentInput } from "../types/UpdateEnvironmentInput";
import { UpdateEnvironmentOutput } from "../types/UpdateEnvironmentOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateEnvironmentInput";
export * from "../types/UpdateEnvironmentOutput";
export * from "../types/UpdateEnvironmentExceptionsUnion";

export class UpdateEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEnvironmentInput,
      OutputTypesUnion,
      UpdateEnvironmentOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEnvironmentInput,
    UpdateEnvironmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateEnvironmentInput, UpdateEnvironmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEnvironmentInput, UpdateEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
