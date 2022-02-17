function isLetter(char: string) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code < 65 + 26) || (code >= 97 && code < 97 + 26);
}

function isUpperCase(char: string) {
  const code = char.charCodeAt(0);
  return code >= 65 && code < 65 + 26;
}

function cipher(str: string, shift: number) {
  let shifted = '';
  let char = '';
  let baseCode = 0;

  // Iterate over each character and shift it
  for (let i = 0; i < str.length; i += 1) {
    char = str.charAt(i);
    
    // If it's a letter, then shift it, otherwise just ignore it.
    if (isLetter(char)) {
      if (isUpperCase(char)) {
        baseCode = 65;
      } else {
        baseCode = 97;
      }
      shifted += String.fromCharCode(
        baseCode + ((char.charCodeAt(0) - baseCode + shift) % 26),
      );
    } else {
      shifted += char;
    }
  }
  return shifted;
}

export default cipher;
