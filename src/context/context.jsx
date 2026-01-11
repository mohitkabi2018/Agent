import { createContext, useContext, useState, useEffect } from 'react';
import { get } from 'aws-amplify/api';
import initialData from '../utils/data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiResponse = await get({
        apiName: 'main',
        path: `/any/get-institution-data/${initialData.InstitutionId}`,
      });

      const response = await apiResponse.response;
      const jsonData = await response.body.json();
      
      // Merge API data with initial data as fallback
      setData({
        ...initialData,
        ...jsonData
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
      setData(initialData); // Use initial data as fallback
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
