import {useEffect, useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true)
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT"})

      if (!isCancelled) {
        setIsPending(false);
        setError(null)
      }
    } catch (e) {
      if (!isCancelled) {
        setIsPending(false);
        setError(e.message);
        console.log("Error during logout...");
      }
      console.log("Error during logout...");
    }
  }

  useEffect(() => {
    setIsCancelled(true);
  })

  return { logout, error, isPending };
}