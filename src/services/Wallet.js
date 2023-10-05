import { UALJs } from "ual-plainjs-renderer";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
// import { User } from 'universal-authenticator-library';

// // login functio
// var ual = null
/*global UAL:writable,loggedInUser:writable*/
/*eslint no-undef: "error"*/
export default class Wallet {
    constructor() {
        this.chain = {
            chainId: process.env.VUE_APP_CHAIN_ID,
            rpcEndpoints: [{
                protocol: "https",
                host: process.env.VUE_APP_CHAIN_URL,
                port: '443',
            }, ],
        };
        this.appName = process.env.VUE_APP_NAME;
        this.wax = new Wax([this.chain], { appName: process.env.VUE_APP_NAME });
        this.anchor = new Anchor([this.chain], { appName: process.env.VUE_APP_NAME });
        const myAppRoot = {
            containerElement: document.getElementById('ual-div')
        }
        UAL = new UALJs(this.loginCallBack, [this.chain], this.appName, [this.wax, this.anchor], myAppRoot);
        (async() => {
            await UAL.init();
        })()
    }
    setUal(myAppRoot) {
        UAL = new UALJs(this.loginCallBack, [this.chain], this.appName, [this.wax, this.anchor], myAppRoot);
    }
    loginCallBack(users) {
        loggedInUser = users[0];
        if (loggedInUser.session) {
            localStorage.setItem("session-authenticator", "Anchor")
        } else {
            localStorage.setItem("session-authenticator", "Wax")
        }
        localStorage.setItem('wax_user', loggedInUser.accountName)
        localStorage.setItem(UALJs.SESSION_ACCOUNT_NAME_KEY, loggedInUser.accountName)
            // window.location.href = '/map'
    }
    getSession() {
        // validate authentication
        const auth = UAL.getAuthenticators()
        UAL.attemptasync(auth.availableAuthenticators);
        return UAL
    }
    getLoginUser() {
        const activeUser = localStorage.getItem("wax_user");
        if (UAL) {
            if (localStorage.getItem("session-authenticator") == "Wax") {
                UAL.loginUser(this.wax)
            } else {
                UAL.loginUser(this.anchor, activeUser)
            }
            return UAL
        }
        return UAL
    }
    async sessionLogin() {
        const authenticators = UAL.getAuthenticators();
        const authenticatorName = localStorage.getItem(UALJs.SESSION_AUTHENTICATOR_KEY).toLowerCase();
        const sessionAuthenticator = authenticators.availableAuthenticators.find((authenticator) => authenticator.constructor.name.toLowerCase() == authenticatorName);
        const accountName = localStorage.getItem("wax_user") || undefined;
        await UAL.loginUser(sessionAuthenticator, accountName).then(res => console.log(res));
        return loggedInUser = sessionAuthenticator.users[0];
    }

}