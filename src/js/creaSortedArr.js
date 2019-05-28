// eslint-disable-next-line import/prefer-default-export
export function creaSortedArr(obj, orderReq) {
  const outArray = [];
  // sorting by value order
  for (const prop in obj) {
    if (orderReq.indexOf(prop) === -1) {
      outArray.push({
        key: prop,
        value: obj[prop],
      });
    }
  }
  outArray.sort((a, b) => b.value - a.value);
  // sorting by requirements, adding elements as 1st and 2nd elements
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i >= 0; i--) {
    outArray.unshift({
      key: orderReq[i],
      value: obj[orderReq[i]],
    });
  }
  return outArray;
}
