export declare const setMongoose: (v: any) => void;
export declare const getModels: (...args: string[]) => any[];
export interface GMM {
    getModels: typeof getModels;
}
declare var _default: GMM;
export default _default;
