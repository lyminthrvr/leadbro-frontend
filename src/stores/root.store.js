import {ClientsStore} from "../pages/Clients/stores/clients.store";
import {NotificationsStore} from "../pages/Clients/stores/notifications.store";
import {ThemeStore} from "./theme.store";
import {UserStore} from "./user.store";
import {ServicesStore} from "../pages/Services/stores/services.store";
export class RootStore {
    constructor() {
        this.clientsStore = new ClientsStore(this)

        this.notificationsStore = new NotificationsStore(this)
        this.themeStore = new ThemeStore(this)
        this.userStore = new UserStore(this)
        this.servicesStore = new ServicesStore(this)
    }
}