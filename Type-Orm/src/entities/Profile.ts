import {PrimaryGeneratedColumn,Entity,Column} from "typeorm";

@Entity()
export class Profile{
   @ PrimaryGeneratedColumn()
   id:number

   @Column()
   address:String

   @Column()
   gender:String

   @Column()
   age:number
}