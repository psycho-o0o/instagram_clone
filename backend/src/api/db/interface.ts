import mongoose from "mongoose";

interface IMongodbConnectArgs {
  uri: string;
  connectOptions?: mongoose.ConnectOptions;
}

export interface IMongodbConnect {
  (
    uri: string,
    connectOptions?: mongoose.ConnectOptions
  ): Promise<mongoose.Connection>;
}

export interface IConnectToMongo {
  (mongodbConnectArgs: IMongodbConnectArgs): Promise<mongoose.Connection>;
}
