export default function (str: string) {
  if (str.length < 2) {
    return str;
  }

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str.charAt(i);
  }

  return reversed;
}
