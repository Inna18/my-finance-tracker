import {useEffect, useReducer, useState} from "react";
import {projectFirestore, timestamp} from "../firebase/config";

const firestoreReducer = (state, action) => {
  switch(action.type) {
    case "IS_PENDING":
      return { document: null, isPending: action.payload, error: null, success: null }
    case "ADD_DOCUMENT":
      return { document: action.payload, isPending: false, error: null, success: true }
    case "DELETE_DOCUMENT":
      return { document: null, isPending: false, error: null, success: true }
    case "ERROR":
      return { document: null, isPending: false, error: action.payload, success: null }
    default:
      return state;
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isPending: false,
    error: null,
    success: null
  });
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = projectFirestore.collection(collection);

  const dispatchIfNotCancelled = (type, payload) => {
    if (!isCancelled) {
      dispatch({ type: type, payload: payload })
    }
  }

  const addDocument = async (doc) => {
    const createdAt = timestamp.fromDate(new Date());

    dispatch({ type: "IS_PENDING", payload: true });

    try {
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled("ADD_DOCUMENT", addedDocument);
    } catch(e) {
      dispatchIfNotCancelled("ERROR", e.message);
    }
  }

  const removeDocument = async (id) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const removedDocument = await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: "DELETE_DOCUMENT", payload: removedDocument })
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "couldn't delete" })
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, removeDocument, response }
}