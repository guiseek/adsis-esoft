import { ConnectOptions, Schema, connect, model } from 'mongoose';

export const mongo = {
  async get(config: { uri: string; options: ConnectOptions }) {
    return connect(config.uri, config.options);
  },
  async model(config: { name: string; schema: Schema }) {
    return model(config.name, config.schema);
  },
};
