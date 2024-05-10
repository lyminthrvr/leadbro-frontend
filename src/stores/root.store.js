import {HomeStore} from "../pages/Home/stores/home.store";
import {NotificationsStore} from "../pages/Home/stores/notifications.store";
import {ThemeStore} from "./theme.store";

export class RootStore {
    constructor() {
        this.homeStore = new HomeStore(this)
        this.notificationsStore = new NotificationsStore(this)
        this.themeStore = new ThemeStore(this)
    }
}