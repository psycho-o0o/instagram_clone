import mongoose from 'mongoose';
import { mongodbConnect} from './connection';
import { IConnectToMongo } from './interface';

// https://github.com/gmahechas/erp/tree/b83033477933e4ced8222c1ed2f1b52b91030ed1/packages/common/erp-common-ms-utils-js/src/databases/mongodb

export const connectToMongo : IConnectToMongo = async (mongodbConnectArgs) => {
    const { uri, connectOptions } = mongodbConnectArgs;
    let conn : mongoose.Connection = await mongodbConnect(uri, connectOptions);
    
    return conn;
}