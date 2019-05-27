import axios from 'axios';

class HttpService {
  constructor(){

  }

  /**
   *
   * @returns { AxiosInstance }
   */
   postData = (url, data) =>
  {
    return axios.post(url, data, {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(data => console.log(data))
      .catch(error => {
        console.log(error)
      });
  }
}

export default HttpService;
