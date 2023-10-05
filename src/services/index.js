import axios from 'axios'
import * as waxjs from "@waxio/waxjs/dist";
import Link from 'anchor-link'
import { useToast } from 'vue-toastification'
import Wallet from "../services/Wallet";

const toast = useToast()
import {
    isWebUri
} from 'valid-url';
import moment from 'moment';
import BrowserTransport from 'anchor-link-browser-transport'
var keys = null
var laccount = null
    // const marketUrl = process.env.VUE_APP_API_MARKET_URL;
if (localStorage.getItem("ual-wax:autologin") != null) {
    let ualWax = JSON.parse(localStorage.getItem("ual-wax:autologin"))
    keys = ualWax ? ualWax.pubKeys : null
}
const getSession = async() => {
    const w = new Wallet();
    return await w.sessionLogin();
}

var chainUrl = process.env.VUE_APP_CHAIN_API;
var atomicAssetUrl = process.env.VUE_APP_API_ATOMICASSETS_URL;
var assetUrl = atomicAssetUrl+"assets";
var chainDomain = process.env.VUE_APP_CHAIN_FULL_URL;
const setRPCUrl = () => {
    var rpcName = localStorage.getItem("rpc");
    if (localStorage.getItem("rpc") != null) {
        if (rpcName == "EOS Rio") {
            chainDomain = `https://wax.eosrio.io`;
            chainUrl = `https://wax.eosrio.io/v1/chain`;
            atomicAssetUrl = `https://atomic.wax.eosrio.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "pink.gg") {
            chainDomain = `https://wax.pink.gg`;
            chainUrl = `https://wax.pink.gg/v1/chain`;
            atomicAssetUrl = `https://wax-aa.eosdac.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "greymass") {
            chainDomain = `https://wax.greymass.com`;
            chainUrl = `https://wax.greymass.com/v1/chain`;
            atomicAssetUrl = `https://wax.api.atomicassets.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "nation.wax") {
            chainDomain = `https://wax.api.eosnation.io`;
            chainUrl = `https://wax.api.eosnation.io/v1/chain`;
            atomicAssetUrl = `https://wax.api.atomicassets.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "eosriobrazil") {
            chainDomain = `https://wax.eosrio.io`;
            chainUrl = `https://wax.eosrio.io/v1/chain`;
            atomicAssetUrl = `https://atomic.wax.eosrio.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "eosdacserver") {
            chainDomain = `https://wax.eosdac.io`;
            chainUrl = `https://wax.eosdac.io/v1/chain`;
            atomicAssetUrl = `https://wax-aa.eosdac.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        } else if (rpcName == "test") {
            chainDomain = `https://testnet.wax.eosdetroit.io`;
            chainUrl = `https://testnet.wax.eosdetroit.io/v1/chain`;
            atomicAssetUrl = `https://test.wax.api.atomicassets.io/atomicassets/v1/`;
            assetUrl = atomicAssetUrl + "assets";
        }
    }
}
setRPCUrl();
const waxOptions = {
    rpcEndpoint: chainDomain,
    userAccount: localStorage.getItem("wax_user"),
    pubKeys: keys,
    tryAutoLogin: false
}
var wax = new waxjs.WaxJS(waxOptions);
const genericCall = async(params, callback) => {
    return await axios
        .get(
            `${assetUrl}?owner=${localStorage.getItem(
            "wax_user"
          )}&${params}`
        )
        .then(callback)
}
const openApiCall = async(params, callback) => {
    return await axios
        .get(
            `${assetUrl}?${params}`
        )
        .then((res) => res.data)
        .then(callback)
}
const getAssetById = async(id, callback) => {
    return await axios
        .get(
            `${assetUrl}/${id}`
        )
        .then(callback)
}
const calculatePrice = (price) => {
    return `${Number(price.average/100000000).toFixed(2)} ${price.token.token_symbol}`;
}
if (localStorage.getItem("wax_user") != null) {
    laccount = localStorage.getItem("wax_user")
}

const getImgUrl = (hash, isVideo) => {
    if (isWebUri(hash)) {
        return hash;
    }
    let url = 'http://ipfs.io/ipfs/' + hash;
    if (isVideo) {
        return url
    }
    return '//images.weserv.nl/?url=' + url + "&w=300&h=300";
}
const callApi = async(params, callback) => {
    return await axios
        .get(`${assetUrl}?owner=${localStorage.getItem('wax_user')}&${params}`)
        .then(callback)
}
const callApiBySchema = async(params, callback) => {
    return await axios
        .get(`${atomicAssetUrl}templates?page=1&limit=100&${params}`)
        .then(callback)
}
const link = new Link({
    transport: new BrowserTransport({
        requestStatus: false
    }),
    chains: [{
        chainId: process.env.VUE_APP_CHAIN_ID,
        nodeUrl: chainDomain,
    }],
})

const getTable = async(table, lowerBound = null, callBack, onError) => {
    return await wax.rpc.get_table_rows({
        scope: process.env.VUE_APP_CONTRACT,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        limit: 1000,
        table: table,
        lower_bound: lowerBound
    }).then(async(res) => {
        if (res.rows.length > 0) {
            return res.rows;
        }
        return null;
    }).then((res) => callBack(res)).catch(onError)
}
const getTableScope = async(table, lowerBound = null, upperBound = null, callBack, onError) => {
    const activeUser = localStorage.getItem("wax_user");
    return await wax.rpc.get_table_rows({
        scope: activeUser,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        limit: 100,
        table: table,
        lower_bound: lowerBound,
        upper_bound: upperBound
    }).then(async(res) => {
        if (res.rows.length > 0) {
            return res.rows;
        }
        return null;
    }).then((res) => callBack(res)).catch(onError)
}
const getItemUsage = async(assetid = null, callBack, onError) => {
    return await wax.rpc.get_table_rows({
        scope: process.env.VUE_APP_CONTRACT,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        limit: 1,
        table: "itemusage",
        lower_bound: assetid,
        upper_bound: assetid,
    }).then(async(res) => {
        if (res.rows.length > 0) {
            return res.rows;
        }
        return null;
    }).then((res) => callBack(res)).catch(onError)
}
const getPlantStatus = async(onSuccess) => {
    const activeUser = localStorage.getItem("wax_user");
    return await wax.rpc.get_table_rows({
        scope: process.env.VUE_APP_CONTRACT,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        limit: 100,
        table: "plantstatus",
        lower_bound: null
    }).then(async(res) => {
        var all = [];
        const row = res.rows.find(x => x.owner === activeUser)
        if (row) {
            all.push(row);
        }
        if (res.more === true) {
            await getPlantStatus(onSuccess, res.next_key);
        }
        return all;
    }).then(onSuccess);
}
const getAccount = async(callBack) => {
    laccount = localStorage.getItem("wax_user");
    return await axios
        .post(`${chainUrl}/get_account`, {
            account_name: laccount ? laccount : localStorage.getItem("wax_user"),
        }).then(callBack)
}
const historyApi = async(action, data, callBack) => {
    laccount = localStorage.getItem("wax_user");
    return await axios
        .post(`${process.env.VUE_APP_HISTORY_API}/${action}`, data).then(callBack)
}
const getBalance = async(code, symbol, callBack) => {
    return await axios
        .post(`${chainUrl}/get_currency_balance`, {
            account: localStorage.getItem("wax_user"),
            code: code,
            symbol: symbol,
        }).then(callBack)
}
const doSign = async(action, onSuccessCallback, onErrorCallback) => {
    await link.restoreSession(process.env.VUE_APP_NAME).then((session) => {
        session.transact({
            actions: Array.isArray(action) ? action : [action]
        }, {
            blocksBehind: 1,
            expireSeconds: 120,
        }).then(async(res) => {
            verifyTrans(res, onSuccessCallback);
        }).catch(onErrorCallback)
    }).catch(async(error) => {
        const identity = await link.login(process.env.VUE_APP_NAME)
        const { session } = identity
        session.transact({
            actions: Array.isArray(action) ? action : [action]
        }, {
            blocksBehind: 1,
            expireSeconds: 120,
        }).then(async(res) => {
            verifyTrans(res, onSuccessCallback);
        }).catch(onErrorCallback)
        return error;
    })
}
const verifyTrans = async(res, onSuccessCallback) => {
    let status = true;
    setTimeout(async() => {
        // while (status) {
        //     const trans = await historyApi("get_transaction", { traces: false, id: res.processed.id }, (r) => r.data);
        //     console.log(trans);
        //     if (Object.hasOwn(trans, 'id')) {
        //         status = false;
        //         onSuccessCallback(res);
        //     } else if (Object.hasOwn(trans, 'error') && trans.error.name == "tx_not_found") {
        //         status = true;
        //     } else {
        //         status = false;
        onSuccessCallback(res);
        //     }
        // }
        return status;
    }, 1000);
}
const signWithWax = async(action, onSuccessCallback, onErrorCallback) => {
    laccount = localStorage.getItem("wax_user");
    let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
    if (!isAutoLoginAvailable) {
        await wax.login();
    }
    try {
        await wax.api.transact(action, {
            blocksBehind: 3,
            expireSeconds: 120,
            broadcast: true,
            sign: true,
        }).then(async(res) => {
            verifyTrans(res, onSuccessCallback);
        }).catch(onErrorCallback)
    } catch (error) {
        return onErrorCallback(error)
    }
}
const isLogin = () => {
    // check local store and also expiry of session
    if (localStorage.getItem('wax_user')) {
        var sessionDate = localStorage.getItem("ual-session-expiration");
        var d1 = new Date();
        var d2 = new Date(sessionDate);
        return moment(d2).isAfter(moment(d1))
    } else {
        return false
    }
}
const errorFormat = (error) => {
    console.log(error, typeof error);
    if (typeof error == "string") {
        // toast.error(error);
        return error;
    }
    if (!error.error && error.message) {
        // toast.error(error.message);
        return error.message
    }
    if (error.details) {
        if (error.details) {
            // toast.error(error.error.details[0].message);
            return error.details[0].message
        }
        return error.error.what;
    } else {
        // toast.error("Transaction failed,try again.");
        return "Transaction failed,try again."
    }
}
const market = async(callBack, lowerBound = null) => {
    return await wax.rpc.get_table_rows({
        scope: process.env.VUE_APP_CONTRACT,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        lower_bound: lowerBound,
        limit: 1000,
        table: process.env.VUE_APP_TBL_MARKET
    }).then(async(res) => {
        const requests = res.rows.map(async(val, index) => {
            let nfts = await getByTempleteId(val.asset_t, (res) => res.data.data)
            res.rows[index].asset = nfts
            return val
        });
        if (res.more === true) {
            await market(callBack, res.next_key);
        }
        return Promise.all(requests).then(() => {
            return res.rows
        });
    }).then((res) => callBack(res))
}
const getByTempleteId = async(tmpId, callback) => {
    return axios
        .get(`${process.env.VUE_APP_API_TEMPLATE_URL}/weedborncoun/${tmpId}`)
        .then((res) => callback(res))
}
const claim = async(onSuccessCallback, onErrorCallback) => {
    laccount = localStorage.getItem("wax_user");
    try {
        const actionData = {
            account: process.env.VUE_APP_CONTRACT,
            name: 'claimreward',
            authorization: [{
                actor: laccount,
                permission: 'active',
            }],
            data: {
                account: laccount
            },
        }
        if (localStorage.getItem("session-authenticator") != "Wax") {
            await doSign(actionData, onSuccessCallback, onErrorCallback)
        } else {
            await signWithWax({ actions: [actionData] }, onSuccessCallback, onErrorCallback)
        }
    } catch (error) {
        onErrorCallback(error)
    }
}
const makeRequestParams = (searchTerm) => {
    let params = "&page=1&limit=100";
    if (searchTerm) {
        params += "&match=" + searchTerm;
    }
    return params;
}
const rpc = async(table, callBack, onError, limit = 100, lowerBound = null, upper_bound = null) => {
    // const loginUser = await getSession();
    return await wax.rpc.get_table_rows({
        scope: process.env.VUE_APP_CONTRACT,
        code: process.env.VUE_APP_CONTRACT,
        index_position: 1,
        json: true,
        limit: limit,
        table: table,
        upper_bound: upper_bound,
        lower_bound: lowerBound,
    }).then(async(res) => {
        if (res.rows.length > 0) {
            return res.rows;
        }
        return null;
    }).then((res) => callBack(res)).catch(onError);
}
const plant = async(data) => {
    laccount = localStorage.getItem("wax_user");
    // try {
    const actionData = [{
        account: 'atomicassets',
        name: 'transfer',
        authorization: [{
            actor: laccount,
            permission: 'active',
        }],
        data: data,
    }]
    if (localStorage.getItem("session-authenticator") != "Wax") {
        return await doSign(actionData, (res) => {
                if (res.processed) {
                    toast.success("Transaction successfull...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            },
            (error) => {
                showError(errorFormat(error));
            })
    } else {
        return await signWithWax({ actions: actionData }, (res) => {
                if (res.processed) {
                    toast.success("Transaction successfull...");
                    setTimeout(() => {
                        this.$router.go();
                    }, 2000);
                }
            },
            (error) => {
                showError(errorFormat(error));
            })
    }
}
const staketool = async(data) => {
    return await transact(
        "staketools",
        data,
        (res) => {
            if (res.processed) {
                toast.success("Transaction successfull...");
            }
        },
        (error) => {
            showError(errorFormat(error));
        }
    );
}
const transaction = async(actionName, dataParams, onSuccessCallback, onErrorCallback) => {
    laccount = localStorage.getItem("wax_user");
    try {
        const actionData = {
            account: process.env.VUE_APP_CONTRACT,
            name: actionName,
            authorization: [{
                actor: laccount,
                permission: 'active',
            }],
            data: dataParams,
        }
        if (localStorage.getItem("session-authenticator") != "Wax") {
            return await doSign(actionData, onSuccessCallback, onErrorCallback)
        } else {
            return await signWithWax({ actions: [actionData] }, onSuccessCallback, onErrorCallback)
        }
    } catch (err) {
        return onErrorCallback(err)
    }
}
const signTrans = async(dataParams, onSuccessCallback) => {
    laccount = localStorage.getItem("wax_user");
    try {
        const actionData = {
            account: dataParams.contract,
            name: dataParams.action,
            authorization: [{
                actor: laccount,
                permission: 'active',
            }],
            data: dataParams.data,
        }
        console.log(actionData)
        if (localStorage.getItem("session-authenticator") != "Wax") {
            return await doSign(actionData, onSuccessCallback, (error) => {
                showError(errorFormat(error));
            })
        } else {
            return await signWithWax({
                actions: [actionData]
            }, onSuccessCallback, (err) => {
                showError(errorFormat(err));
            })
        }
    } catch (err) {
        showError(errorFormat(err));
    }
}
const transact = async(actionName, dataParams, onSuccessCallback, onErrorCallback) => {
    laccount = localStorage.getItem("wax_user");
    const auth = localStorage.getItem("session-authenticator").toLowerCase();
    try {
        const actionData = {
            account: process.env.VUE_APP_CONTRACT,
            name: actionName,
            authorization: [{
                actor: laccount,
                permission: 'active',
            }],
            data: dataParams,
        }
        if (auth == "anchor") {
            return await doSign(actionData, onSuccessCallback, onErrorCallback)
        } else if (auth == "wax") {
            return await signWithWax({ actions: [actionData] }, onSuccessCallback, onErrorCallback)
        } else {
            const loginUser = await getSession();
            await loginUser.signTransaction({ actions: [actionData] }, { broadcast: true }).then((res) => {
                console.log(res);
                onSuccessCallback(res);
            });
        }
    } catch (err) {
        return onErrorCallback(err)
    }
}
const successMsg = (message) => {
    return toast.success(message);
}
const errorMsg = (error) => {
    return toast.error(errorFormat(error));
}
const showError = (error) => {
    return toast.error(errorFormat(error));
}
export default {
    errorMsg,
    errorFormat,
    claim,
    plant,
    staketool,
    doSign,
    isLogin,
    getItemUsage,
    genericCall,
    getAssetById,
    getAccount,
    calculatePrice,
    callApi,
    getTableScope,
    getTable,
    getPlantStatus,
    transaction,
    transact,
    signWithWax,
    makeRequestParams,
    historyApi,
    getSession,
    getBalance,
    rpc,
    market,
    getByTempleteId,
    verifyTrans,
    signTrans,
    successMsg,
    getImgUrl,
    openApiCall,
    callApiBySchema,
    chainUrl,
    assetUrl
}