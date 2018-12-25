import React,{Component} from 'react';
import StudentForm from './studentForm'
import StudentList from './studentList'

class Layout extends Component{
    render(){
        return(
            <div>
                <StudentForm/>
                <div>
                    <input type="search" placeholder="请输入要添加的姓名"/>
                    <button>添加</button>
                </div>
                <StudentList/>
            </div>
        )
    }
}


export default Layout;