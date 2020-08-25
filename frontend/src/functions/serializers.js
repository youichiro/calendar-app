import moment from 'moment';

export const serializeEvent = event => {
  if (event === null) {
    return null;
  }
  const start = new Date(event.start);
  const end = new Date(event.end);
  return {
    ...event,
    start,
    end,
    color: event.color || 'blue',
    startDate: moment(event.start).format('YYYY-MM-DD'),
    startTime: event.timed ? moment(event.start).format('HH:mm:ss') : null,
    endDate: moment(event.end).format('YYYY-MM-DD'),
    endTime: event.timed ? moment(event.end).format('HH:mm:ss') : null
  };
};