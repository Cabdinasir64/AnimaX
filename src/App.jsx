import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';

import NotPageFound from './Pages/NotFoundPage'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </>
  );
}
export default App;