import { useCallback,useEffect,useState } from 'react';

const useGetToken = () => {
  const getToken = useCallback(async () => {
    try {
      const response = await fetch(`https://nodejs-serverless-function-express-wwwin.vercel.app/api/getToken`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching game state:', error);
      throw error;
    }
  }, []);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const state = await getToken();
        setToken(state);
      } catch (error) {
        console.error('Failed to fetch token:', error);
      }
    };

    fetchToken();
  }, [getToken]);


  return token;
};

export default useGetToken;
