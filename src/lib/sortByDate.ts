// Converts "YYYY", "YYYY-MM", or "YYYY-MM-DD" to a comparable integer YYYYMMDD.
// Partial dates (missing month/day) use 0, so they sort after full dates of the same year.
function toSortKey(date: string): number {
  const [y = "0", m = "0", d = "0"] = date.split("-");
  return parseInt(y) * 10000 + parseInt(m) * 100 + parseInt(d);
}

export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => toSortKey(b.date) - toSortKey(a.date));
}
