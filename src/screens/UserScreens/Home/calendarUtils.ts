// this generates array od days in format that calendar wants
// ['2019-06-01','2019-06-01','2019-06-01','2019-06-01']
export function getFutureDates(days: number) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

export function getPastDate(days: number) {
  return new Date(Date.now() - 864e5 * days).toISOString().split('T')[0];
}

// function getDayName(dateStr, locale) {
//   var date = new Date(dateStr);
//   return date.toLocaleDateString(locale, { weekday: 'long' });
// }

// //const newdate = format(new Date(2021, 12 - 1, 31), 'yyyy-MM-dd');

// var dateStr = '2023-01-20';
// var day = getDayName(dateStr, 'en-GB');
