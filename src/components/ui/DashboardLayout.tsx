import { FC, ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

interface Props {
  children: ReactNode | ReactNode[]
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <Topbar />
      </div>
    </>
  )
}

export default DashboardLayout
