import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SampleLayout } from './layout/SampleLayout';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { Home } from './pages/Home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <SampleLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<PageOne />} />
          <Route path="page2" element={<PageTwo />} />
        </Routes>
      </SampleLayout>
    </BrowserRouter>
  );
}

export default App;
