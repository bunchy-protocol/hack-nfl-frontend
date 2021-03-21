import Chip from "@material-ui/core/Chip";
import useWeb3 from "hooks/hooks/useWeb3";
import React from "react";

export default function AccountChip() {
  const { walletAddress, handleDisconnect } = useWeb3();
  return (
    <>
      {!!walletAddress && (
        <Chip
          label={walletAddress}
          variant="outlined"
          onDelete={handleDisconnect}
        />
      )}
    </>
  );
}
