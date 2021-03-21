import React, { useContext } from "react";
import Chip from "@material-ui/core/Chip";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import useWeb3 from "hooks/hooks/useWeb3";
import EditIcon from "@material-ui/icons/Edit";
function ellipsisMiddle(str) {
  return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
}

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
