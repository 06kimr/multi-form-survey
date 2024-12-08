import cn from 'classnames';
import { PropsWithChildren } from "react";
import { Cn } from "../../types/global";

export default function Panel({ children, className }: PropsWithChildren<Cn>) {
  return (
    <div className={cn("flex flex-col p-20 bg-white pt-26 rounded-10", className)}>
      {children}
    </div>
  );
}

export function PanelHeader({ children, className }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}

export function PanelBody({ children, className }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}

export function PanelFooter({ children, className }: PropsWithChildren<Cn>) {
  return (
    <>
      <hr className="mb-20 border-gray-100" />
      <div className={className}>{children}</div>
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
