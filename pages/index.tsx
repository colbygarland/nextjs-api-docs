import { observer } from 'mobx-react-lite';
import { DataModel } from '../components/DataModel';
import { JsonBody } from '../components/JsonBody';
import { Endpoint } from '../components/Endpoint';
import { useStore } from '../stores/RootStore';
import Request from '../docs/request.json';
import Response from '../docs/response.json';

const Home = observer(() => {
  const { themeStore } = useStore();
  return (
    <div className="px-4 lg:pt-10 lg:px-10 xl:px-20">
      <div id="data" className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white">Models</h2>
        {themeStore.dataModels.map((d) => (
          <DataModel name={d.name} properties={d.properties} />
        ))}
      </div>
      <div id="services" className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white">Endpoints</h2>
        {themeStore.endpoints.map((s) => (
          <Endpoint key={s.name} name={s.name} description={s.description} parameters={s.request} returnData={s.response} />
        ))}
      </div>
      <div className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white">Request / Response Bodies</h2>
        <JsonBody title="Request Body" json={Request} />
        <JsonBody title="Response Body" json={Response} />
      </div>
    </div>
  );
});

export default Home;
