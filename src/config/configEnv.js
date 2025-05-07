"use strict"
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

const _filename = fileURLToPath(import.meta.url);

const _dirname = path.dirname(_filename);

const envfilePath = path.resolve(_dirname, ".env");

dotenv.config({path: envfilePath});

export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const DATABASE = process.env.DATABASE;
export const DB_USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.PASSWORD;


