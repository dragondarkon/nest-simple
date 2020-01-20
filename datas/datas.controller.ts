import {
    Controller,
    Post,
    Body,
    Get,
    Param,
  } from '@nestjs/common';
  
  import { DatasService } from './datas.service';
  
  @Controller('data')
  export class DatasController {
    constructor(private readonly datasService: DatasService) {}
  
    @Post()
    async addData(
      @Body('text') text: string,
    ) {
      const generatedId = await this.datasService.insertData(
        text,
      );
      return { id: generatedId };
    }
  
    @Get()
    async getAllProducts() {
      const products = await this.datasService.getDatas();
      return products;
    }
  
    @Get(':id')
    getProduct(@Param('id') dataId: string) {
      return this.datasService.getSingleData(dataId);
    }
  }