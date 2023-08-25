import {
    connect,
    Contract,
    keyStores,
    WalletConnection,
    Account,
    utils,
  } from "near-api-js";
  import getConfig from "./config";
  
  import { Buffer } from "buffer";
  if (typeof window !== "undefined") window.Buffer = Buffer;
  if (typeof global !== "undefined") global.Buffer = Buffer;
  
  const nearConfig = getConfig(process.env.NODE_NETWORK || "development");
  
  // Initialize contract & set global variables
  export async function initContract() {
    // Initialize connection to the NEAR testnet
    const near = await connect(
      // @ts-ignore
      Object.assign(
        { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
        nearConfig
      )
    );
    window.near = near;
    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    // @ts-ignore
    window.walletConnection = new WalletConnection(near);
  
    // Getting the Account ID. If still unauthorized, it's just empty string
    window.accountId = window.walletConnection.getAccountId();
  
    console.log(window.accountId);
  
    // Making Config Info Public
    window.configInfo = nearConfig;
  
    //making utils public
    window.utils = utils;
  
    // Creating new account object
    // @ts-ignore
    window.account = new Account(near, window.accountId);
    // Initializing our contract APIs by contract name and configuration
    window.contract = await new Contract(
      window.walletConnection.account(),
      nearConfig.contractName,
      {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: ["get_all_spaces"],
  
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ["nft_mit"],
      }
    );
  }
  
  export function logout() {
    window.walletConnection.signOut();
    // reload page
    window.location.replace(window.location.origin + window.location.pathname);
  }
  
  export function login() {
    // Allow the current app to make calls to the specified contract on the
    // user's behalf.
    // This works by creating a new access key for the user's account and storing
    // the private key in localStorage.
    window.walletConnection.requestSignIn(nearConfig.contractName);
  }