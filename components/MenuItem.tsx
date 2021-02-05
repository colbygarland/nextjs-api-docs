import { observer } from 'mobx-react-lite';
import { stringToSlug } from '../services';
import { useStore } from '../stores/RootStore';

interface MenuItemProps {
  title: string;
  separator: boolean;
  external?: string;
}

export const MenuItem = observer((props: MenuItemProps) => {
  const { title, separator, external } = props;
  const slug = stringToSlug(title);
  let link;
  if (external) {
    link = external;
  } else {
    link = `#${slug}`;
  }
  const { themeStore } = useStore();

  return (
    <li key={slug}>
      {separator ? (
        <h5 className="px-6 py-3 mt-6 lg:px-10 uppercase tracking-wide font-bold text-md lg:text-xs text-white lg:text-black dark:text-gray-200">{title}</h5>
      ) : (
        <a
          className="
        px-6 py-3 transition-colors duration-200 relative block tracking-wide font-semibold hover:text-gray-200 text-white text-sm 
        lg:text-gray-500 lg:hover:text-blue-500 lg:px-10
        "
          href={link}
          target={external ? 'blank' : null}
          onClick={() => {
            themeStore.setMenuVisible(false);
          }}
        >
          {title}
          {external ? (
            <span className="inline-block ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          ) : (
            ''
          )}
        </a>
      )}
    </li>
  );
});
