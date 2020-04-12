const DIRECTORY = {
  store: ["actions", "reducers"],
  constants: [],
  utils: [],
  containers: [],
  helpers: ["api"]
};

export const MODULES = Object.keys(DIRECTORY).reduce((acc, cur) => {
  acc[`#${cur}`] = `./src/${cur}`;

  if (DIRECTORY[cur].length) {
    DIRECTORY[cur].forEach(dir => {
      acc[`#${cur}/${dir}`] = `./src/${cur}/${dir}`;
    });
  }
  return acc;
}, {});
