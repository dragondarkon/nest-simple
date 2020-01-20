import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatasController } from './datas.controller';
import { DatasService } from './datas.service';
import { DataSchema } from './datas.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Data', schema: DataSchema }]),
  ],
  controllers: [DatasController],
  providers: [DatasService],
})
export class DatasModule {}