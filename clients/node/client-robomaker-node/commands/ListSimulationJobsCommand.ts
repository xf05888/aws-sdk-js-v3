import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSimulationJobs } from "../model/operations/ListSimulationJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSimulationJobsInput } from "../types/ListSimulationJobsInput";
import { ListSimulationJobsOutput } from "../types/ListSimulationJobsOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/ListSimulationJobsInput";
export * from "../types/ListSimulationJobsOutput";
export * from "../types/ListSimulationJobsExceptionsUnion";

export class ListSimulationJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSimulationJobsInput,
      OutputTypesUnion,
      ListSimulationJobsOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSimulationJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSimulationJobsInput,
    ListSimulationJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSimulationJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSimulationJobsInput,
    ListSimulationJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSimulationJobsInput, ListSimulationJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
