//getting id and dataType from urlText

export default function parseUrl(urlText) {
  let urlArr = [];

  if (urlText) {
    urlArr = urlText.trim().split('/');
  }

  if (urlArr.length < 6 || urlArr[urlArr.length - 1] !== '') {
    return { id: null, dataType: null };
  } else {
    const id = urlArr[urlArr.length - 2];
    const dataType = urlArr[urlArr.length - 3];
    return { id: id, dataType: dataType };
  }
}
