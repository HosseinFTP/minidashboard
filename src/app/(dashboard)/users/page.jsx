"use client";

import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import StatsCards from "@/components/StatsCards";
import UserFilters from "@/components/UserFilters";
import UserTable from "@/components/UserTable";
import UserModal from "@/components/UserModal";
import ConfirmDialog from "@/components/ConfirmDialog";
import RoleGuard from "@/components/RoleGuard";

export default function UsersPage() {
  const {
    users,
    stats,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    resetFilters,
    addUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (user) => {
    setEditing(user);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (editing) updateUser(editing.id, data);
    else addUser(data);
    setModalOpen(false);
    setEditing(null);
  };

  const handleDelete = () => {
    if (deleting) {
      deleteUser(deleting.id);
      setDeleting(null);
    }
  };

  return (
    <RoleGuard allow={["admin", "editor"]}>
      <div className="space-y-6">
        <StatsCards stats={stats} />

        <UserFilters
          search={search}
          setSearch={setSearch}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onReset={resetFilters}
          onAdd={openAdd}
        />

        <UserTable users={users} onEdit={openEdit} onDelete={setDeleting} />

        <UserModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          user={editing}
        />

        <ConfirmDialog
          open={Boolean(deleting)}
          onClose={() => setDeleting(null)}
          onConfirm={handleDelete}
          message={
            deleting
              ? `آیا از حذف «${deleting.name}» مطمئنی؟ این عملیات قابل بازگشت نیست.`
              : ""
          }
        />
      </div>
    </RoleGuard>
  );
}