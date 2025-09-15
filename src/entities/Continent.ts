import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Pays from "./Pays";

@Entity()
@ObjectType()
class Continent extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: number; 

    @Column()
    @Field()
    codeContinent: string; 
    // example: "EU", "AF", "AS", ...

    @Column({unique : true})
    @Field()
    nomContinent : string; 
    // example: "Europe", "Afrique", "Asie"...

    @OneToMany(() => Pays, pays => pays.continentCode)
    @Field(() => [Pays])
    paysList: Pays[];
}


export default Continent