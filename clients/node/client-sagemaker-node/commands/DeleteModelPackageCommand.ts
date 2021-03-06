import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteModelPackage } from "../model/operations/DeleteModelPackage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteModelPackageInput } from "../types/DeleteModelPackageInput";
import { DeleteModelPackageOutput } from "../types/DeleteModelPackageOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteModelPackageInput";
export * from "../types/DeleteModelPackageOutput";
export * from "../types/DeleteModelPackageExceptionsUnion";

export class DeleteModelPackageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteModelPackageInput,
      OutputTypesUnion,
      DeleteModelPackageOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteModelPackage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteModelPackageInput,
    DeleteModelPackageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteModelPackageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteModelPackageInput,
    DeleteModelPackageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteModelPackageInput, DeleteModelPackageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
