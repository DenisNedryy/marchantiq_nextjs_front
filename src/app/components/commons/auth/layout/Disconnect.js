"use client";

import { disconnect } from "../../../../services/users";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";

export function Disconnect() {
  const router = useRouter();
  const { state, dispatch } = useAuth();

  if (!state.isAdmin) return null;

  async function handleDisconnect() {
    const res = await disconnect();

    if (res?.ok) {
      dispatch({ type: "LOGOUT" });

      router.push("/");
      router.refresh();
    }
  }



  return (
    <i
      className="fa-solid fa-right-from-bracket"
      onClick={handleDisconnect}
    />
  );
}
