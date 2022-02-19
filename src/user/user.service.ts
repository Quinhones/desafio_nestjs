import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    ){
    //nda
  }
  create(createUserDto: CreateUserDto) {
    const createUser = this.userRepository.create(createUserDto);
    return createUser.save();
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  findCpf(cpf: Object) {
    return this.userRepository.findOne(cpf);
  }  
  
  async update(id: string, updateUserDto: UpdateUserDto) {
   await this.userRepository.update(id, updateUserDto);
   
   const updatedPost = await this.userRepository.findOne(id);

   if(!updatedPost){
     throw new Error("User does not exists");
   }
    return updatedPost;
  }

  async remove(id: string) {
   const deleteUser = await this.userRepository.findOne(id);
   if(!deleteUser){
     throw new Error('User does not exists');
   }
  return deleteUser.remove();
  }
}
