
const cutImgPath = (path) => {
  const cut = path.split('/');
  const recut = cut[2].split('-');
  return recut[0];
};

export default cutImgPath;
