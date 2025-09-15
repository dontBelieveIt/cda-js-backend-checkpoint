import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "sqlite", 
    database: "cda_js_backend_checkpoint",
    entities: [], 
    synchronize: true, 
    logging: [ "error", "query"]
}); 

export default dataSource