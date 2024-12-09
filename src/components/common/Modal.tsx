import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  opened: boolean;
}

export default function Modal({
  children,
  opened,
}: PropsWithChildren<ModalProps>) {
  return opened
    ? createPortal(
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full bototm-0 bg-black/30">
          <div className="z-10 bg-white rounded-10 max-w-[655px] w-full">
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}
