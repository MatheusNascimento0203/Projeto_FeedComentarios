export default (hour) => {
  const hours = String(hour.getHours()).padStart(2, "0");
  const minutes = String(hour.getMinutes()).padStart(2, "0");
  const seconds = String(hour.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
