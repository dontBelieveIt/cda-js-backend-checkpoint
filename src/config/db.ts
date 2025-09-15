import { DataSource } from "typeorm";
import Pays from "../entities/Pays"
import Continent from "../entities/Continent";

const dataSource = new DataSource({
    type: "sqlite", 
    database: "cda_js_backend_checkpoint",
    entities: [Pays, Continent], 
    synchronize: true, 
    logging: [ "error", "query"]
}); 

export default dataSource