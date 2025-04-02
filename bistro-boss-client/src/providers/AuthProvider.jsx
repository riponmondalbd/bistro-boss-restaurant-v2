import { getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ childrean }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = { user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{childrean}</AuthContext.Provider>
  );
};

export default AuthProvider;
