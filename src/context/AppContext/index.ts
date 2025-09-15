import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type AppContextType = {
  bodyOverflowHidden: boolean;
  setBodyOverflowHidden: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;
