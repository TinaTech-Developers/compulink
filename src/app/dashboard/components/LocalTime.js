export function LocalTime({ date }) {
  const month = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleString(
    "de-de",
    { month: "long" }
  );
  const year = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).getFullYear();
  const day = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleString(
    "de-de",
    { day: "2-digit" }
  );
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
