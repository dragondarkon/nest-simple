import * as mongoose from 'mongoose';

export const DataSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

export interface Data extends mongoose.Document {
  id: string;
  text: string;
}