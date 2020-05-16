import Random from './Random';

describe('Random', () => {
  let random;
  beforeEach(() => {
    random = new Random();
  });

  describe('number()', () => {
    it('should return a number equal to 1', () => {
      const result = random.number(1, 1);
      expect(result).toEqual(1);
    });

    it('should return a number equal to 0', () => {
      const result = random.number(0, 0);
      expect(result).toEqual(0);
    });

    it('should not return a number greater than the max', () => {
      const result = random.number(1, 4);
      expect(result).toBeLessThan(5);
    });

    it('should not return a number less than the min', () => {
      const result = random.number(1, 4);
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('size', () => {
    it('should return a number', () => {
      const result = typeof random.size();
      expect(result).toBe('number');
    });

    it('should return number from sizes array', () => {
      const array = Random.sizes;
      const result = random.size();
      expect(array.includes(result)).toBe(true);
    });
  });

  describe('static#sizes', () => {
    it('should be an array with length of 10', () => {
      const result = Random.sizes;
      expect(result).toHaveLength(10);
    });

    it('should contain numbers', () => {
      Random.sizes.forEach(size => {
        const result = typeof size;
        expect(result).toBe('number');
      });
    });
  });
});
