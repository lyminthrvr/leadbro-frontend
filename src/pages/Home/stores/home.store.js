import {makeAutoObservable} from "mobx";

export class HomeStore {
    clients = []

    constructor(root) {
        this.root = root
        makeAutoObservable(this)
    }

    getClients(){
        return this.clients
    }

    setClients(result){
        this.clients = result
    }



}