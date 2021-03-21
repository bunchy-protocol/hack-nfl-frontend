import { useContext } from "react";

import { LoadingContext } from "contexts/Loading";

const useLoading = () => {
  return {
    ...useContext(LoadingContext),
  };
};

export default useLoading;
