import axios from 'axios';
import store from '../store/store';

export function conectionApi() {
    // Llamado a la api
    axios.get('https://us-central1-apiclub-d7567.cloudfunctions.net/apiClub/cursos')
    .then(response => {
        console.log('Response Api', response.data);
        // Mandando la data obtenida de la api al store
        store.dispatch('apiDataAction', response.data);
    })
    .catch(error => console.error(error));
}