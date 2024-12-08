import { PropsWithChildren } from "react";

export default function Panel({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col p-20 bg-white pt-26 rounded-10">
      {children}
    </div>
  );
}

export function PanelHeader({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PanelBody({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PanelFooter({ children }: PropsWithChildren) {
  return (
    <>
      <hr className="mb-20 border-gray-100" />
      <div>{children}</div>
    </>
  );
}

export function PanelCap({ children }: PropsWithChildren) {
  return (
    <div className="relative -mb-10">
      <div className="inline-block pt-10 pb-6 text-white px-14 bg-main rounded-t-10 text-15">
        {children}
      </div>
      <div className="bg-main h-9"></div>
    </div>
  );
}
