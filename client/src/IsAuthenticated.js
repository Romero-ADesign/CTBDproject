import React, { useContext } from 'react';
import { AuthContext } from './Auth';

function Authenticated({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  return children;
}

export default Authenticated;