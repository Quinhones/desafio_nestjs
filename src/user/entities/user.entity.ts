import internal from 'stream';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
} from 'typeorm';


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255})
    name: string;

    @Column({ length: 11})
    telefone: string;

    @Column({ length: 11})
    cpf: string;

    @Column({ length: 10})
    cep: string;

    @Column({ length: 50})
    lougradouro: string;

    @Column({ length: 50})
    cidade: string;

    @Column({ length: 50})
    estado: string;
    
}