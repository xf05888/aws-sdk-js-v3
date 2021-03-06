import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFunctionDefinitionVersions } from "../model/operations/ListFunctionDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFunctionDefinitionVersionsInput } from "../types/ListFunctionDefinitionVersionsInput";
import { ListFunctionDefinitionVersionsOutput } from "../types/ListFunctionDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListFunctionDefinitionVersionsInput";
export * from "../types/ListFunctionDefinitionVersionsOutput";
export * from "../types/ListFunctionDefinitionVersionsExceptionsUnion";

export class ListFunctionDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFunctionDefinitionVersionsInput,
      OutputTypesUnion,
      ListFunctionDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFunctionDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFunctionDefinitionVersionsInput,
    ListFunctionDefinitionVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFunctionDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFunctionDefinitionVersionsInput,
    ListFunctionDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListFunctionDefinitionVersionsInput,
        ListFunctionDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
