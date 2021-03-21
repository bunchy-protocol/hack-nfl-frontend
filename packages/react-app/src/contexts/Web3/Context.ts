import { createContext } from "react";
import { ContextValues } from "./types";

const Context = createContext<ContextValues>({
  handleConnect: () => {},
  handleDisconnect: () => {},
  connected: false,
});
export default Context;
