import React, { Component } from "react";
import App from "base-shell/lib";
import MUIConfig from "material-ui-shell/lib";
import merge from "base-shell/lib/utils/config";
import _config from "./config";
import { Web3Provider } from "contexts/Web3";
import { ContractsProvider } from "contexts/Contracts";
import { LoadingProvider } from "contexts/Loading";

const config = merge(MUIConfig, _config);

export default class Demo extends Component {
  render() {
    return (
      <LoadingProvider>
        <Web3Provider>
          <ContractsProvider>
            <App config={config} />
          </ContractsProvider>
        </Web3Provider>
      </LoadingProvider>
    );
  }
}
