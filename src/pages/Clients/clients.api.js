import {
  handleHttpError,
  handleHttpResponse,
  http,
  mockHttp,
} from '../../shared/http';
import { statusTypes } from './clients.types';
import mocks from './clients.mocks';
import useStore from '../../hooks/useStore';
import { useEffect, useRef } from 'react';

let blob = new Blob([], { type: 'application/pdf' });
let fakeFile = blob;

mockHttp.onGet('/clients').reply(200, mocks.createClients());
mockHttp.onPost('/clients').reply(200, mocks.createClients());
mockHttp.onGet(/\/clients\/\d+/).reply((config) => {
  const id = parseInt(config.url.split('/').pop());

  const clients = mocks.createClients();
  const client = clients.find((c) => c.id === id);

  if (client) {
    return [200, client];
  } else {
    console.log(`Client with id ${id} not found`);
    return [404, { message: 'Client not found' }];
  }
});
mockHttp.onGet(`/download/file`).reply((config) => {
  return [200, fakeFile];
});
const useClientsApi = () => {
  mockHttp.onGet('/clients').reply(200, mocks.createClients());
  const { clientsStore } = useStore();
  const getClients = () => {
    return http
      .get('/clients')
      .then(handleHttpResponse)
      .then((res) => clientsStore.setClients(res.body))
      .then(() => clientsStore.getClients())
      .catch(handleHttpError);
  };

  const setClients = (body) => {
    return http
      .post('/clients', body)
      .then(handleHttpResponse)
      .then((res) => clientsStore.setClients(res.body))
      .catch(handleHttpError);
  };

  const getClientById = (id) => {
    return http
      .get(`/clients/${id}`)
      .then((e) => handleHttpResponse(e))
      .then((res) => {
        clientsStore.setCurrentClient(res.body);
      })
      .catch((e) => {
        handleHttpError(e);
      });
  };

  const downloadFile = (id, fileName) => {
    return http
      .get(`/download/file`)
      .then((response) => response.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        a.remove();
        setTimeout(() => window.URL.revokeObjectURL(url), 100);
      });
  };

  const postFile = (blobFile, fileName) => {
    const form = new FormData();
  };

  return { setClients, getClients, getClientById };
};

export default useClientsApi;
