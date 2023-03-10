"use strict";

/**
 * @desc 获得时区名和值
 * @version 1.1.0
 * @param { Object } dateObj 时间对象
 * @return { Object } 时区名和值的对象
 */
function timeZoneNameValue(dateObj) {
  var date = new Date(dateObj);
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var arr = date.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
  var obj = {
    name: arr[1],
    value: arr[2]
  };
  return obj;
}

module.exports = timeZoneNameValue;