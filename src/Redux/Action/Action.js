import axios from 'axios'
import { GET_DATA } from '../ActionType/ActionType'

export const get_dat=()=>async(dispatch)=>{
    try {
    const res=await axios.get("http://192.168.3.31:3333/api/getallpost")
      dispatch({type:GET_DATA ,payload:res.data})
    } catch (error) {
       console.log(error) 
    }
    
}
