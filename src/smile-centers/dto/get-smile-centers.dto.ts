import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetSmileCenterDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  centerType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  zone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  service?: string;
}
