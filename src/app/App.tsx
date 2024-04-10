import './styles/globals.css'
import {AppRouter} from "./router";
import {AppProvider} from "./provider";
import {IOptions} from "../entities/options";

interface IAppProps {
  readonly options: IOptions | null
}

export default function App({options}: IAppProps) {
  return (
    <AppProvider options={options}>
      <AppRouter/>
    </AppProvider>
  )
}