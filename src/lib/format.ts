/**
 * FRAMEWORK FILE — you do not need to edit this.
 *
 * Turns the plain "YYYY-MM" dates written in Markdown into readable text.
 */

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** "2026-10" -> "October 2026". A bare "2026" style input is passed through. */
export function formatDate(value?: string): string | undefined {
  if (!value) return undefined;

  const [year, month] = value.split('-');
  const monthName = month ? MONTHS[Number(month) - 1] : undefined;

  return monthName ? `${monthName} ${year}` : year;
}

/**
 * Builds a readable date range.
 *
 *   ("2025-01", "2025-08")          -> "January 2025 – August 2025"
 *   ("2025-01", undefined, true)    -> "January 2025 – Present"
 *   ("2025-01", undefined, false)   -> "January 2025"
 *   (undefined, undefined)          -> undefined  (nothing is rendered)
 */
export function formatDateRange(
  start?: string,
  end?: string,
  ongoing = false,
): string | undefined {
  const from = formatDate(start);
  const to = formatDate(end);

  if (from && to) return `${from} – ${to}`;
  if (from) return ongoing ? `${from} – Present` : from;
  if (to) return to;
  return undefined;
}

/** Machine-readable value for the HTML <time> element. */
export function isoDate(value?: string): string | undefined {
  return value;
}
