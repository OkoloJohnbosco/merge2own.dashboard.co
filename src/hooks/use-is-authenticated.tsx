import { MERGE2OWN } from "@/lib/constants";
import React, { useEffect } from "react";
import useLocalStorage from "./hooks-ts/use-localstorage";

function useIsAuthenticated() {
  // @ts-expect-error
  const [value] = useLocalStorage<{ token: string }>(MERGE2OWN.USER, null);

  const [isAuthenticated, setAuth] = React.useState(!!value);
  useEffect(() => {
    if (value) {
      setAuth(true);
    }
    if (!value) {
      setAuth(false);
    }
  }, [value, value]);

  return {
    isAuthenticated,
    user: value,
  };
}

export default useIsAuthenticated;
