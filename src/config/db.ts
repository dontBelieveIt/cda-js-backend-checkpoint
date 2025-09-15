import { DataSource } from "typeorm";
import Pays from "../entities/Pays"

const dataSource = new DataSource({
    type: "sqlite", 
    database: "cda_js_backend_checkpoint",
    entities: [Pays], 
    synchronize: true, 
    logging: [ "error", "query"]
}); 

export default dataSource