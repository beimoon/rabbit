<template>
    <ul class="app-header-nav">
        <li class="home">
            <RouterLink to="/">首页</RouterLink>
        </li>

        <li v-for="item in list"
            :key="item.id"
            @mouseenter="show(item)"
            @mouseleave="hidden(item)"
        >
            <router-link :to="`/category/${item.id}`"   >{{ item.name }}
            </router-link>
            <div class="layer" :class="{open:item.open}">
                <ul>
                    <li v-for="sub in item.children" :key="sub.id">
                        <RouterLink to="/category" @click="hidden(item)">
                            <img :src="sub.picture" alt="">
                            <p>{{ sub.name }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </li>

    </ul>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: 'AppHeaderNav',
    setup() {
        const store = useStore()
        console.log(store)
        //一级类别open的属性管理
        const show = (item) => {
            store.commit('category/show', item)
            console.log(item.open)
        }
        const hidden = (item) => {
            store.commit('category/hidden', item)
        }
        //更新实例list
        const list = computed(() => {
            console.log(store.state.category.list[0])
            return store.state.category.list
        })
        return {
            list,
            show,
            hidden
        }
    }
}
</script>

<style scoped lang='less'>
@import "src/assets/styles/variable.less";
.app-header-nav {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    > li {
        margin-right: 40px;
        width: 38px;
        text-align: center;
        > a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;
        }
        &:hover {
            > a {
                color: @xtxColor;
                border-bottom: 1px solid @xtxColor;
            }
            //> .layer {
            //    height: 132px;
            //    opacity: 1;
            //}
        }
    }
}
.layer {
    &.open{
        height: 132px;
        opacity: 1;
    }
    width: 1240px;
    background-color: #fff;
    position: absolute;
    left: -200px;
    top: 56px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    box-shadow: 0 0 5px #ccc;
    transition: all .2s .1s;
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 132px;
        li {
            width: 110px;
            text-align: center;
            img {
                width: 60px;
                height: 60px;
            }
            p {
                padding-top: 10px;
            }
            &:hover {
                p {
                    color: @xtxColor;
                }
            }
        }
    }
}
</style>
