import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthProvider/useAuth';

function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.email) return <h1>Access Denied</h1>;

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
      <Button
        type="link"
        onClick={handleLogout}
        icon={<LogoutOutlined />}
        style={{ margin: '24px', marginTop: '10px' }}
      >
        Sair
      </Button>
      { children }
    </>
  );
}

export default ProtectedLayout;
