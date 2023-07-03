/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Res,
  Req,
  Post,
  HttpCode,
  Redirect,
  Query,
  Param,
  Body,
  HttpStatus
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
//   @Post(':age')
//   @HttpCode(201)
//  async create(@Body() createCatDto:CreateCatDto,@Param() params:any){
//     return `this action add a new cat age is ${params.age}`;
//   }
@Post()
create(@Res() res:Response){
    res.status(HttpStatus.CREATED).send()
}

@Get()
findAll(@Res() res:Response){
    res.status(HttpStatus.OK).json([])
}
//   @Get()
//   @Redirect('https://docs.nestjs.com', 304)
//   getdocs(@Query('version') version) {
//    if(version && version ==='5'){
//     return {url:'https://docs.nestjs.com/v5/'}
//    }
//   }
//   findAll(): string {
//     return 'all data came from catsController';
//   }
// @Get(':name-:id')
// findOne(@Param() params:any ):string{
//     return `the ${params.name} have working id is :${params.id}`
// }
}
