import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
class Pays extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number; 

    @Column()
    @Field()
    code: string; 
    // example: "FR", "EN", "AN", ...

    @Column({unique : true})
    @Field()
    nom : string; 
    // example: "France", "Belgique", "Andorre"...

    @Column()
    @Field()
    emoji : string
    // example : "🇫🇷", "🇧🇪", "🇦🇩"...

}


export default Pays