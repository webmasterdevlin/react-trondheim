import { BrowserRouter } from 'react-router-dom';

import Ref from './built-in-hooks/Ref';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <Ref />
      </div>
    </BrowserRouter>
  );
};

export default App;
