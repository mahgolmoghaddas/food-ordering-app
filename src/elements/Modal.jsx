import React, { useEffect, useRef } from "react";

export default function Modal({ Children, open, css }) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }
  }, [open]);

  return createPrtal(
    <dialog ref={modalRef} className={css}>
      {Children}
    </dialog>,
    document.getElementById("modal"),
  );
}
