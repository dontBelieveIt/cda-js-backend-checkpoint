import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import Continent from "../entities/Continent";
import ContinentInput from "../types/ContinentInput";

@Resolver(Continent)
export default class ContinentResolver {

    @Query(() => Continent)
    async tousLesContinents() {
        try {
            const allContinent = await Continent; 
            return allContinent; 
        } catch (error) {
            console.error(error)
        }
    }

    // @Query(() => Continent)
    // async listPays(@Arg("listPays") listPays: [Pays]) {
    //     const pays: string[] = await Continent.paysList.find(continent => continent.paysList )
    //     return pays
    // }

    @Mutation(() => ID)
    async createContinent(
        @Arg("data") data : ContinentInput
    ) {
        const nouveauContinent = Continent.create({
            ...data,
        })
        try {
            await nouveauContinent.save()
            return nouveauContinent.nomContinent
        } catch (error) {
            console.error(error)
        }
    }
}