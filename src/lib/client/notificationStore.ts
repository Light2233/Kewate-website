import { writable } from "svelte/store";

interface NotificationStore {
    show: boolean,
    success?: boolean,
    message?: string,
}

let notificationStore: NotificationStore = {
    show: false,
};

export default writable(notificationStore);