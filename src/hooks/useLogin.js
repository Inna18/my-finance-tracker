import {useEffect, useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const result = await projectAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOGIN", payload: result.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (e) {
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
        console.log("Error during Login...")
      }
    }
  }

  useEffect(() => {
    setIsCancelled(true);
  })

  return { login, error, isPending }
}