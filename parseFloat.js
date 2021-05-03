function ParseFloat(str) {
  str = str.trim();
  if (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
    console.log(NaN);
    return;
  }
  let j;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      j = i;
      break;
    }
  }
  let counter = str.slice(0, j);
  for (j = j + 1; j < str.length; j++) {
    if (str.charCodeAt(j) < 48 || str.charCodeAt(j) > 57) {
      console.log(Number(str.slice(0, j)));
      return;
    }
  }
}
ParseFloat("   5.55.gk  ");
