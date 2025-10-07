import React from 'react'

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  return <div>{children}</div>
}

export default ProtectedRoute