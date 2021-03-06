import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobBookmark } from "../model/operations/GetJobBookmark";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobBookmarkInput } from "../types/GetJobBookmarkInput";
import { GetJobBookmarkOutput } from "../types/GetJobBookmarkOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetJobBookmarkInput";
export * from "../types/GetJobBookmarkOutput";
export * from "../types/GetJobBookmarkExceptionsUnion";

export class GetJobBookmarkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobBookmarkInput,
      OutputTypesUnion,
      GetJobBookmarkOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobBookmark;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobBookmarkInput,
    GetJobBookmarkOutput,
    Blob
  >();

  constructor(readonly input: GetJobBookmarkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobBookmarkInput, GetJobBookmarkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobBookmarkInput, GetJobBookmarkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
