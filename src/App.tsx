import React from 'react'
import './App.css';
import SearchFrom from './components/SearchFrom/SearchFrom'
import AuthGuard from './app/components/AuthGuard/AuthGuard';
import AppRouter from './app/router/AppRouter';
import AppLayout from './components/AppLayout/AppLayout';
const App = () => {
  return (
    <AuthGuard>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </AuthGuard>
  )
}

export default App
