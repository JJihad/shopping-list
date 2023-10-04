import { IsString, IsNotEmpty, ValidateNested } from "class-validator";
import { IngredientDto } from "./ingredient.dto";
import { Transform, Type } from "class-transformer";

export class RecipeDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @ValidateNested({ each: true }) // Validate each item in the array
    @Type(() => IngredientDto) // Convert each item to IngredientDto
    ingredients: [IngredientDto];
    
}