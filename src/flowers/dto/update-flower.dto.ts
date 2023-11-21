import { PartialType } from '@nestjs/swagger';
import { CreateFlowerDto } from './create-flower.dto';

export class UpdateFlowerDto extends PartialType(CreateFlowerDto) {
    name?: string;
    country?: string;
    gender?: number;
    images?: string[];
    temperature?: number;
    origin?: number;
}
