import mongoose from "mongoose";

async function conn() {
  mongoose
    .connect("mongodb://localhost:27017/mentorstd")
    .then(() => console.log("💻 Mongodb Connected"))
    .catch((err) => console.error("Connecting error: ", err));
}

async function disconn() {
  mongoose
    .disconnect("mongodb://localhost:27017/mentorstd")
    .then(() => console.log("💻 Mongodb Disconnected"))
    .catch((err) => console.error("Disconection error: ", err));
}

export { conn, disconn };
