import {useContext, useMemo} from "react";
import {StoreContext} from "../providers/StoreProvider";
import useStore from "./useStore";

const useUser = () => {
   const {userStore} = useStore()
   const user = useMemo(()=>userStore.user,[userStore.user])
   return user
};

export default useUser