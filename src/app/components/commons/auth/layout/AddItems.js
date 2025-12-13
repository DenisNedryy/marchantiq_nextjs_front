"use client";

import { ActiveLink } from "../../../navigation/ActiveLink";
import { useAuth } from "../../../../context/AuthContext";

export function AddItems() {
  const { state } = useAuth();

  if (!state.isAdmin) return null;

  return (
    <li data-text="Ajouter un objet" style={{ width: "124px" }}>
      <ActiveLink href="/admin/addItems">
        <span>Ajouter un objet</span>
      </ActiveLink>
    </li>
  );
}
