import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            remove: jest.fn().mockResolvedValue(undefined),
            },
        }
        ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a all users list entity successfully', async () => { 
    // act
      const result = await userController.findAll();         
    });
  });
    describe('create', () => {
      it('should create a new user successfully', async () => {
                      
      });
   });

   describe('update', () => {
    it('should update a todo item successfully', async() =>{

    });
   });

   describe('remove', () => {
     it('should remove a user successfully', async () => {
      // Act
      const result = await userController.remove('1');

      // Arrange
      expect(result).toBeUndefined();
     });

     it('should throw an exception', () => {
      // Arrange
      jest.spyOn(userService, 'remove').mockRejectedValueOnce(new Error());

      // Assert
      expect(userController.remove('1')).rejects.toThrowError();

     });

   });

  });
