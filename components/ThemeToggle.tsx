import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/RootStore';

export const ThemeToggle = observer(() => {
  const { themeStore } = useStore();

  const toggleTheme = () => {
    themeStore.theme === 'light' ? themeStore.setTheme('dark') : themeStore.setTheme('light');
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer text-2xl">
      {themeStore.theme === 'light' ? '🌑' : '☀'}
    </div>
  );
});
