'use client';
import { SessionData, defaultSession } from "@/libs/session/iron";
import { Login, Register, ResetPassword } from "@/services/auth/AuthService";
import { BehaviorSubject } from 'rxjs';
import useGlobal from "./useGlobal";
import { useCallback } from "react";
import { isResultError } from "@/libs/Utils";
import HTTPClient from "@/libs/HTTPClient";

interface SessionManager {
  session?: SessionData;
  register: (body: any) => Promise<[SessionData | null, number, string | null]>;
  reset: (body: any) => Promise<[SessionData | null, number, string | null]>;
  login: (body: any) => Promise<[SessionData | null, number, string | null]>;
  logout: () => Promise<void>;
}
function useSession(): SessionManager {
  const runOnceGlobally = useCallback(
    ($: BehaviorSubject<SessionData>) =>
    new HTTPClient().GetAsync("/api/auth")
        .then(res => $.next(res[0])), []
  );

  const getDefaultSession = useCallback(() => defaultSession, []);
  const [session, setSession] = useGlobal('session', getDefaultSession, runOnceGlobally);

  const InterceptSession = 
    (method: any): (body: any) => Promise<[SessionData | null, number, string | null]> =>
      useCallback(async (body: any) => {
        const result = await method(body);
        if (!isResultError(result))
          setSession(result[0]);
        return result;
      }, [method]);

  const register = InterceptSession(Register);
  const reset = InterceptSession(ResetPassword);
  const login = InterceptSession(Login);

  const logout = useCallback(async () => {
    await new HTTPClient().DeleteAsync("/api/auth")
      .then(res => setSession(res[0]));
  }, [setSession]);

  return {
    session,
    register,
    reset,
    login,
    logout
  };
}
export default useSession;