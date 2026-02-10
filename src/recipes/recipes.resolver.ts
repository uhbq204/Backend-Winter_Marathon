import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import type { AdminRecipesService } from './admin-recipes.service';
import { Role } from '@prisma/client';
import type { IngredientCreateInput } from 'prisma/generated/graphql/ingredient';
import { Auth } from 'src/auth/decorators/auth.decorator';
import type { RecipeCreateInput } from './inputs/recipe.input';
import { RecipeModel as RecipesModel } from './models/recipe.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import type { RecipeQueryInput } from './inputs/get-recipes-query.input';


@Resolver()
export class RecipesResolver {
  ingredientsService: any;
  constructor(
    private readonly recipesService: RecipesService,
    private readonly adminRecipesService: AdminRecipesService
  ) {}

  @Query(() => [RecipesModel], { name: 'recipes' })
  getAll(@Args('input') input: RecipeQueryInput){
    return this.recipesService.getAll(input)
  }

  @Query(() => RecipesModel, { name: 'recipeBySlug' })
  getBySlug(@Args('slug') slug: string) {
    return this.recipesService.getBySlug(slug)
  }

  @Query(() => [RecipesModel], {name: 'admin-recipes'})
    @Auth(Role.ADMIN)
    getAllAdmin() {
      return this.adminRecipesService.getAll()
    }
  
    @Query(() => RecipesModel, { name: 'recipeById' })
    @Auth(Role.ADMIN)
    getById(@Args('id') id: string) {
      return this.adminRecipesService.getById(id)
    }
  
    @Mutation(() => RecipesModel)
    @Auth(Role.ADMIN)
    createRecipe(
      @CurrentUser('id') authorId: string,
      @Args('input') input: RecipeCreateInput
    ) {
      return this.adminRecipesService.create(authorId, input)
    }
  
    @Mutation(() => RecipesModel)
    @Auth(Role.ADMIN)
    updateRecipe(@Args('id') id: string, @Args('input') input: RecipeCreateInput) {
      return this.adminRecipesService.update(id, input)
    }
  
    @Mutation(() => RecipesModel)
    @Auth(Role.ADMIN)
    deleteRecipeById(@Args('id') id: string) {
      return this.adminRecipesService.deleteById(id)
    }
}
