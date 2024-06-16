import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./iron"

export default async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.agentEmail = defaultSession.agentEmail;
    session.agentName = defaultSession.agentName;
    session.sessionId = defaultSession.sessionId;
    session.isLoggedIn = false;
  }

  return session;
}
