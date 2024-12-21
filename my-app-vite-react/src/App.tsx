import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();
  const [currentTime, setCurrentTime] = useState<string>('');

  // Function to format date and time based on the user's locale and timezone
  const formatCurrentTime = () => {
    const now = new Date();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's timezone

    // Format the current date and time based on the user's locale and timezone
    const formattedTime = new Intl.DateTimeFormat(i18n.language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: timezone, // Timezone is dynamic
    }).format(now);

    setCurrentTime(formattedTime);
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      formatCurrentTime();
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [i18n.language]);

  // Function to change language
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className='app' title='apptitle'>
      {/* <div title='for snapshot test fail uncomment this'></div> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('hello_world')}</h1>
      <h2>{t('current_time', { time: currentTime })}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>Français</button>
      <button onClick={() => handleLanguageChange('ar')}>البحرين العربية</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
