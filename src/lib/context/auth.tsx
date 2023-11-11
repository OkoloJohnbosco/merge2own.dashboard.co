// AuthProvider.tsx
import useLocalStorage from "@/hooks/hooks-ts/use-localstorage";
import { MERGE2OWN } from "@/lib/constants";
import { createContext, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthContextType {
  userToken: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider() {
  const [value] = useLocalStorage<{ token: string }>(MERGE2OWN.USER, {
    token: "",
  });
  const { pathname } = useLocation();

  if (value.token === "") {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }

  return (
    <AuthContext.Provider value={{ userToken: value?.token }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
