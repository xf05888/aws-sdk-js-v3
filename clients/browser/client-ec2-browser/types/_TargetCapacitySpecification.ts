/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p> <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance <code>MaxTotalPrice</code>, or both to ensure your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are located in and </p>
 */
export interface _TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled using <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: "spot" | "on-demand" | string;
}

export type _UnmarshalledTargetCapacitySpecification = _TargetCapacitySpecification;
