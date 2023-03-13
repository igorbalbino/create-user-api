import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { User } from './shared/user';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/payever-api-unitTest'),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      controllers: [UsersController],
      providers: [UserService]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('controller', () => {
    it('should be defined', async () => {
      expect(await controller).toBeDefined();
    });
  });
});