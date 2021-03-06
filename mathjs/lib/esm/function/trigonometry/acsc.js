import { factory } from '../../utils/factory.js';
import { deepMap } from '../../utils/collection.js';
import { acscNumber } from '../../plain/number/index.js';
var name = 'acsc';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
export var createAcsc = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex,
    BigNumber: _BigNumber
  } = _ref;

  /**
   * Calculate the inverse cosecant of a value, defined as `acsc(x) = asin(1/x)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.acsc(x)
   *
   * Examples:
   *
   *    math.acsc(0.5)           // returns number 0.5235987755982989
   *    math.acsc(math.csc(1.5)) // returns number ~1.5
   *
   *    math.acsc(2)             // returns Complex 1.5707963267948966 -1.3169578969248166 i
   *
   * See also:
   *
   *    csc, asin, asec
   *
   * @param {number | Complex | Array | Matrix} x   Function input
   * @return {number | Complex | Array | Matrix} The arc cosecant of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= -1 || x >= 1 || config.predictable) {
        return acscNumber(x);
      }

      return new Complex(x, 0).acsc();
    },
    Complex: function Complex(x) {
      return x.acsc();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).asin();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, this);
    }
  });
});