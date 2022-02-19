import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1644978722103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',                        
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',                        
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',                        
                    },
                    {
                        name: 'cep',
                        type: 'varchar',                        
                    },
                    {
                        name: 'lougradouro',
                        type: 'varchar',                        
                    },
                    {
                        name: 'cidade',
                        type: 'varchar',                        
                    },
                    {
                        name: 'estado',
                        type: 'varchar',                        
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
