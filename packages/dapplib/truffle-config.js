require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind artwork grace cricket swift spider'; 
let testAccounts = [
"0xa9235a977a4468133f3291d417680de0dd9e2bdac7afc5e2c8751560af1bc74d",
"0xe66de1407fba82a60180a8df13c27d6acb4db6ce47a19eb01b0848831b2710df",
"0xed701319584ca29aef9b06c74cc302b954ea0c8e5dfeae844e95bfd8f3c88697",
"0xc1baf7768765e4b2cdd296f7f8e0c5480b060723bca08cbb7d633d123055a899",
"0x6ad8b92f57b21214a3e055c2bf31668124770e11da01a12474e196731f07860a",
"0xe5285a4e26dfae4e05882d8add561a42ec126f0342bc17a898310e86f7ef62e6",
"0x3eff78946994e5963900658516c7fef44df04ed396bf7afdd335caffaba00a4e",
"0xceb3310da3b97926e5f15e36a182c32e00a4aaccf466300413f8663e5b34aa0e",
"0x6c9c1d0fb2d51f46e7da94b78d9900a7bce3b9856fd8196b44c6aead9b535afd",
"0x026f9eee31e87d20074d07aa8a9938ed8ab888c643e5da2c266fcce4d08b0096"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
