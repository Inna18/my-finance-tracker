import {useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const result = await projectAuth.createUserWithEmailAndPassword(email, password);
      if (!result) throw new Error ("Couldn't signup user...")
      await result.user.updateProfile({ displayName });

      dispatch({ type: "LOGIN", payload: result.user })

      setError(null);
      setIsPending(false);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setIsPending(false);
    }
  }

  return { signup, error, isPending }
}