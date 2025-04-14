import { FC } from 'react'
import DashboardLayout from 'components/ui/DashboardLayout'
import Layout from 'components/ui/Layout'
import LoginForm from 'components/user/LoginForm'

const Login: FC = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  )
}

export default Login
