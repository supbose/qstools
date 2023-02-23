'use strict';

var _dayjs = require('dayjs');

var dayjs = _interopRequireWildcard(_dayjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function dayjsScope(n) {
	var of = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
	var tm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD HH:mm:ss';

	var DayJs = dayjs.default;
	var start = DayJs(n).startOf(of).format(tm);
	var end = DayJs(n).endOf(of).format(tm);
	var startDate = DayJs(n).startOf(of).valueOf();
	var endDate = DayJs(n).endOf(of).valueOf();
	return {
		startTime: startDate,
		endTime: endDate,
		strStartTime: start,
		strEndTime: end
	};
}
module.exports = { dayjsScope: dayjsScope };