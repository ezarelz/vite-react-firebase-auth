import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from 'firebase/auth';
import app from '../firebaseConfig';

export const useAuth = () => {
  const { token, setToken, clearToken } = useAuthStore();
  const navigate = useNavigate();
  const auth = getAuth(app);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const tokenResult = await userCredential.user.getIdToken();
      setToken(tokenResult);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const tokenResult = await userCredential.user.getIdToken();
      setToken(tokenResult);
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      clearToken();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    token,
    login,
    register,
    logout,
  };
};
