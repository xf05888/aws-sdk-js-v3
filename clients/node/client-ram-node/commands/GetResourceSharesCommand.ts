import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResourceShares } from "../model/operations/GetResourceShares";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceSharesInput } from "../types/GetResourceSharesInput";
import { GetResourceSharesOutput } from "../types/GetResourceSharesOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/GetResourceSharesInput";
export * from "../types/GetResourceSharesOutput";
export * from "../types/GetResourceSharesExceptionsUnion";

export class GetResourceSharesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceSharesInput,
      OutputTypesUnion,
      GetResourceSharesOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResourceShares;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceSharesInput,
    GetResourceSharesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResourceSharesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResourceSharesInput, GetResourceSharesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceSharesInput, GetResourceSharesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
