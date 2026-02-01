import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserProfileModel } from './models/user-profile.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from '@prisma/client';
import { Profile } from 'prisma/generated/prisma/profile/profile.model';
import { User } from 'prisma/generated/prisma/user/user.model';
import { UserUpdateInput } from 'prisma/generated/prisma/user/user-update.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  
  @Query(() => User, { name : 'profile' })
  @Auth()
  getProfile(@CurrentUser('id') id: string) {
    return this.usersService.findById(id);
  }

  @Mutation(() => User)
  @Auth()
  updateProfile(
    @CurrentUser('id') id: string, 
    @Args('input', { type: () => UserUpdateInput }) input: UserUpdateInput) {
    return this.usersService.updateProfile(id, input)
  }

  //test admin guard
  @Query(() => [User], { name: 'users' })
  @Auth(Role.ADMIN)
  async getUsers() {
    return this.usersService.findAll();
  }
}
