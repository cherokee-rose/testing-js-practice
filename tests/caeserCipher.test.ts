import cipher from '../functions/caeserCipher';

test('ciphering a string by shifting its character\'s positions', () => {
  const text = 'Some really complex sentences. With a lot of periods, commas, semicolons, etc. Some random quote: "I love rice with chicken. Do you?"';

  expect(cipher(text, 1)).toBe('Tpnf sfbmmz dpnqmfy tfoufodft. Xjui b mpu pg qfsjpet, dpnnbt, tfnjdpmpot, fud. Tpnf sboepn rvpuf: "J mpwf sjdf xjui dijdlfo. Ep zpv?"');
  expect(cipher(text, 2)).toBe('Uqog tgcnna eqorngz ugpvgpegu. Ykvj c nqv qh rgtkqfu, eqoocu, ugokeqnqpu, gve. Uqog tcpfqo swqvg: "K nqxg tkeg ykvj ejkemgp. Fq aqw?"');
  expect(cipher(text, 3)).toBe('Vrph uhdoob frpsoha vhqwhqfhv. Zlwk d orw ri shulrgv, frppdv, vhplfrorqv, hwf. Vrph udqgrp txrwh: "L oryh ulfh zlwk fklfnhq. Gr brx?"');
  
  expect(cipher(text, 26)).toBe(text);
  expect(cipher(text, 27)).toBe(cipher(text, 1));
  expect(cipher(text, 28)).toBe(cipher(text, 2));
});
