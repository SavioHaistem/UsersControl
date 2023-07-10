import axios from "axios";

function useApi(method: string, url: string, body: object = {}) {

  //method prop is a http method to be used;
  //url is a link to http acess;
  //body is the object to be sent, only in especific cases;

  const UpdateApi =async()=> {
    
  };

  const DeleteInApi =async()=> {

  };

  const GetApi =async()=> {
    let response = await axios.get(`${url}`);
    return response.data
  };

  const PostApi =async()=> {
    return await axios.post(`${url}`, body);
  };

  return method === 'POST' ? PostApi() : 
  method === 'GET' ? GetApi() :
  method === 'DELETE' ? DeleteInApi() :
  method === 'UPDATE' ? UpdateApi() : 'No method'

};

export default useApi;