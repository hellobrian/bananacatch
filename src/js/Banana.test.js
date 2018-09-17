import Banana from './Banana';

describe('Banana', () => {
  let banana;
  beforeEach(() => {
    banana = new Banana();
  });

  describe('points()', () => {
    it('should return a number', () => {
      const result = typeof banana.points();
      expect(result).toBe('number');
    });

    it('should return a number that is included in Banana.sizesAndPoints.list', () => {
      const list = Banana.sizesAndPoints.list.map(obj => obj.points);
      const points = banana.points();
      const result = list.includes(points);
      expect(result).toBe(true);
    });
  });

  describe('html()', () => {
    let div, button, span;
    beforeEach(() => {
      document.body.innerHTML = '<div></div>';
      div = document.querySelector('div');
      div.innerHTML = banana.html();
      button = document.querySelector('button');
      span = document.querySelector('span');
    });

    describe('button', () => {
      it('should return a string', () => {
        const result = typeof banana.html();
        expect(result).toBe('string');
      });

      it('should have class "banana slideDown-animation"', () => {
        const result = button.classList.contains(
          'banana',
          'slideDown-animation',
        );
        expect(result).toEqual(true);
      });

      it('should have dataset.points', () => {
        const result = typeof button.dataset.points;
        expect(result).toBeDefined();
      });

      it('should have type=button', () => {
        const result = button.getAttribute('type');
        expect(result).toEqual('button');
      });

      it('should have font-size, height and width inline styles', () => {
        const result = Object.keys(button.style._values);
        expect(result.includes('font-size')).toEqual(true);
        expect(result.includes('height')).toEqual(true);
        expect(result.includes('width')).toEqual(true);
      });

      it('should have matching values for inline styles (default is 40px)', () => {
        expect(button.style['font-size']).toEqual('40px');
        expect(button.style.height).toEqual('40px');
        expect(button.style.width).toEqual('40px');
      });
    });

    describe('span', () => {
      it('should have class=swing-animation', () => {
        const result = span.classList.contains('swing-animation');
        expect(result).toEqual(true);
      });

      it('should have dataset.points', () => {
        const result = typeof span.dataset.points;
        expect(result).toBeDefined();
      });
    });
  });
});
