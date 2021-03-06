import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelUpdateStack } from "../model/operations/CancelUpdateStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelUpdateStackInput } from "../types/CancelUpdateStackInput";
import { CancelUpdateStackOutput } from "../types/CancelUpdateStackOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/CancelUpdateStackInput";
export * from "../types/CancelUpdateStackOutput";
export * from "../types/CancelUpdateStackExceptionsUnion";

export class CancelUpdateStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelUpdateStackInput,
      OutputTypesUnion,
      CancelUpdateStackOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelUpdateStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelUpdateStackInput,
    CancelUpdateStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelUpdateStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelUpdateStackInput, CancelUpdateStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelUpdateStackInput, CancelUpdateStackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
