//USER 模块
export default {
    //用于封装代码 使用的时候 获取模块路径 $store.getters[模块名/function name]
    namespaced:true,
    state() {
        return {
            profile:{
                id: '',
                avatar: '',
                nickname: '',
                account: '2507208841',
                mobile: '',
                token:''
            }
        }
    },
    mutations: {
        setUser(state, palyload) {
            state.profile = palyload
            console.log(palyload)
            console.log(state)
        }
    }
}
