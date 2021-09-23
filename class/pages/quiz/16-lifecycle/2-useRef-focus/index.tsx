import { useEffect, useRef } from "react";

export default function useRefPage() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <input type="password" ref={inputRef} />
    </>
  );
}
