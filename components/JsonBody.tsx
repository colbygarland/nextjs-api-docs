import { stringToSlug } from '../services';
import { ContentTitle } from './ContentTitle';

interface JsonBodyProps {
  title: string;
  json: any;
}

export const JsonBody = ({ title, json }: JsonBodyProps) => {
  const slug = stringToSlug(title);
  return (
    <div id={slug} className="py-10 lg:py-14 border-gray-300 dark:border-gray-700 border-b">
      <div className="mb-10">
        <ContentTitle slug={slug}>{title}</ContentTitle>
      </div>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-2xl shadow-sm p-4 lg:p-8 text-sm">{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
};
