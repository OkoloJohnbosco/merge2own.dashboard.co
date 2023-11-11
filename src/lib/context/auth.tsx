// AuthProvider.tsx
import useLocalStorage from "@/hooks/hooks-ts/use-localstorage";
import { MERGE2OWN } from "@/lib/constants";
import { createContext, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthContextType {
  user: Record<string, unknown>;
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
  const [value] = useLocalStorage<Record<string, unknown>>(
    MERGE2OWN.USER,
    // @ts-expect-error
    null
  );
  const { pathname } = useLocation();

  if (!value) {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }

  return (
    <AuthContext.Provider value={{ user: value }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
