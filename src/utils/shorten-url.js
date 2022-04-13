export function shortenUrl(longUrl) {
  let domainNameShortened;
  const splitedUrl = longUrl.split('/').filter((v) => v);
  const domainName = splitedUrl[1].substr(0, splitedUrl[1].lastIndexOf('.'));
  if (domainName.length > 10) {
    domainNameShortened = domainName.slice(0, 10) + '...';
  } else {
    domainNameShortened = domainName;
  }
  const urlShortened = buildNewUrl(splitedUrl, domainNameShortened);
  return urlShortened;
}

function buildNewUrl(splitedUrl, domainNameShortened) {
  const newUrl =
    splitedUrl[0] +
    '//' +
    domainNameShortened +
    '/' +
    splitedUrl.slice(2).join('/');
  return newUrl;
}
