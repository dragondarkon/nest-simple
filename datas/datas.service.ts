import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Data } from './datas.model';

@Injectable()
export class DatasService {
  constructor(
    @InjectModel('Data') private readonly dataModel: Model<Data>,
  ) {}

  async insertData(text: string) {
    const newData = new this.dataModel({
      text,
    });
    const result = await newData.save();
    return result.id as string;
  }

  async getDatas() {
    const datas = await this.dataModel.find().exec();
    return datas.map(data => ({
      id: data.id,
      text: data.text,
    }));
  }

  async getSingleData(dataId: string) {
    const data = await this.findData(dataId);
    return {
      id: data.id,
      text: data.text,
    };
  }

  private async findData(id: string): Promise<Data> {
    let data;
    try {
      data = await this.dataModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find data.');
    }
    if (!data) {
      throw new NotFoundException('Could not find data.');
    }
    return data;
  }
}