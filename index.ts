
import * as mongoose from 'mongoose';


export const getModels = function(){
  return Array.from(arguments).map(function (n) {
    return mongoose.model(n);
  });
};