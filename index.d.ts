import * as mongoose from 'mongoose';
export declare const getModels: (...args: string[]) => mongoose.Model<mongoose.Document>[];
export interface GMM {
    getModels: typeof getModels;
}
declare const _default: GMM;
export default _default;
