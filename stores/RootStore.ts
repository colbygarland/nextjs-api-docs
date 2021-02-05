import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';

import { ThemeStore, ThemeStoreInitialState } from './ThemeStore';

export const rootStore = types
  .model({
    themeStore: ThemeStore,
  })
  .create({
    themeStore: ThemeStoreInitialState,
  });

export type RootInstance = Instance<typeof rootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const StoreProvider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
