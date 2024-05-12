import {makeAutoObservable} from "mobx";

export class ClientsStore {
    clients = []
    drafts = {}


    constructor(root) {
        this.root = root
        makeAutoObservable(this)
    }

    getClients(){
        return this.clients
    }

    getById(id){
        return this.clients.find(x=>x.id===Number(id))
    }

    resetDraft(id, path) {
        if (!this.drafts[id]) return;

        const pathParts = path.split('.');
        let currentDraft = this.drafts[id];

        // Обновляем вложенные объекты в черновике
        for (let i = 0; i < pathParts.length - 1; i++) {
            const part = pathParts[i];
            if (!currentDraft[part]) return; // Если свойство не существует, выходим
            currentDraft = currentDraft[part];
        }

        // Удаляем значение последнего свойства из черновика
        delete currentDraft[pathParts[pathParts.length - 1]];
    }

    submitDraft(id) {
        if (!this.drafts[id]) return;

        const client = this.getById(id);
        if (!client) return;

        // Копируем данные из черновика в оригинальный объект
        Object.assign(client, this.drafts[id]);

        // Удаляем черновик
        this.drafts = {}
    }


    createDraft(id) {
        const client = this.getById(id);
        if (!client) return;

        this.drafts[id] = { ...client };
    }

    changeById(id, path, value) {
        if (!this.drafts[id]) {
            this.createDraft(id);
        }

        const pathParts = path.split('.');
        let currentDraft = this.drafts[id];

        // Обновляем вложенные объекты в черновике
        for (let i = 0; i < pathParts.length - 1; i++) {
            const part = pathParts[i];
            if (!currentDraft[part]) currentDraft[part] = {};
            currentDraft = currentDraft[part];
        }

        // Обновляем значение последнего свойства в черновике
        currentDraft[pathParts[pathParts.length - 1]] = value;
    }

    getDraft(id){
        return this.drafts[id] ?? null
    }

    setClients(result){
        this.clients = result
    }



}