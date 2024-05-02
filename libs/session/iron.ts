import { SessionOptions } from "iron-session";
import AgentSession from "@/libs/types/models/AgentSession";

export interface SessionData extends AgentSession {
  isLoggedIn: boolean;
}
export const defaultSession: SessionData = {
  agentName: "",
  agentEmail: "",
  sessionId: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "session",
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: true,
  },
};