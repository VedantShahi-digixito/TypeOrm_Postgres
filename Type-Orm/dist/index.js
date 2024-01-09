"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
const AppSourceData = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 8086,
    username: "postgres",
    password: "2192",
    database: "Vedant",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true,
});
AppSourceData.initialize()
    .then(() => {
    console.log("Database connect ho gya re baba........... ab api hit kr");
})
    .catch((err) => {
    console.log("Kuch To gadbad hai re baba............", err);
});
app.get("/getuserdetails", async (req, resp) => {
    const Userrepo = AppSourceData.getRepository(User_1.User);
    const Allrecords = await Userrepo.find();
    resp.status(200).json(Allrecords);
});
app.listen(port, () => {
    console.log("Server is started on the port 3000)");
});
