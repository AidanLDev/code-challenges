function caesarCipherEncryptor(string, key) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let newString = [];
  const getKeyByValue = (value) => {
    return Object.keys(alphabet).find((key) => alphabet[key] === value);
  };

  key = key % 26; // This will ensure the key wraps around correctly for large keys

  string.split('').forEach((letter) => {
    let letterToGet;
    if (alphabet[letter] + key > 26) {
      letterToGet = alphabet[letter] + key - 26;
    } else {
      letterToGet = alphabet[letter] + key;
    }
    newString.push(getKeyByValue(letterToGet));
  });

  return newString.join('');
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
