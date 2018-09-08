import { times } from "lodash";

/**
 * Different sizes for bananas
 */
export const sizes = [40, 45, 50, 55, 60, 65, 70, 80, 85, 90];

/**
 * Maximum points for a single banana
 */
export const maxPoints = 100;

/**
 * Array of points per banana from maxPoints (100) to dynamic minimum
 */
export const points = times(10).map((_, index) => maxPoints - index * 10);

/**
 * Array of objects mapping sizes to points for bananas
 */
export const sizesAndPoints = sizes.map((size, index) => ({
  size,
  points: points[index]
}));
