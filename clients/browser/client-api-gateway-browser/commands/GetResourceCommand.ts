import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResource } from "../model/operations/GetResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceInput } from "../types/GetResourceInput";
import { GetResourceOutput } from "../types/GetResourceOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetResourceInput";
export * from "../types/GetResourceOutput";
export * from "../types/GetResourceExceptionsUnion";

export class GetResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceInput,
      OutputTypesUnion,
      GetResourceOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceInput,
    GetResourceOutput,
    Blob
  >();

  constructor(readonly input: GetResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResourceInput, GetResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceInput, GetResourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
