import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAlgorithm } from "../model/operations/DescribeAlgorithm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAlgorithmInput } from "../types/DescribeAlgorithmInput";
import { DescribeAlgorithmOutput } from "../types/DescribeAlgorithmOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeAlgorithmInput";
export * from "../types/DescribeAlgorithmOutput";
export * from "../types/DescribeAlgorithmExceptionsUnion";

export class DescribeAlgorithmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAlgorithmInput,
      OutputTypesUnion,
      DescribeAlgorithmOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAlgorithm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAlgorithmInput,
    DescribeAlgorithmOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAlgorithmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAlgorithmInput, DescribeAlgorithmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAlgorithmInput, DescribeAlgorithmOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
