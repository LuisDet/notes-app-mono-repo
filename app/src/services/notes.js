import axios from 'axios';
const baseUrl = '/api/notes';

const getAll = () => {
  const allNotes = axios.get(baseUrl);
  return allNotes.then((response) => {
    return response.data;
  });
};

const create = (newObject, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const resquest = axios.post(baseUrl, newObject, config);
  return resquest.then((response) => response.data);
};

const update = (id, newObject) => {
  const resquest = axios.post(`${baseUrl}/${id}`, newObject);
  return resquest.then((response) => response.data);
};

export default { getAll, create, update };
