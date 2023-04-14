"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KernelStorage__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b5060405162000b1038038062000b10833981810160405281019062000037919062000184565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060016200007d620000c560201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200022a565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c620000fa9190620001ef565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000138826200010b565b9050919050565b60006200014c826200012b565b9050919050565b6200015e816200013f565b81146200016a57600080fd5b50565b6000815190506200017e8162000153565b92915050565b6000602082840312156200019d576200019c62000106565b5b6000620001ad848285016200016d565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001fc82620001b6565b91506200020983620001b6565b9250828203905081811115620002245762000223620001c0565b5b92915050565b6080516108b66200025a6000396000818160f0015281816102ba015281816102e0015261038201526108b66000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c578063893d20e814610078578063b0d691fe14610096578063d087d288146100b4578063f2fde38b146100d2575b600080fd5b61007660048036038101906100719190610594565b6100ee565b005b610080610285565b60405161008d91906105d0565b60405180910390f35b61009e6102b8565b6040516100ab919061064a565b60405180910390f35b6100bc6102dc565b6040516100c9919061067e565b60405180910390f35b6100ec60048036038101906100e79190610594565b610380565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061019e575061014b6104f2565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806101d457503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020a9061071c565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181558173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25050565b600061028f6104f2565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335567e1a3060006040518363ffffffff1660e01b815260040161033a92919061079b565b602060405180830381865afa158015610357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037b91906107f0565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061043057506103dd6104f2565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061046657503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049c9061071c565b60405180910390fd5b806104ae6104f2565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c610525919061084c565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061056182610536565b9050919050565b61057181610556565b811461057c57600080fd5b50565b60008135905061058e81610568565b92915050565b6000602082840312156105aa576105a9610531565b5b60006105b88482850161057f565b91505092915050565b6105ca81610556565b82525050565b60006020820190506105e560008301846105c1565b92915050565b6000819050919050565b600061061061060b61060684610536565b6105eb565b610536565b9050919050565b6000610622826105f5565b9050919050565b600061063482610617565b9050919050565b61064481610629565b82525050565b600060208201905061065f600083018461063b565b92915050565b6000819050919050565b61067881610665565b82525050565b6000602082019050610693600083018461066f565b92915050565b600082825260208201905092915050565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572206f722073656c6600000000000000000000000000000000000000602082015250565b6000610706602d83610699565b9150610711826106aa565b604082019050919050565b60006020820190508181036000830152610735816106f9565b9050919050565b6000819050919050565b600077ffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600061078561078061077b8461073c565b6105eb565b610746565b9050919050565b6107958161076a565b82525050565b60006040820190506107b060008301856105c1565b6107bd602083018461078c565b9392505050565b6107cd81610665565b81146107d857600080fd5b50565b6000815190506107ea816107c4565b92915050565b60006020828403121561080657610805610531565b5b6000610814848285016107db565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061085782610665565b915061086283610665565b925082820390508181111561087a5761087961081d565b5b9291505056fea2646970667358221220db1c7564f0d8743050a85c92e81057bea93e0c80814576d7a68f2cc35ea8337564736f6c63430008120033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var KernelStorage__factory = exports.KernelStorage__factory = /** @class */ (function (_super) {
    __extends(KernelStorage__factory, _super);
    function KernelStorage__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    KernelStorage__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    KernelStorage__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    KernelStorage__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    KernelStorage__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    KernelStorage__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    KernelStorage__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    KernelStorage__factory.bytecode = _bytecode;
    KernelStorage__factory.abi = _abi;
    return KernelStorage__factory;
}(ethers_1.ContractFactory));
