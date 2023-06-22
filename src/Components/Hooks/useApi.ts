import axios from "axios";

function useApi(method: string, url: string, configs: object = {}): any {
  const UpdateApi =async()=> {
    
  };

  const DeleteInApi =async()=> {

  };

  const GetApi =async()=> {
    let response = await axios.get(`${url}`);
    return response.data
  };

  const PostApi =async()=> {
    return await axios.post(`${url}`, configs);
  };

  return method === 'POST' ? PostApi() : 
  method === 'GET' ? GetApi() :
  method === 'DELETE' ? DeleteInApi() :
  method === 'UPDATE' ? UpdateApi() : 'No method'

};

export default useApi;