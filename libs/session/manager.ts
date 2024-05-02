'use server';

import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./iron"
import AgentSession from "@/libs/types/models/AgentSession";

export async function getSession(): Promise<IronSession<SessionData>> {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.agentName = defaultSession.agentName;
    session.agentEmail = defaultSession.agentEmail;
    session.isLoggedIn = false;
  }

  return session;
}

export async function setSession(value: AgentSession, isLoggedIn: boolean): Promise<IronSession<SessionData>> {
  const session = await getSession();

  for (const k in value)
    (session as any)[k] = (value as any)[k]; // Should be fine since SessionData inherits AgentSession
  session.isLoggedIn = isLoggedIn;
  await session.save();

  return session;
} 