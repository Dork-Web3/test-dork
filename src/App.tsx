import { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const initData = (window as any)?.Telegram?.WebApp?.initData || 'Brak danych';

  return (
    <div>
      {initData}
    </div>
  );
};

export default App
