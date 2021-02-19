export const isNumber = (text: string) => /^[0-9]*$/.test(text);
export const isLetter = (text: string) => /^[A-Za-z]*$/.test(text);
export const isEmpty = (text: string) => !text.replace(/\s\s+/g, '')?.length;
