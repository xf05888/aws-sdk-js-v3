import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDomainEntry } from "../model/operations/CreateDomainEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDomainEntryInput } from "../types/CreateDomainEntryInput";
import { CreateDomainEntryOutput } from "../types/CreateDomainEntryOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateDomainEntryInput";
export * from "../types/CreateDomainEntryOutput";
export * from "../types/CreateDomainEntryExceptionsUnion";

export class CreateDomainEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDomainEntryInput,
      OutputTypesUnion,
      CreateDomainEntryOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDomainEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDomainEntryInput,
    CreateDomainEntryOutput,
    Blob
  >();

  constructor(readonly input: CreateDomainEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDomainEntryInput, CreateDomainEntryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDomainEntryInput, CreateDomainEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
