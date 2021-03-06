import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDiscoveredResources } from "../model/operations/ListDiscoveredResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDiscoveredResourcesInput } from "../types/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "../types/ListDiscoveredResourcesOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/ListDiscoveredResourcesInput";
export * from "../types/ListDiscoveredResourcesOutput";
export * from "../types/ListDiscoveredResourcesExceptionsUnion";

export class ListDiscoveredResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDiscoveredResourcesInput,
      OutputTypesUnion,
      ListDiscoveredResourcesOutput,
      MigrationHubResolvedConfiguration,
      Blob
    > {
  readonly model = ListDiscoveredResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDiscoveredResourcesInput,
    ListDiscoveredResourcesOutput,
    Blob
  >();

  constructor(readonly input: ListDiscoveredResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDiscoveredResourcesInput,
    ListDiscoveredResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDiscoveredResourcesInput, ListDiscoveredResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
