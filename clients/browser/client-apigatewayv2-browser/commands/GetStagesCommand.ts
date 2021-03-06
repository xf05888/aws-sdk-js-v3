import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStages } from "../model/operations/GetStages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStagesInput } from "../types/GetStagesInput";
import { GetStagesOutput } from "../types/GetStagesOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetStagesInput";
export * from "../types/GetStagesOutput";
export * from "../types/GetStagesExceptionsUnion";

export class GetStagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStagesInput,
      OutputTypesUnion,
      GetStagesOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetStages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStagesInput,
    GetStagesOutput,
    Blob
  >();

  constructor(readonly input: GetStagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStagesInput, GetStagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStagesInput, GetStagesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
