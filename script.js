var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek);