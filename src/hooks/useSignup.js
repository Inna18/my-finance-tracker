import {useState} from "react";
import {projectAuth} from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const result = await projectAuth.createUserWithEmailAndPassword(email, password);
      if (!result) throw new Error ("Couldn't signup user...")
      await result.user.updateProfile({ displayName });
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