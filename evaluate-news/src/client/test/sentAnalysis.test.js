import fetch from 'cross-fetch';
import { response } from 'express';
import json from '../../server/mockAPI';
const formdata = new FormData();
formdata.append("key", "9ab66918039c8c718f5d309e94cf91fb");
formdata.append("url", "https://www.theguardian.com/music/2020/may/08/megan-thee-stallion-hot-girl-taking-over-hip-hop-interview");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
formdata.append("tt", "a");                     // all topics

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/topics-2.0", formdata, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

