import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'p5-ui/dist/style.css'
import P5UI from 'p5-ui'
import{Button,Cell,CellGroup,Grid, GridItem} from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios=axios;
app.use(P5UI).use(Button).use(Cell).use(CellGroup).use(Grid).use(GridItem);
app.use(router)
app.mount('#app')
// import {P5Button, P5Switch} from 'p5-ui';
// app.use(P5Button.name,P5Switch,P5Button,P5Switch,)

