<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="profile.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{userName}}</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">免费注册</a></li>
                </template>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员中心</a></li>
                <li><a href="javascript:;">帮助中心</a></li>
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import {useStore}from'vuex'
import {computed, ref} from "vue";

export default {
    name: "AppTonav",
    setup(){
        const store=useStore()
        const profile=computed(()=>{
            return store.state.user.profile
        })
        const userName=name||"默认用户"
        return{
            profile,
            userName
        }
    }
}
</script>

<style scoped lang="less">
@import '../../assets/styles/variable.less';
.app-topnav {
    background: #333;
    div{
        margin: 0 auto;
    }

    ul {
        display: flex;
        height: 53px;
        justify-content: center;
        align-items: center;
        li {

            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                i {
                    font-size: 14px;
                    margin-right: 2px;;
                }
                &:hover{
                    color: @xtxColor;
                }
            }
            //tag 选择器
            ~li{
                a{
                    border-right:2px solid #666;
                }
            }
        }
        li:last-child{
            a{
                border-right: none;
            }
        }
    }
}
</style>
