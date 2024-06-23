import { IsOptional, IsString } from 'class-validator';

export class GetSmileCenterDto {
  @IsOptional()
  @IsString()
  centerType?: string;

  @IsOptional()
  @IsString()
  zone?: string;

  @IsOptional()
  @IsString()
  service?: string;
}
