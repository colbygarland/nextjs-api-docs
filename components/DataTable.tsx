import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { stringToSlug } from '../services';
import { useStore } from '../stores/RootStore';

interface DataTableProps {
  title: string;
  data: any;
}

const row = (name: string, desc: string, type: string, models: any) => {
  const { addToast } = useToasts();
  const exists = models.find((m) => m.name === type);
  let link;
  if (exists !== undefined) {
    const slug = stringToSlug(type);
    link = (
      <a className="text-blue-500 cursor-pointer hover:text-blue-900 dark:text-blue-300" href={`#${slug}`}>
        {type}
      </a>
    );
  } else {
    link = type;
  }
  return (
    <tr key={name}>
      <td className="cursor-pointer p-2 font-mono text-xs text-violet-500 hover:text-violet-900 dark:text-violet-300 whitespace-nowrap border-t border-gray-200">
        <span
          onClick={() => {
            navigator.clipboard.writeText(name);
            addToast('Parameter has been copied to clipboard.', {
              appearance: 'info',
            });
          }}
        >
          {name}
        </span>
      </td>
      <td className="p-2 font-mono text-xs whitespace-pre border-t border-gray-200">
        <span className="text-lightBlue-400">{desc}</span>
      </td>
      <td className="p-2 font-mono text-xs text-lightBlue-300 whitespace-pre border-t border-gray-200">{link}</td>
    </tr>
  );
};

export const DataTable = (props: DataTableProps) => {
  const { title, data } = props;
  const { themeStore } = useStore();

  let rows;
  if (Array.isArray(data)) {
    rows = data.map((p) => row(p.name, p.description, p.type, themeStore.dataModels));
  } else {
    rows = row(data.name, data.description, data.type, themeStore.dataModels);
  }
  return (
    <div className="mb-6">
      <h6 className="text-xl font-medium mb-4 text-gray-600 dark:text-gray-200">{title}</h6>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
        <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-gray-100 dark:bg-gray-800 p-0">
                  <div className="p-2 border-b border-gray-200 dark:text-gray-100">Name</div>
                </th>
                <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-gray-100  dark:bg-gray-800 p-0">
                  <div className="p-2 border-b border-gray-200 dark:text-gray-100">Description</div>
                </th>
                <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-gray-100  dark:bg-gray-800 p-0">
                  <div className="p-2 border-b border-gray-200 dark:text-gray-100">Type</div>
                </th>
              </tr>
            </thead>
            <tbody className="align-baseline">{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
