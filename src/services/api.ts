import axios from 'axios';
import md5 from 'md5';


const publicKey = 'c04b406ffe74c85cc86a0d43142601db';
const privateKey = 'e41b986f27f088ca9f8419deaf01e928b6b02e91';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: ts,
        apikey: publicKey,
        hash: hash,
        limit: 100
    },
    headers: {
        Accept: 'application/json',
    },
});

export default api;