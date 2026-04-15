import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { AdminRecipesService } from './admin-recipes.service';
import { Role } from '@prisma/client';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { RecipeCreateInput } from './inputs/recipe.input';
import { RecipeModel as RecipesModel } from './models/recipe.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { RecipesQueryInput } from './inputs/get-recipes-query.input';
import { GetAllRecipesModel } from './models/get-all-recipes.model';



@Resolver()
export class RecipesResolver {
  ingredientsService: any;
  constructor(
    private readonly recipesService: RecipesService,
    private readonly adminRecipesService: AdminRecipesService
  ) {}

  @Query(() => GetAllRecipesModel, { name: 'recipes' })
  getAll(@Args('input') input: RecipesQueryInput){
    return this.recipesService.getAll(input)
  }

  @Query(() => RecipesModel, { name: 'recipeBySlug' })
  getBySlug(@Args('slug') slug: string) {
    return this.recipesService.getBySlug(slug)
  }

  @Query(() => GetAllRecipesModel, {name: 'adminRecipes'})
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
