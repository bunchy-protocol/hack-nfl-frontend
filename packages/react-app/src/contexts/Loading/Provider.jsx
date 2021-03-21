import WaitingDialog from "components/WaitingDialog";
import React, {useState} from "react";
import Context from "./Context";

const Provider = ({children}) => {
  const [loadingMessage, setLoadingMessage] = useState();

  return (
    <Context.Provider
      value={{
        setLoadingMessage,
      }}
    >
      {children}
      <WaitingDialog open={!!loadingMessage} message={loadingMessage} />
    </Context.Provider>
  );
};

export default Provider;
