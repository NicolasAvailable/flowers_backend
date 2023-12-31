import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlowersService } from '../services/flowers.service';
import { CreateFlowerDto } from '../dto/create-flower.dto';
import { UpdateFlowerDto } from '../dto/update-flower.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('flowers')
@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Post()
  create(@Body() createFlowerDto: CreateFlowerDto) {
    return this.flowersService.createFlower(createFlowerDto);
  }

  @Get()
  findAll() {
    return this.flowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlowerDto: UpdateFlowerDto) {
    return this.flowersService.update(id, updateFlowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowersService.remove(id);
  }
}
