import React, {useMemo, useState} from 'react';
import Dropdown from "../../../../../../shared/Dropdown/Default";
import styles from './filter.module.sass'

const Index = ({data}) => {
    const [selectedService, setSelectedService] = useState('Все');
    const [selectedManager, setSelectedManager] = useState('Все');

    const serviceOptions = useMemo(() => {
        const services = new Set(['Все']);
        data.forEach((item) => {
            services.add(item.title);
        });
        return Array.from(services);
    }, [data]);

    const managerOptions = useMemo(() => {
        const managers = new Set(['Все']);
        data.forEach((item) => {
            managers.add(`${item.manager.name} ${item.manager.surname}`);
        });
        return Array.from(managers);
    }, [data]);

    const handleServiceChange = (service) => {
        setSelectedService(service);
    };

    const handleManagerChange = (manager) => {
        setSelectedManager(manager);
    };

    return (
        <div>
            <div className={styles.item}>
                <Dropdown
                    value={selectedService}
                    setValue={handleServiceChange}
                    options={serviceOptions}
                    label="Услуга"
                />
            </div>
            <div>
                <Dropdown
                    value={selectedManager}
                    setValue={handleManagerChange}
                    options={managerOptions}
                    label="Ответственный"
                />
            </div>
        </div>
    );
};

export default Index;