import {useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      setIsPending(true);
      setError(null)
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT"})
    } catch (e) {
      setIsPending(false);
      setError(e.message);
      console.log("Error during logout...");
    }
  }

  return { logout, error, isPending };
}