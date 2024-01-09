import express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

const app = express();
app.use(express.json());
const port = 3000;

const AppSourceData = new DataSource({
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
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log("Something Went Wrong in establishing the connection",err);
  });

app.get("/getuserdetails", async (req, resp) => {
  const Userrepo = AppSourceData.getRepository(User);
  const Allrecords = await Userrepo.find();
  resp.status(200).json(Allrecords);
});

app.listen(port, () => {
  console.log("Server is started on the port 3000)");
});
