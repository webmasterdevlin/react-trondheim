import { BrowserRouter } from 'react-router-dom';

import EagerRoutes from './EagerRoutes';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <EagerRoutes />
    </BrowserRouter>
  );
};

export default App;
