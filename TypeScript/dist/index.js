"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5000;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
/* // import express from "express";
const express = require("express");
import { Request, Response } from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    msg: "hi from my method",
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
}); */
