//封装请求
import axios from "axios";
import "../../mock/todoList";

export const http={
    apiGet(url){
        return new Promise((resolve)=>{
            axios.get(url).then(function(response){
                resolve(response);
            });
        })
    }
}