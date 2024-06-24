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
import Report from "./components/Report";
import TextLink from "../../../../shared/Table/TextLink";
import {observer} from "mobx-react";
import AdaptiveStages from "./components/AdaptiveCard";

const ServicePage = observer(() => {
    let {id} = useParams();
    const services = useServices();
    const api = useServiceApi();

    const service = useMemo(() => services.getById(+id), [id, ,services,services.services, services.drafts])
    return (
        <motion.div initial={'hidden'} animate={'show'} variants={opacityTransition}>
            {service?.stages.map(el => (
                <div>
                <Card classCardHead={styles.card_title} className={styles.card} classCardHead={styles.head} classTitle={styles.card_title}
                      head={<TextLink className={styles.etap}>Этап №{el.number}</TextLink>} title={el.title}>
                    <Task stage={el} taskName={service.title} task={el.task}/>
                    <Hours time={el.time}/>
                    <Report/>
                    <Act act={el.act}/>
                    <Bills bills={el.bills}/>
                </Card>
                    <AdaptiveStages data={el}/>
                </div>
            ))}
        </motion.div>
    );
});

export default ServicePage;