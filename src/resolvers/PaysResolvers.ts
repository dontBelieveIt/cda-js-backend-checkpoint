import { Field, InputType, Resolver } from "type-graphql";
import Pays from "../entities/Pays";

@InputType()
class PaysInput {
    @Field()
    code : string; 

    @Field()
    nom: string; 

    @Field()
    emoji: string
}

@Resolver(Pays)
export default class PaysResolver {
    
}