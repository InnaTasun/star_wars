export default function parseUrl(urlText) {
  const urlArr = urlText.trim().split("/");
  const id = urlArr[urlArr.length - 2];
  const dataType = urlArr[urlArr.length - 3];

  return { id, dataType };
}
