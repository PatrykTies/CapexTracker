// this generates array of days in format that is required by calendar
// ['2019-06-01','2019-06-01','2019-06-01','2019-06-01']
export function getFutureDates(days: number): string[] {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

export function getPastDate(days: number): string {
  return new Date(Date.now() - 864e5 * days).toISOString().split('T')[0];
}
