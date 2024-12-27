
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function Translation() {
    const [count, setCount] = useState(0)
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (lng: string) => {
      i18n.changeLanguage(lng); // Change language dynamically
    };
  
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
  
    return (
      <div >
        <h1>{t('hello_world')}</h1>
        <h2>{t('current_time', { time: currentTime })}</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
  
        <button onClick={() => handleChangeLanguage('en')}>English</button>
        <button onClick={() => handleChangeLanguage('fr')}>Français</button>
        <button onClick={() => handleChangeLanguage('ar')}>البحرين العربية</button>
        </div>
      </div>
    )
  }
  
  export default Translation
  