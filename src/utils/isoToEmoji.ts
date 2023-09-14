export const isoToEmoji = (code: string) =>
  code
    .split('')
    .map(letter => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map(n => String.fromCodePoint(n))
    .join('')
