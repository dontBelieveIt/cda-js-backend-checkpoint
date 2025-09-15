import { Field, InputType } from "type-graphql";

@InputType()
export default class ContinentInput {
    @Field()
    codeContinent: string; 

    @Field()
    nomContinent : string; 
    // example: "Europe", "Afrique", "Asie"...
}