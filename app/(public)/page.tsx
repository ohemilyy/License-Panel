'use client';
import useSession from "@/hooks/useSession";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import HashLink from "@/components/HashLink";
import { isResultError } from "@/libs/Utils";
import { FaDiscord } from "react-icons/fa6";
import Logo from '@/components/Logo';
import Console from '@/components/Console/component';

export default function Home() {
  // Your existing code remains the same...
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') ?? '/';

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useSession();
  const { push } = useRouter();

  async function onSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await login({ username: formData.get("username"), password: formData.get("password") });
      if (isResultError(res, true)) {
        throw new Error(res[2] ?? "Unknown error");
      }

      push(redirectUrl);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex w-full items-center justify-center bg-full bg-img p-4">
        <Console className="pb-10 p-6 sm:px-16 flex flex-col items-center">
          <Logo className="mx-auto mt-2 mb-4" href={'/'} />
          <h3 className="mb-4 text-primary">Login to our Dashboard</h3>
          {error && <p className="text-error mb-1 text-red-500">{error}</p>}
          <form className="w-[75%]" action={onSubmit}>
            <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2" disabled={isLoading} type="text" name="username" placeholder="Username or Email" required/>
            <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2" disabled={isLoading} type="password" name="password" placeholder="Password" required/>
            <button className="btn btn-secondary font-bold text-xl rounded-lg w-fit border-2 py-2 px-4 min-h-fit h-fit" disabled={isLoading} type="submit">{isLoading ? "On it…" : "Sign in"}</button>
          </form>
          <div className="inline-block w-[75%] h-[1px] bg-neutral mt-5 mb-4"></div>
          <small className="my-1"><b className="inline-flex items-center gap-1">
            <span>Don't have an account?</span>
            <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="text-primary hover:text-gray-300 inline-flex justify-start items-center mt-0.5 gap-0.5">
              <FaDiscord className="h-5 w-5"/>
              <span>Contact us on Discord!</span>
            </HashLink>
          </b></small>
          <small><b>Forgot your password? <HashLink className="text-secondary hover:text-gray-300" href="/auth/reset">Click here to reset.</HashLink></b></small>
        </Console>
      </div>
    </>
  );
}

