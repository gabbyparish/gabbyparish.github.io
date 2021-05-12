function handleSubmit(event) {
    event.preventDefault()

    // // check what text was put into the form field
    // let FormData = document.getElementById('name').value
    // Client.checkForName(FormData)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
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

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", formdata, requestOptions)
    .then(response => ({
        status: response.status, 
        body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error));

}

export { handleSubmit }
