import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Continent from "./Continent";

@Entity()
@ObjectType()
class Pays extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: number; 

    @Column()
    @Field()
    codePays: string; 
    // example: "FR", "EN", "AN", ...

    @Column({unique : true})
    @Field()
    nomPays: string; 
    // example: "France", "Belgique", "Andorre"...

    @Column()
    @Field()
    emojiPays : string
    // example : "🇫🇷", "🇧🇪", "🇦🇩"...

    @ManyToOne(() => Continent, continent => continent.codeContinent)
    @Field()
    continentCode: string;

}

export default Pays