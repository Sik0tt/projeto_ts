import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'; //importa os comandos do typeorm
@Entity('tb_local') //define a classe endereco como uma tabela e vai ser gerenciada pelo typeorm

class Local {

 @PrimaryGeneratedColumn() //coluna id da tabela
 id: number;

 @Column("varchar", { length: 200 }) //coluna cep da tabela
 nome: string;
 @Column("varchar", { length: 100 }) //coluna complemento da tabela
 latitude: string;
@Column("varchar", {length: 100})
 longitude: string;
}
export default Local; //exporta a classe Endereco