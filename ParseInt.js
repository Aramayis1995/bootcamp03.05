function ParseInt(str) {
  console.log(parseInt("    --54 4"));
  for (let i = 0; i < str.length; i++) {
    if (str[0] === " ") {
      str = str.slice(1, str.length);
    }
  }
  let k = 0;
  if (str.charCodeAt(0) === 45) {
    k = 1;
  }
  console.log(k);
  console.log(str);
  console.log(str.charCodeAt(k));
  if (str.charCodeAt(k) < 48 || str.charCodeAt(k) > 57) {
    console.log(NaN);
    return;
  }
  for (; k < str.length; k++) {
    if (str.charCodeAt(k) < 48 || str.charCodeAt(k) > 57) {
      console.log(str.slice(0, k));
      return;
    }
  }
}
ParseInt("  --54  4 .dsv45");
