import {findAllCategory} from "../../api/category";
import {topCategory} from "../../api/constant";

export default {
    namespaced:true,
    state() {
        return {
            list:topCategory.map(item=>({name:item}))
        }
    },
    mutations:{
        setList(state,headCateGory){
            state.list=headCateGory
        },
        show(state,item){
            const category=state.list.find(category=>item.id==category.id)
            category.open=true
        },
        //监听优化？？？
        hidden(state,item){
            const category=state.list.find(category=>item.id==category.id)
            category.open=false
        }
    },
    actions:{
        async getList({commit}){
            const {result}=await findAllCategory()
            //给一级添加一个二级分类的open数据
            result.forEach((item)=>{
                item.open=false
            })
            //修改获取的数据
            commit('setList',result)
        }
    }
}
