export function formatDateOrTime(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();

  // Helper to format time as HH:mm
  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  // Helper to format full date like "Oct, 20 2026"
  const formatFullDate = (date: Date) =>
    date
      .toLocaleDateString([], {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .replace(",", ""); // remove default comma if present

  // Normalize dates (ignore time)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const inputDay = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  );

  if (inputDay.getTime() === today.getTime()) {
    return `Today, ${formatTime(inputDate)}`;
  }

  if (inputDay.getTime() === yesterday.getTime()) {
    return `Yesterday, ${formatTime(inputDate)}`;
  }

  return formatFullDate(inputDate);
}
