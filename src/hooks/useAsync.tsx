import { AxiosResponse } from "../frameworks_and_drivers/external_interfaces/Axios";
import { useEffect } from "react";

export default function useAsync(
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependenses: any[] = []
) {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependenses);
}

// const adaptApi =(data:any) =>{
//   setResponse(data.name)
// }
// useAsync(getApiData, adaptApi, () => {}, []);
