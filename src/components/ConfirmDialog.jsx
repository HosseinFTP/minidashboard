"use client";

import { AlertTriangle } from "lucide-react";
import { Button, Modal } from "./ui";

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title = "حذف کاربر",
  message = "آیا مطمئنی؟ این عملیات قابل بازگشت نیست.",
}) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-rose-100 dark:bg-rose-500/15 text-rose-500 flex items-center justify-center">
            <AlertTriangle size={20} />
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-6 pt-1">
            {message}
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="danger" className="flex-1" onClick={onConfirm}>
            بله، حذف کن
          </Button>
          <Button variant="outline" onClick={onClose}>
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
}