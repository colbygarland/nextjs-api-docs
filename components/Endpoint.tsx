import { stringToSlug } from '../services';
import { ContentDescription } from './ContentDescription';
import { ContentTitle } from './ContentTitle';
import { DataTable } from './DataTable';

type Parameter = {
  name: string;
  description: string;
  type: string;
};

type ReturnData = {
  name: string;
  description: string;
  type: string;
};

interface ServiceProps {
  name: string;
  description: string;
  parameters: Parameter[];
  returnData: ReturnData;
}

export const Endpoint = ({ name, description, parameters, returnData }: ServiceProps) => {
  const slug = stringToSlug(name);
  return (
    <div id={slug}>
      <div className="py-10 lg:py-14 border-gray-300 dark:border-gray-700 border-b">
        <div className="lg:grid grid-cols-1">
          <div className="mb-10">
            <ContentTitle slug={slug}>{name}</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </div>
          <div>
            {parameters.length && <DataTable title="Parameters" data={parameters} />}
            <DataTable title="Return Data" data={returnData} />
          </div>
        </div>
      </div>
    </div>
  );
};
