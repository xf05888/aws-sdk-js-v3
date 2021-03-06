import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelDeploymentJob } from "../model/operations/CancelDeploymentJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelDeploymentJobInput } from "../types/CancelDeploymentJobInput";
import { CancelDeploymentJobOutput } from "../types/CancelDeploymentJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CancelDeploymentJobInput";
export * from "../types/CancelDeploymentJobOutput";
export * from "../types/CancelDeploymentJobExceptionsUnion";

export class CancelDeploymentJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelDeploymentJobInput,
      OutputTypesUnion,
      CancelDeploymentJobOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CancelDeploymentJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelDeploymentJobInput,
    CancelDeploymentJobOutput,
    Blob
  >();

  constructor(readonly input: CancelDeploymentJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelDeploymentJobInput,
    CancelDeploymentJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelDeploymentJobInput, CancelDeploymentJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
