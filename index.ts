
const settings = <any>{
  myMongoose :  null
};

export const setMongoose = function (v: any) {
  settings.myMongoose = v;
};

export const getModels = function (...args: string[]) {
  return Array.from(arguments).map(function (n) {
    return settings.myMongoose.model(n);
  });
};

export interface GMM {
  getModels: typeof getModels
}

const $exports = module.exports;
export default $exports as GMM;