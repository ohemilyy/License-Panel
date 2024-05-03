import './styles.css'
import Logo from '@/components/Logo'
import { Suspense } from "react";
import Console from '@/components/Console/component';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <div className="flex w-full min-h-screen items-center justify-center bg-full bg-img p-4">
      <Console className="pb-10 p-6 sm:px-16 flex flex-col items-center">
        <Logo className="mx-auto mt-2 mb-4" href={'/'} />
        <Suspense>{children}</Suspense>
      </Console>
    </div>
  </>;  
}