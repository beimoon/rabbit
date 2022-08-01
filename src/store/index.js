//创建仓库
import { createStore } from 'vuex'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
        modules: {
        user,
        cart,
        category
        },
        plugins: [
                createPersistedstate({
                        key: 'rebbit-client-pc-store',
                        paths:['user','cart']
                })
        ]
})