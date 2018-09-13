import { times } from 'lodash';

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
  points: points[index],
}));
