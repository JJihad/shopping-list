import { Body, Controller, Post, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './dto/recipe.dto';
import { Ingredient } from '@prisma/client';

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {}

    @Post('add')
    addRecipe(@Body() recipeDto: RecipeDto) {
        return this.recipeService.addRecipe(recipeDto);
    }

    @Get('find-all')
    findAllRecipes() {
        return this.recipeService.getAllRecipesWithIngredients();
    }

}