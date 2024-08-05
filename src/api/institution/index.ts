export function setModule(data) {
  return new Promise((resolve) => {
    console.log(data);
    resolve({
      code: 200,
      msg: 'success',
    });
  });
}
