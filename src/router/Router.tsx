import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RestaurantDetail, RestaurantList, Login } from '../pages';
import { AuthProvider } from '../context/AuthProvider';
import ProtectedLayout from '../layouts/ProtectedLayout';

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/restaurants" element={<ProtectedLayout><RestaurantList /></ProtectedLayout>} />
          <Route path="/details/:id/" element={<ProtectedLayout><RestaurantDetail /></ProtectedLayout>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
