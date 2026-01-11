import { Suspense, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { routes } from './routes';
import Loader from './components/common/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const element = useRoutes(routes);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <Suspense fallback={<Loader onLoadingComplete={handleLoadingComplete} />}>
        {element}
      </Suspense>
    </>
  );
};

export default App;
