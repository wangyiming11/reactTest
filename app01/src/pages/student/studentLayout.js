import React,{Component} from 'react';
import StudentForm from './studentForm'
import StudentList from './studentList'
import { http } from "./http";//封装的axios请求，但是会被mock拦截生成自定义数据
const host="http://localhost:3000/"



class Layout extends Component{




    handlerClick=()=>{
        /* axios.get(host+'test.json').then(function(response){
            console.log(response.data)
        }).catch(function(err){
            console.log(err+'err----------------------');
        })
 */


        http.apiGet('/teacherList').then(function(response){
            console.log(response);
        });
    }


    render(){
        return(
            <div>
                <StudentForm/>
                <div>
                    <input type="search" placeholder="请输入要添加的姓名"/>
                    <button onClick={this.handlerClick}>添加</button>
                </div>
                <StudentList/>
            </div>
        )
    }
}


export default Layout;