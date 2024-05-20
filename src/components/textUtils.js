// utils/textUtils.js
export function splitText(text, chunkSize) {
  const words = text.split(' ');
  const chunks = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }
  return chunks;
}

export function mergeText(text) {
  return [text]; // No need to split the text, just return the whole text
}
