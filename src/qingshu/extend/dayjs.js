import * as dayjs from 'dayjs'

function dayjsScope(n, of = 'd', tm = 'YYYY-MM-DD HH:mm:ss') {
	const DayJs = dayjs.default
	const start = DayJs(n).startOf(of).format(tm)
	const end = DayJs(n).endOf(of).format(tm)
	const startDate = DayJs(n).startOf(of).valueOf()
	const endDate = DayJs(n).endOf(of).valueOf()
	return {
		startTime: startDate,
		endTime: endDate,
		strStartTime: start,
		strEndTime: end
	}
}
module.exports = { dayjsScope }
