import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import axios from 'axios'; 

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('cpf/:cpf')
  findCpf(@Param('cpf') cpf: string) {
    return this.userService.findCpf({where:[{ cpf }] });
  }
  
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Get('cep/:cep')
  async findCep(@Param('cep') cep: string){
   const cepc = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);  
    console.log(cepc.data);
   return cepc.data;
   
  }
}
