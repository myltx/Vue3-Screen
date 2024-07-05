/**
 * @description: 获取路径参数
 * @param {*} url
 * @return {*}
 */
export function parameteUrl(url: string) {
  const json: any = {};
  if (/\?/.test(url)) {
    const urlString = url.substring(url.indexOf('?') + 1);
    const urlArray = urlString.split('&');
    for (let i = 0; i < urlArray.length; i++) {
      const urlItem = urlArray[i];
      const item = urlItem.split('=');
      // console.log(item);
      json[item[0]] = item[1];
    }
    return json;
  }
  return {};
}

// get请求从config.url获取参数，post从config.body中获取参数
export function paramObj(url: string) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
      '"}',
  );
}
