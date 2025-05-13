import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, css, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }
    return () => {
      if (modalRef.current) {
        modalRef.current.close();
      }
    };
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} className={css} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
