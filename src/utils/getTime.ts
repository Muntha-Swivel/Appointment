const getTime = (date: Date) => {
  const h = date.getHours();
  const m = date.getMinutes();
  const time = h + ':' + m;
  return time;
};

export {getTime};
