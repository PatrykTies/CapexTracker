import {getPastDate, getFutureDates} from './calendarUtils';
const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(0); //was 3
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
export const data = [
  {
    title: '2021-03-29',
    data: [
      {hour: '4', duration: 'Worked on bugs', title: 'BAU'},
      {hour: '32', duration: 'Worked on checkout /pay page', title: 'CHECKOUT'},
    ],
  },
  {
    title: '2021-04-05',
    data: [
      {hour: '4pm', duration: '7d', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    title: '2021-04-12',
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Streches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: '2021-04-19',
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {title: '2021-04-26', data: [{}]},
  {
    title: dates[5],
    data: [
      {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'},
    ],
  },
  {
    title: dates[6],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {title: dates[7], data: [{}]},
  {
    title: dates[8],
    data: [
      {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'},
    ],
  },
  {
    title: dates[9],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Streches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: dates[10],
    data: [{hour: '12am', duration: '1h', title: 'Last Yoga'}],
  },
];
