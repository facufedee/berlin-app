import { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../app/context/AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authContext = useContext(AuthContext);
  if (!authContext || !authContext.user) {
    return <Navigate to="/login" />;
  }
  const { user } = authContext;
  return user ? children : <Navigate to="/login" />;
}
