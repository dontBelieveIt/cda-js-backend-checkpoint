import "reflect-metadata";
import dataSource from "../config/db";
import Continent from "../entities/Continent";
import Pays from "../entities/Pays";

export const seedDatabase = async () => {
    try {
        // Initialize the database connection
        await dataSource.initialize();
        console.log("Database connected!");

        // Check if data already exists
        const continentCount = await Continent.count();
        if (continentCount > 0) {
            console.log("Database already seeded, skipping...");
            return;
        }

        console.log("Seeding database...");

        // Create continents
        const europe = await Continent.create({
            codeContinent: "EU",
            nomContinent: "Europe"
        }).save();

        const africa = await Continent.create({
            codeContinent: "AF",
            nomContinent: "Afrique"
        }).save();

        const asia = await Continent.create({
            codeContinent: "AS",
            nomContinent: "Asie"
        }).save();

        const america = await Continent.create({
            codeContinent: "AM",
            nomContinent: "Amérique"
        }).save();

        // Create countries
        const countries = [
            { codePays: "FR", nomPays: "France", emojiPays: "🇫🇷", continentCode: "EU" },
            { codePays: "DE", nomPays: "Allemagne", emojiPays: "🇩🇪", continentCode: "EU" },
            { codePays: "IT", nomPays: "Italie", emojiPays: "🇮🇹", continentCode: "EU" },
            { codePays: "ES", nomPays: "Espagne", emojiPays: "🇪🇸", continentCode: "EU" },
            { codePays: "MA", nomPays: "Maroc", emojiPays: "🇲🇦", continentCode: "AF" },
            { codePays: "EG", nomPays: "Égypte", emojiPays: "🇪🇬", continentCode: "AF" },
            { codePays: "JP", nomPays: "Japon", emojiPays: "🇯🇵", continentCode: "AS" },
            { codePays: "CN", nomPays: "Chine", emojiPays: "🇨🇳", continentCode: "AS" },
            { codePays: "US", nomPays: "États-Unis", emojiPays: "🇺🇸", continentCode: "AM" },
            { codePays: "BR", nomPays: "Brésil", emojiPays: "🇧🇷", continentCode: "AM" },
        ];

        for (let countryData of countries) {
            const pays = new Pays();
            pays.codePays = countryData.codePays;
            pays.nomPays = countryData.nomPays;
            pays.emojiPays = countryData.emojiPays;
            pays.continentCode = countryData.continentCode;
            await pays.save();
        }

        console.log("Database seeded successfully!");

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        // Close the database connection
        if (dataSource.isInitialized) {
            await dataSource.destroy();
        }
    }
};

// Run the seed function
seedDatabase();