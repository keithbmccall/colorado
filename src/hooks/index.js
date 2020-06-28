import { useEffect, useRef } from "react";

export const usePrevious = value => {
  // helper to use useEffect like
  // componentDidUpdated
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
