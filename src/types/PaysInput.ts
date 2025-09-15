import { Field, InputType } from "type-graphql";

@InputType()
export class PaysInput {
    @Field()
    codePays : string; 

    @Field()
    nomPays: string; 

    @Field()
    emojiPays: string; 
}

@InputType()
export class PaysAvecContinent {
    @Field()
    codePays : string; 

    @Field()
    nomPays: string; 

    @Field()
    emojiPays: string;  

    @Field()
    continentCode : string;
}