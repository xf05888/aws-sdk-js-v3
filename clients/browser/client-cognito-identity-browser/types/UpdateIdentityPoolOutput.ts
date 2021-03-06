import { _UnmarshalledCognitoIdentityProvider } from "./_CognitoIdentityProvider";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface UpdateIdentityPoolOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string;

  /**
   * <p>A string that you provide.</p>
   */
  IdentityPoolName: string;

  /**
   * <p>TRUE if the identity pool supports unauthenticated logins.</p>
   */
  AllowUnauthenticatedIdentities: boolean;

  /**
   * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
   */
  SupportedLoginProviders?: { [key: string]: string };

  /**
   * <p>The "domain" by which Cognito will refer to your users.</p>
   */
  DeveloperProviderName?: string;

  /**
   * <p>A list of OpendID Connect provider ARNs.</p>
   */
  OpenIdConnectProviderARNs?: Array<string>;

  /**
   * <p>A list representing an Amazon Cognito user pool and its client ID.</p>
   */
  CognitoIdentityProviders?: Array<_UnmarshalledCognitoIdentityProvider>;

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.</p>
   */
  SamlProviderARNs?: Array<string>;

  /**
   * <p>The tags that are assigned to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p>
   */
  IdentityPoolTags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
