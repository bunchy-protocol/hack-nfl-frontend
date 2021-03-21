import AccountChip from "components/AccountChip";
import ConnectButton from "components/ConnectButton";
import useWeb3 from "hooks/hooks/useWeb3";
import React from "react";

export default function ConnectComposite() {
  const { connected } = useWeb3();

  return connected ? <AccountChip /> : <ConnectButton />;
}
