import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RetrieveDomainAuthCode } from "../model/operations/RetrieveDomainAuthCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetrieveDomainAuthCodeInput } from "../types/RetrieveDomainAuthCodeInput";
import { RetrieveDomainAuthCodeOutput } from "../types/RetrieveDomainAuthCodeOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/RetrieveDomainAuthCodeInput";
export * from "../types/RetrieveDomainAuthCodeOutput";
export * from "../types/RetrieveDomainAuthCodeExceptionsUnion";

export class RetrieveDomainAuthCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetrieveDomainAuthCodeInput,
      OutputTypesUnion,
      RetrieveDomainAuthCodeOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = RetrieveDomainAuthCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetrieveDomainAuthCodeInput,
    RetrieveDomainAuthCodeOutput,
    Blob
  >();

  constructor(readonly input: RetrieveDomainAuthCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RetrieveDomainAuthCodeInput,
    RetrieveDomainAuthCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetrieveDomainAuthCodeInput, RetrieveDomainAuthCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
