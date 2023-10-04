import { IsNotEmpty, IsString } from 'class-validator';

export class IngredientDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;
}
