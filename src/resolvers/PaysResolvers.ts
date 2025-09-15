import { Arg, Ctx, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import Pays from "../entities/Pays";
import Continent from "../entities/Continent";
import { PaysAvecContinent, PaysInput } from "../types/PaysInput";
import { FindManyOptions } from "typeorm";

@Resolver(Pays)
export default class PaysResolver {

    // pour avoir tous les pays
    @Query(() => [Pays])
    async tousLesPays() {
        try {
            const allPays = await Pays.find();
            return allPays
        } catch (error) {
            console.error(error)
        }
    } 

    // prends en paramêtre le code du pays => renvoie le pays 
    @Query(() => Pays)
    async paysParCode(@Arg("codePays") codePays: string) {
        const pays = await Pays.findOneByOrFail({ codePays})
        return pays;
    }

    @Mutation(() => ID)
    async createPays(
        @Arg("continentCode") continentCode : string, 
        @Arg("data") data: PaysInput
    ) {
        const continent = await Continent.findOneByOrFail({  codeContinent : continentCode })
        const pays = Pays.create({
            ...data
        })
        if (continent) {
            try {
                await pays.save()
                return pays.nomPays
            } catch (error) {
                console.error(error)
            }
        } else {
            console.error("Missing required : continent code")
        }
    }
       
}