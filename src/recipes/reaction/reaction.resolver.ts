import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ReactionService } from './reaction.service';
import { CommentModel } from './models/comment.model';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CommentCreateInput, CommentUpdateInput } from './inputs/comment.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { ToggleLikeResponse } from './models/toggle-like.response';
import { Role } from '@prisma/client';

@Resolver()
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Mutation(() => CommentModel)
  @Auth()
  createComment(
    @CurrentUser('id') userId: string,
    @Args('input', { type: () => CommentCreateInput }) input: CommentCreateInput
  ) {
    return this.reactionService.createComment(userId, input)
  }

  @Mutation(() => CommentModel)
  @Auth()
  updateComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('commentId') commentId: string,
    @Args('input', { type: () => CommentUpdateInput }) input: CommentUpdateInput
  ) {
    return this.reactionService.updateComment(userId, userRole, commentId, input)
  }

  @Mutation(() => CommentModel)
  @Auth()
  deleteComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('commentId') commentId: string
  ) {
    return this.reactionService.deleteComment(userId, userRole, commentId)
  }

  @Mutation(() => ToggleLikeResponse)
  @Auth()
  toggleLike(
    @CurrentUser('id') userId: string,
    @Args('recipeId') recipeId: string
  ) {
    return this.reactionService.toggleLike(userId, recipeId)
  }
}
