import { app } from "./server";
import { createConnection } from "typeorm";

(async () => {
    try {
        await createConnection(require("../ormconfig.json")[0]);

        const server = app.listen(5000, () => {
            console.log("App starte don port 5000");
        });
    } catch (error) {
        
    }
})();
