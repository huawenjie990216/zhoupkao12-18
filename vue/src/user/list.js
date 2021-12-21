//注册界面组件
const listForm = {
    template:'\
    <div>\
    <table border="1" cellspacing="0" cellpadding="0">\
    <tr>\
    <tr v-for="user in users">\
    <td>{{user.age}}</td><td>{{user.name}}</td><br/>\
    </tr>\
    </table>\
    </div>\
    ',
    data(){
        return{
            users:[
                {age:1, name: '张三'},
                {age:2, name: '李四'},
                {age:3, name: '王五'},
            ]
        }
    }
}
    