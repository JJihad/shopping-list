import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RecipeModule, PrismaModule],
})
export class AppModule {}
