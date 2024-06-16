import React, {useMemo} from 'react';
import {opacityTransition} from "../../../../utils/motion.variants";
import {motion} from "framer-motion";
import Title from "../../../../shared/Title";
import {useParams} from "react-router";
import useClientsApi from "../../../Clients/clients.api";
import useServices from "../../hooks/useServices";
import useServiceApi from "../../services.api";
import Card from "../../../../shared/Card";
import styles from './page.module.sass'
import Task from "./components/Task";
import Hours from "./components/Hours";
import Act from "./components/Act";
import Bills from "./components/Bills";

const ServicePage = () => {
    let {id} = useParams();
    const services = useServices();
    const api = useServiceApi();

    const service = useMemo(() => services.getById(id), [id, services.services, services.drafts])
    console.log(services, service, 'servicesPage')
    return (
        <motion.div initial={'hidden'} animate={'show'} variants={opacityTransition}>
            {service?.stages.map(el => (
                <Card classCardHead={styles.head} classTitle={styles.card_title}
                      head={<span className={styles.etap}>Этап №{el.number}</span>} title={el.title}>
                    <h2>{el.title}</h2>
                    <Task task={el.task}/>
                    <Hours hours={el.hours}/>
                    <Act act={el.act}/>
                    <Bills bills={el.bills}/>
                </Card>
            ))}
        </motion.div>
    );
};

export default ServicePage;