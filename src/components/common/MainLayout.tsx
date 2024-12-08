import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center w-full h-full overflow-scroll bg-bg">
      <main className="max-w-[655px] w-full">{children}</main>
    </div>
  );
}
