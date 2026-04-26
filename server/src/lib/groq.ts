import Groq from "groq-sdk";
import { env } from "../config/env";

export const client = new Groq({
  apiKey: env.GROQ_API_KEY,
});
