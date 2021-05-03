function ParseInt(str) {
  for (i = 0; i < str.length; i++) {
    if (str[0] === " ") {
      str = str.slice(1, str.length);
    }
  }
  if ((str.charCodeAt(0) < 48 || str.charCodeAt(0)) > 57) {
    console.log(NaN);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
      console.log(str.slice(0, i));
      return;
    }
  }
}
ParseInt("  54  4 .dsv45");
