/**
 * Transport & Bus Tracking Related Enums
 */

/**
 * Bus Status
 */
export enum BusStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',
  ON_ROUTE = 'ON_ROUTE',
  AT_STOP = 'AT_STOP',
  BREAKDOWN = 'BREAKDOWN',
  OUT_OF_SERVICE = 'OUT_OF_SERVICE',
}

/**
 * Route Status
 */
export enum RouteStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

/**
 * Trip Status
 */
export enum TripStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DELAYED = 'DELAYED',
}

/**
 * Trip Type
 */
export enum TripType {
  PICKUP = 'PICKUP',
  DROP = 'DROP',
  FIELD_TRIP = 'FIELD_TRIP',
  EVENT = 'EVENT',
  SPECIAL = 'SPECIAL',
}

/**
 * Stop Type
 */
export enum StopType {
  PICKUP_POINT = 'PICKUP_POINT',
  DROP_POINT = 'DROP_POINT',
  BOTH = 'BOTH',
}

/**
 * Driver Status
 */
export enum DriverStatus {
  AVAILABLE = 'AVAILABLE',
  ON_DUTY = 'ON_DUTY',
  OFF_DUTY = 'OFF_DUTY',
  ON_LEAVE = 'ON_LEAVE',
  UNAVAILABLE = 'UNAVAILABLE',
}

/**
 * Vehicle Type
 */
export enum VehicleType {
  BUS = 'BUS',
  MINI_BUS = 'MINI_BUS',
  VAN = 'VAN',
  CAR = 'CAR',
}

/**
 * Maintenance Type
 */
export enum MaintenanceType {
  ROUTINE = 'ROUTINE',
  REPAIR = 'REPAIR',
  INSPECTION = 'INSPECTION',
  EMERGENCY = 'EMERGENCY',
}
