import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'; //importa os comandos do typeorm
@Entity('tb_endereco') //define a classe endereco como uma tabela e vai ser gerenciada pelo typeorm
class Endereco {

 @PrimaryGeneratedColumn() //coluna id da tabela
 id: number;

 @Column("varchar", { length: 8 }) //coluna cep da tabela
 cep: string;
 @Column("varchar", { length: 100 }) //coluna complemento da tabela
 complemento: string;

}
export default Endereco; //exporta a classe Endereco