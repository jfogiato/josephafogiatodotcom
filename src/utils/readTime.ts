export function calculateReadTime(text: string, wpm = 225): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return `${minutes} minute read`;
}
