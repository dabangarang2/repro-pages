import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

export const TestComponent = () => {
  const privy = usePrivy();
  const wallets = useWallets();
  const account = useAccount();

  console.log({ useAccount: account, usePrivy: privy, useWallets: wallets });

  if (!privy.ready) return <>Loading...</>;

  if (privy.user === null)
    return (
      <button onClick={privy.login} className="px-4 py-2 bg-neutral-500">
        Login to Privy
      </button>
    );

  // User is logged in
  return (
    <>
      <span>wallets[0]: {wallets.wallets[0]?.address}</span>

      <span className="mt-2 text-sm text-yellow-500">
        useAccount:{" "}
        {JSON.stringify(
          {
            status: account.status,
            connector: account.connector ? "{...}" : "undefined",
            address: account.address ?? "undefined",
          },
          null,
          2
        )}
      </span>
      <span className="text-xs text-yellow-500">(See more in console)</span>

      <button onClick={privy.logout} className="mt-8 px-4 py-2 bg-red-900">
        Logout
      </button>
    </>
  );
};
