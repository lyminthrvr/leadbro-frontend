import {makeAutoObservable} from "mobx";
import {createBlob} from "../utils/create.utils";

export class UserStore {
    user= {
        id: 0,
        image: createBlob(),
        firstName:'Александр',
        lastName:'Шилов',
        middleName:'Александрович',
    }
    constructor(root) {
        this.root = root
        makeAutoObservable(this)
    }

    setUser(result){
        this.user = result
    }

    getUser(){
        return this.user
    }

}