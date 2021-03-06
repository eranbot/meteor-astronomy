import _ from 'lodash';
import Validator from '../../validator.js';

Validator.create({
  name: 'choice',
	parseParam(param) {
    if (!Match.test(param, [Match.Any])) {
      throw new TypeError(
        `Parameter for the "choice" validator has to be an array of values`
      );
    }
  },
  isValid({ value, param }) {
    return _.includes(param, value);
  },
  resolveError({ name, param }) {
		var choices = param.join(', ');
    return `"${name}" has to be one of the values ${choices}`;
  }
});