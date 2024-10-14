import {ToastComponent} from "../components/toast/toast.component";

const iconClass = {
  error: 'toast-error',
  info: 'toast-info',
  success: 'toast-success',
  warning: 'toast-warning',
}

export const ToastConfig = {
  closeButton: true,
  positionClass: 'toast-top-right',
  newestOnTop: true,
  iconClass,
  extendedTimeOut: 5000,
  resetTimeoutOnDuplicate: true,
  toastComponent: ToastComponent
}
