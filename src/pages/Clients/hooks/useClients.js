import React, { useEffect, useMemo, useState } from 'react';
import useStore from '../../../hooks/useStore';
import useClientsApi from '../clients.api';

const useClients = (id = null) => {
  const { clientsStore } = useStore();
  const api = useClientsApi();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        if (id !== null) {
          if (!clientsStore.clients.length) {
            await api.getClientById(id);
          } else {
            const clientFromStore = clientsStore.getById(id);
            if (clientFromStore) {
              clientsStore.setCurrentClient(clientFromStore);
            } else {
              await api.getClientById(id);
            }
          }
        } else if (!clientsStore.clients.length) {
          await api.getClients();
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      if (id !== null) {
        clientsStore.clearCurrentClient();
      }
    };
  }, [clientsStore, id]);

  const result = useMemo(() => {
    if (id !== null) {
      return clientsStore.currentClient || clientsStore.getById(id);
    } else {
      return clientsStore;
    }
  }, [id, clientsStore.currentClient, clientsStore.clients]);

  return { data: result, isLoading };
};

export default useClients;
