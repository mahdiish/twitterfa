export function toPersianNumber(eNum) {
  return eNum.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
}
