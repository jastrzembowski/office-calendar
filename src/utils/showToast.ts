import { toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

export function showToast(type: ToastType, message: string) {
  toast[type](message);
}