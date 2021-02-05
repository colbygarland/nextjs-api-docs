import { types } from 'mobx-state-tree';

const ServiceModel = types.model({
  name: types.string,
  description: types.string,
  request: types.array(
    types.model({
      name: types.string,
      description: types.string,
      type: types.string,
    })
  ),
  response: types.model({
    name: types.string,
    description: types.string,
    type: types.string,
  }),
});

const DataModel = types.model({
  name: types.string,
  properties: types.array(
    types.model({
      name: types.string,
      description: types.optional(types.string, ''),
      type: types.string,
    })
  ),
});

export const ThemeStore = types
  .model('ThemeStore')
  .props({
    theme: types.string,
    menuVisible: types.boolean,
    endpoints: types.array(ServiceModel),
    dataModels: types.array(DataModel),
  })
  .actions((self) => ({
    setTheme: (theme: string) => {
      self.theme = theme;
    },
    setMenuVisible: (visible: boolean) => {
      self.menuVisible = visible;
    },
    setEndpoints: (endpoints) => {
      self.endpoints = endpoints;
    },
    setDataModels: (dataModels) => {
      self.dataModels = dataModels;
    },
  }))
  .views((self) => ({
    get servicesCount() {
      return self.endpoints.length;
    },
  }));

export const ThemeStoreInitialState = {
  theme: 'light',
  menuVisible: false,
  endpoints: [],
  dataModels: [],
};
