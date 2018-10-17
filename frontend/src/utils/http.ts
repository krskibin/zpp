import axios from 'axios';
/*
BASIC USAGE:

import HTTP from '@/utils/http'

to post data:
await HTTP.put(`test/{test.id}`, data)

to get data:
let data = await HTTP.get('test/')
 */

const generateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `${window.location.href.split('/', 1)}//${window.location.host}/api`,
  });

  instance.defaults.headers.common['Content-Type'] = 'application/json';

  return instance;
};

const HTTP = generateAxiosInstance();

export default HTTP;
