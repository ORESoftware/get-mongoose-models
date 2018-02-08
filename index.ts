import * as mongoose from 'mongoose';

export const getModels = function (...args: string[]) {
  return Array.from(arguments).map(function (n) {
    return mongoose.model(n);
  });
};

export interface GMM {
  getModels: typeof getModels
}

const $exports = module.exports;
export default $exports as GMM;