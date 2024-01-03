import {
  Card, Flex, Form, Input, Button,
} from 'antd';
import { UserType } from '../../types/user';
import { useAuth } from '../../context/AuthProvider/useAuth';

function Login() {
  const auth = useAuth();
  const onFinish = (values: UserType) => {
    if (values.email && values.password) {
      auth.authenticate(values.email, values.password);
    }
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Flex style={{ height: '100vh' }} gap="middle" align="center" justify="center" vertical>
      <Card title="Login" extra={<a href="/register">Create account</a>} style={{ width: '50%', height: 'auto' }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<UserType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<UserType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Enter
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}

export default Login;
