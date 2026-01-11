import Loader from '../components/common/Loader';

const TestLoader = () => {
  const handleLoadingComplete = () => {
    console.log('Loading complete!');
  };

  return <Loader onLoadingComplete={handleLoadingComplete} />;
};

export default TestLoader; 