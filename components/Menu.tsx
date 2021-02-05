import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/RootStore';
import { MenuItem } from './MenuItem';

interface MenuProps {
  services: {
    name: string;
  }[];
  dataModels: {
    name: string;
  }[];
}

export const Menu = observer((props: MenuProps) => {
  const { dataModels, services } = props;
  const { themeStore } = useStore();

  const handleClick = () => {
    themeStore.setMenuVisible(!themeStore.menuVisible);
  };

  const serviceMenuItems = () => {
    return services.map((d) => <MenuItem title={d.name} separator={false} />);
  };

  const dataModelItems = () => {
    return dataModels.map((d) => <MenuItem title={d.name} separator={false} />);
  };

  return (
    <div className="lg:block lg:overflow-y-visible lg:max-w-sm">
      <button onClick={handleClick} className="fixed top-5 left-5 z-50 cursor-pointer lg:hidden">
        <svg viewBox="0 0 100 80" width="25" height="25" className="text-white fill-current">
          <rect width="100" height="10" rx="8"></rect>
          <rect y="30" width="100" height="10" rx="8"></rect>
          <rect y="60" width="100" height="10" rx="8"></rect>
        </svg>
      </button>

      <div
        className={`${themeStore.menuVisible ? 'block' : 'hidden'} 
        fixed w-full top-12 bottom-0 left-0 overflow-y-auto z-50 bg-gray-900 text-white pt-6 pb-6
        dark:bg-gray-900 dark:text-gray-100
        lg:block lg:w-auto lg:z-40 lg:sticky lg:top-16 lg:bg-transparent lg:text-gray-800 lg:overflow-y-auto lg:pt-10 lg:pb-10 lg:h-screen-calc
        `}
      >
        <ul className="">
          <MenuItem title="Helpful Links" separator={true} />
          <MenuItem title="External Link Example" separator={false} external="https://github.com" />
          <MenuItem title="Request / Response" separator={true} />
          <MenuItem title="Request Body" separator={false} />
          <MenuItem title="Response Body" separator={false} />
          <MenuItem title="Models" separator={true} />
          {dataModelItems()}
          <MenuItem title="Endpoints" separator={true} />
          {serviceMenuItems()}
        </ul>
      </div>
    </div>
  );
});
