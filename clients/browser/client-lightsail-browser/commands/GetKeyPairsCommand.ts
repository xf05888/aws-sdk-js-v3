import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetKeyPairs } from "../model/operations/GetKeyPairs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetKeyPairsInput } from "../types/GetKeyPairsInput";
import { GetKeyPairsOutput } from "../types/GetKeyPairsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetKeyPairsInput";
export * from "../types/GetKeyPairsOutput";
export * from "../types/GetKeyPairsExceptionsUnion";

export class GetKeyPairsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetKeyPairsInput,
      OutputTypesUnion,
      GetKeyPairsOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetKeyPairs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetKeyPairsInput,
    GetKeyPairsOutput,
    Blob
  >();

  constructor(readonly input: GetKeyPairsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetKeyPairsInput, GetKeyPairsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetKeyPairsInput, GetKeyPairsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
