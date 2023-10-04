import { Injectable } from '@nestjs/common';
import { Recipe, Ingredient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RecipeDto } from './dto/recipe.dto';
import { title } from 'process';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async addRecipe(recipeDto: RecipeDto) {
    try {
      const ingredientsData = recipeDto.ingredients.map((ingredient) => ({
        title: ingredient.title,
        quantity: ingredient.quantity
      }));

      const recipe = await this.prisma.recipe.create({
        data: {
          title: recipeDto.title,
          ingredients: {
            create: ingredientsData,
          }
        }
      });
      
      return 'recipe created ! start cooking..';
    } catch (error) {
      console.error('Error creating recipe:', error);
      return 'Recipe creation failed.';
    }
  }
  

  async getAllRecipesWithIngredients() {
    try {
      const recipes = await this.prisma.recipe.findMany({
        include: {
          ingredients: true,
        }
      });
      return recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw new Error('Failed to fetch recipes.');
    }
  }
}
