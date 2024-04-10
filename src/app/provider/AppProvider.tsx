import React, {FC} from "react";
import {Provider} from "react-redux";
import {persistor, store} from "../store";
import {PersistGate} from "redux-persist/integration/react";
import {IOptions, setDealers} from "../../entities/options";

interface IProvidersProps {
  readonly children: React.ReactNode
  readonly options: IOptions | null
}

export const AppProvider: FC<IProvidersProps> = ({children, options}) => {
  store.dispatch(setDealers(options?.dealers || null))

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}