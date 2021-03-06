/**
 * <p>A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.</p>
 */
export interface _EndpointDescription {
  /**
   * <p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID.</p>
   */
  EndpointId?: string;

  /**
   * <p>The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint Weights</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
   */
  Weight?: number;

  /**
   * <p>The health status of the endpoint.</p>
   */
  HealthState?: "INITIAL" | "HEALTHY" | "UNHEALTHY" | string;

  /**
   * <p>The reason code associated with why the endpoint is not healthy. If the endpoint state is healthy, a reason code is not provided.</p> <p>If the endpoint state is <b>unhealthy</b>, the reason code can be one of the following values:</p> <ul> <li> <p> <b>Timeout</b>: The health check requests to the endpoint are timing out before returning a status.</p> </li> <li> <p> <b>Failed</b>: The health check failed, for example because the endpoint response was invalid (malformed).</p> </li> </ul> <p>If the endpoint state is <b>initial</b>, the reason code can be one of the following values:</p> <ul> <li> <p> <b>ProvisioningInProgress</b>: The endpoint is in the process of being provisioned.</p> </li> <li> <p> <b>InitialHealthChecking</b>: Global Accelerator is still setting up the minimum number of health checks for the endpoint that are required to determine its health status.</p> </li> </ul>
   */
  HealthReason?: string;
}

export type _UnmarshalledEndpointDescription = _EndpointDescription;
