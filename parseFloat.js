function ParseFloat(str) {
  for (i = 0; i < str.length; i++) {
    if (str[0] === " ") {
      str = str.slice(1, str.length);
    }
  }
  if (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
    console.log(NaN);
    return;
  }
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    j += 1;
    if (str[i] === ".") {
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
ParseFloat("5.5.gk");
