<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
            <AppHeaderNav></AppHeaderNav>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <div class="cart">
                <a class="curr" href="#">
                    <i class="iconfont icon-cart"></i><em>2</em>
                </a>
            </div>
        </div>
    </header>

</template>

<script>
import AppHeaderNav from '../AppHeaderNav/index.vue'
export default {
    name: "AppHeader",
    components:{
        AppHeaderNav
    }
}
</script>

<style scoped lang="less">
.app-header {
    background: #fff;

    .container {
        display: flex;
        align-items: center;

        .logo {
            width: 200px;

            a {
                display: block;
                height: 132px;
                background-image: url("src/assets/image/hero.png");
                background-size: 100px 100px;
                background-repeat: no-repeat;
                background-position: center;
                text-indent: -9999px;
            }
        }

        .navs {
            display: flex;
            width: 900px;
            justify-content: space-around;
            padding-left: 120px;

            li {
                margin-right: 10px;
                width: 38px;

                a {
                    display: inline-block;
                    font-size: 16px;
                    line-height: 32px;
                }

                &:hover {
                    color: #1DC779;
                    border-bottom: 1px solid #1DC779;
                }
            }
        }

        .search {
            display: flex;
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;

            .icon-search {
                font-size: 18px;
                margin-left: 5px;
            }

            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
        }

        .cart {
            width: 50px;

            .curr {
                height: 32px;
                line-height: 32px;
                text-align: center;
                position: relative;
                display: block;

                .icon-cart {
                    font-size: 22px;
                }
                em {
                    font-style: normal;
                    position: absolute;
                    right: 0;
                    top: 0;
                    padding: 1px 7px;
                    line-height: 1;
                    background: #E26237FF;
                    color: #fff;
                    font-size: 12px;
                    border-radius: 10px;
                    font-family: Arial;
                }
            }
        }
    }
}
</style>
