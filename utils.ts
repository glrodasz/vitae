/**
 * Calculates the duration between two dates in a human-readable format
 * @param startDate - The start date in a human-readable format (e.g., "August 2021")
 * @param endDate - The end date in a human-readable format or null for current date
 * @returns The total duration in months (e.g., "5 months", "36 months")
 */
export const calculateDuration = (startDate: string, endDate: string | null): string => {
  // Parse the dates more reliably
  const parseDate = (dateStr: string | null): Date => {
    if (!dateStr) return new Date();

    // Handle month names
    const months: Record<string, number> = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    const parts = dateStr.split(' ');
    if (parts.length === 2 && months[parts[0]] !== undefined) {
      const month = months[parts[0]];
      const year = parseInt(parts[1], 10);
      return new Date(year, month, 1);
    }

    // Fallback to standard parsing
    return new Date(dateStr);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // Ensure we have valid dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "";
  }

  // Total months, counting both the start and the end month.
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  return `${totalMonths} ${totalMonths === 1 ? 'month' : 'months'}`;
};
