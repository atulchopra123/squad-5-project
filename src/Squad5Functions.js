function jsDate(date, time) {
  var dt = new Date(...`${date} ${time}`.split(/[- :]/));
  // BUG?? - Month seems to be off by 1...
  dt.setMonth(dt.getMonth() - 1);
  return dt;
}

function formatDate(date, time) {
  const utcSeconds = jsDate(date, time).getTime() / 1000;
  const d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  return d.toLocaleDateString("en-US");
}
function formatTime(date, time) {
  const utcSeconds = jsDate(date, time).getTime() / 1000;
  const d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  return d.toLocaleTimeString("en-US");
}

  function fixedRound (value) {
    let leftNum = Math.floor(value);
    var remainder = value - leftNum;
    if (remainder >= 0.05) {
      return value.toFixed(1);
    };
    return leftNum.toString();
  }

  export {
    formatDate, formatTime, fixedRound
  }