import { stringToSlug } from '../services';
import { ContentTitle } from './ContentTitle';
import { DataTable } from './DataTable';

type Property = {
  name: string;
  description?: string;
  type: string;
};

interface DataModelProps {
  name: string;
  properties: Property[];
}

export const DataModel = (props: DataModelProps) => {
  const { name, properties } = props;
  const slug = stringToSlug(name);

  return (
    <div id={slug}>
      <div className="py-10 lg:py-14 border-gray-300 dark:border-gray-700 border-b">
        <div className="mb-10">
          <ContentTitle slug={slug}>{name}</ContentTitle>
        </div>
        <div className="grid grid-cols-1 gap-0">
          <DataTable title="Properties" data={properties} />
        </div>
      </div>
    </div>
  );
};
