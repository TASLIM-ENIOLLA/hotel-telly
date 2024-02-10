export function getMinDate(days: number = 0): string {
  const today = new Date();

  today.setDate(today.getDate() + days);

  const year = today.getFullYear();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function setDate(date: string, days: number = 0): string {
  const dateObj = new Date(date) || new Date();

  dateObj.setDate(dateObj.getDate() + days);

  const year = dateObj.getFullYear();
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function dateDiff(dateA: string, dateB: string) {
  const dateObjectA = new Date(dateA);
  const dateObjectB = new Date(dateB);

  const dateMsA = dateObjectA.getTime();
  const dateMsB = dateObjectB.getTime();

  const diffMs = dateMsA - dateMsB;

  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

  return diffDays;
}