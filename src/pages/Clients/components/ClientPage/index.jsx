import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router";
import useStore from "../../../../hooks/useStore";
import {observer} from "mobx-react";
import styles from './Client.module.sass'
import Title from "../../../../shared/Title";
import useClients from "../../hooks/useClients";
import ClientStatus from "./Status";
import cn from "classnames";
import ClientService from "./Services";
import ClientDeals from "./Deals";
import ClientActivities from "./Activities";
import ClientDescription from "./Description";
import useClientsApi from "../../clients.api";
import ClientPersons from "./Persons";
import {deepObserve} from "mobx-utils";
import {reaction} from "mobx";
import ClientsContacts from "./Contacts";
import ClientPasswords from "./Passwords";

const ClientPage = observer(() => {
    let { id } = useParams();
    const clients = useClients();
    const api = useClientsApi();

    const client = useMemo(()=>clients.getById(id),[id,clients.clients,clients.drafts])






    console.log(client,'draft')
    const handleChange = (name,payload,withId=true) => {
        debugger
        clients.changeById(client?.id ?? +id,name,payload,withId)
    }
    const handleReset = (path) =>{
        clients.resetDraft(client.id,path)
    }

    const handleRemove = (path) =>{
        clients.removeById(client.id,path)
    }
    const handleSubmit = () => {
        clients.submitDraft()
        api.setClients(clients)
    }

    return (
        <>
            <Title title={client?.name}/>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ClientStatus className={cn(styles.card,styles.card_status)} client={client}/>
                    <ClientService className={cn(styles.card,styles.card_status)} services={client?.services}/>
                    <ClientDeals className={cn(styles.card,styles.card_status)} deals={client?.deals}/>
                    <ClientActivities activities={client?.activities}/>
                </div>
                <div className={styles.col}>
                    <ClientDescription onChange={handleChange} onReset={handleReset} onSubmit={handleSubmit} description={client?.description} />
                    <ClientPersons onChange={handleChange} onReset={handleReset} onSubmit={handleSubmit} persons={client?.contactPersons} />
                    {client?.contactData && <ClientsContacts onAdd={(name,payload)=>handleChange(name,payload ?? '')} onRemove={handleRemove} onChange={handleChange} onReset={handleReset} onSubmit={handleSubmit} contactData={client?.contactData} />}
                    <ClientPasswords onAdd={(name,payload)=>handleChange(name,payload ?? '')} onRemove={handleRemove} onChange={handleChange} onReset={handleReset} onSubmit={handleSubmit} passwordsData={client?.passwords} />
                </div>
            </div>
        </>
    );
});

export default ClientPage;