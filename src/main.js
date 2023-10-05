import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import Toast, {
  POSITION,
  TYPE
} from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { createPinia } from "pinia";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const pinia = createPinia();
import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth';



const options = {
  position: POSITION.BOTTOM_RIGHT,
  toastDefaults: {
    [TYPE.ERROR]: {
      timeout: false,
      hideProgressBar: true,
    },
    [TYPE.INFO]: {
      timeout: false,
      hideProgressBar: true,
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      hideProgressBar: true,
    },
  },
};
const app = createApp(App);
app.use(Toast, options).use(pinia).use(router).use(createWeb3Auth({
  // enableCustomProvider: true,
  projectId: '3c5c8069ff37304cc62e07ae8cb592a8',
  chains: [
    Chains.bsc,
    Chains.mainnet,
    Chains.polygon
  ]
})).mount('#app');