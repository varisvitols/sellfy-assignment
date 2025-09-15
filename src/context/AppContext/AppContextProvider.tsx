import { useState } from 'react';
import type { ReactNode } from 'react';
import type { AppContextType } from '.';
import AppContext from '.';

type Props = { children: ReactNode };

export default function AppContextProvider({ children }: Props) {
  const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);

  const context: AppContextType = { bodyOverflowHidden, setBodyOverflowHidden };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
