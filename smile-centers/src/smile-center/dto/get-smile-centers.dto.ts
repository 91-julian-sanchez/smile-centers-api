import { IsOptional, IsString } from 'class-validator';

export class GetSmileCentersDto {
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
