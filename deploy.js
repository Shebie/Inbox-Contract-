const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const {interface, bytecode} = require('./compile.js');
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const provider = new HDWalletProvider(
    'boil lend output can hat certain use capable veteran pyramid tag unfold',
    'https://sepolia.infura.io/v3/c1c26982b5d246759a060e98dc0dc718'
);

const web3 = new Web3(provider);

const deploy  = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('attempting from accounts', accounts[0]);
   const result =  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there']})
    .send({gas: '1000000', from: accounts[0]});
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();