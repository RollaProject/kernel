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
exports.Kernel__factory = void 0;
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
        inputs: [],
        name: "InvalidNonce",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignatureLength",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "result",
                type: "bytes",
            },
        ],
        name: "QueryResult",
        type: "error",
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
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
            },
        ],
        name: "executeAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "_owner",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_plugin",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "queryPlugin",
        outputs: [],
        stateMutability: "nonpayable",
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
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x6101606040523480156200001257600080fd5b50604051620033a2380380620033a28339818101604052810190620000389190620002e2565b806040518060400160405280600681526020017f4b65726e656c00000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200010e818484620001e760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050508073ffffffffffffffffffffffffffffffffffffffff166101408173ffffffffffffffffffffffffffffffffffffffff168152505060016200019e6200022360201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000422565b60008383834630604051602001620002049594939291906200035b565b6040516020818303038152906040528051906020012090509392505050565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c620002589190620003e7565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002968262000269565b9050919050565b6000620002aa8262000289565b9050919050565b620002bc816200029d565b8114620002c857600080fd5b50565b600081519050620002dc81620002b1565b92915050565b600060208284031215620002fb57620002fa62000264565b5b60006200030b84828501620002cb565b91505092915050565b6000819050919050565b620003298162000314565b82525050565b6000819050919050565b62000344816200032f565b82525050565b620003558162000289565b82525050565b600060a0820190506200037260008301886200031e565b6200038160208301876200031e565b6200039060408301866200031e565b6200039f606083018562000339565b620003ae60808301846200034a565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003f4826200032f565b915062000401836200032f565b92508282039050818111156200041c576200041b620003b8565b5b92915050565b60805160a05160c05160e051610100516101205161014051612f02620004a060003960008181610532015281816106cb01528181610b3701528181610d1e01528181610e420152610efa01526000611713015260006117550152600061173401526000611669015260006116bf015260006116e80152612f026000f3fe6080604052600436106100ec5760003560e01c8063940d3c601161008a578063d087d28811610059578063d087d28814610313578063f23a6e611461033e578063f2fde38b1461037b578063f333df55146103a4576100f3565b8063940d3c6014610259578063b0d691fe14610282578063bc197c81146102ad578063c4d66de8146102ea576100f3565b80633659cfe6116100c65780633659cfe61461019d5780633a871cdd146101c657806354fd4d5014610203578063893d20e81461022e576100f3565b806306fdde03146100f8578063150b7a02146101235780631626ba7e14610160576100f3565b366100f357005b600080fd5b34801561010457600080fd5b5061010d6103cd565b60405161011a919061195e565b60405180910390f35b34801561012f57600080fd5b5061014a60048036038101906101459190611a8d565b610406565b6040516101579190611b50565b60405180910390f35b34801561016c57600080fd5b5061018760048036038101906101829190611cd1565b61041b565b6040516101949190611b50565b60405180910390f35b3480156101a957600080fd5b506101c460048036038101906101bf9190611d2d565b610530565b005b3480156101d257600080fd5b506101ed60048036038101906101e89190611d7f565b6106c7565b6040516101fa9190611dfd565b60405180910390f35b34801561020f57600080fd5b50610218610ac9565b604051610225919061195e565b60405180910390f35b34801561023a57600080fd5b50610243610b02565b6040516102509190611e27565b60405180910390f35b34801561026557600080fd5b50610280600480360381019061027b9190611e67565b610b35565b005b34801561028e57600080fd5b50610297610d1c565b6040516102a49190611f4e565b60405180910390f35b3480156102b957600080fd5b506102d460048036038101906102cf9190611fbf565b610d40565b6040516102e19190611b50565b60405180910390f35b3480156102f657600080fd5b50610311600480360381019061030c9190611d2d565b610d58565b005b34801561031f57600080fd5b50610328610e3e565b6040516103359190611dfd565b60405180910390f35b34801561034a57600080fd5b506103656004803603810190610360919061209b565b610ee2565b6040516103729190611b50565b60405180910390f35b34801561038757600080fd5b506103a2600480360381019061039d9190611d2d565b610ef8565b005b3480156103b057600080fd5b506103cb60048036038101906103c69190612135565b61106a565b005b6040518060400160405280600681526020017f4b65726e656c000000000000000000000000000000000000000000000000000081525081565b600063150b7a0260e01b905095945050505050565b60008061042661110a565b90506104328484611149565b73ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361049857631626ba7e60e01b91505061052a565b60006104a385611170565b905060006104b18286611149565b90508073ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361051c57631626ba7e60e01b935050505061052a565b63ffffffff60e01b93505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105e0575061058d61110a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061061657503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c90612207565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181558173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e90612273565b60405180910390fd5b60418480610140019061076a91906122a2565b9050036107825761077b84846111a0565b9050610a46565b60618480610140019061079591906122a2565b90501115610a13576000848061014001906107b091906122a2565b6000906014926107c29392919061230f565b906107cd919061238e565b60601c90506000858061014001906107e591906122a2565b601490601a926107f79392919061230f565b906108029190612419565b60d01c905060008680610140019061081a91906122a2565b601a9060209261082c9392919061230f565b906108379190612419565b60d01c905060008780610140019061084f91906122a2565b6020906061926108619392919061230f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090506000888061014001906108b991906122a2565b60619080926108ca9392919061230f565b8101906108d79190612478565b509050600061093a7f4584533bad8bbd8aa77024a548a56acb8d2807847381ce1b3364745ca396b2e3878787868051906020012060405160200161091f959493929190612520565b60405160208183030381529060405280519060200120611341565b905060006109488285611149565b90508073ffffffffffffffffffffffffffffffffffffffff1661096961110a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109b8576001975050505050505050610ac2565b60006109c6888d8d8d61135b565b90506000818060200190518101906109de91906125ab565b9050806109f75760019950505050505050505050610ac2565b610a0381158989611407565b9950505050505050505050610a45565b6040517f4be6321b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b6000821115610ac15760003373ffffffffffffffffffffffffffffffffffffffff1683604051610a7590612609565b60006040518083038185875af1925050503d8060008114610ab2576040519150601f19603f3d011682016040523d82523d6000602084013e610ab7565b606091505b5050905050610ac2565b5b9392505050565b6040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525081565b6000610b0c61110a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610be55750610b9261110a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610c24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1b90612690565b60405180910390fd5b60006060600180811115610c3b57610c3a6126b0565b5b836001811115610c4e57610c4d6126b0565b5b03610cae57610ca18786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611440565b8092508193505050610d06565b610cfd878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611476565b80925081935050505b81610d1357805160208201fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600063bc197c8160e01b905098975050505050505050565b6000610d6261110a565b9050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610df7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dee9061272b565b60405180910390fd5b818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335567e1a3060006040518363ffffffff1660e01b8152600401610e9c9291906127aa565b602060405180830381865afa158015610eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edd91906127e8565b905090565b600063f23a6e6160e01b90509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610fa85750610f5561110a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80610fde57503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101490612207565b60405180910390fd5b8061102661110a565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806110bb8585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611440565b91509150811561110257806040517fa52b21690000000000000000000000000000000000000000000000000000000081526004016110f9919061286a565b60405180910390fd5b805160208201fd5b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c61113d91906128bb565b60001b90508091505090565b600080600061115885856114ae565b91509150611165816114ff565b819250505092915050565b6000816040516020016111839190612967565b604051602081830303815290604052805190602001209050919050565b6000806111ab61110a565b905061120a83858061014001906111c291906122a2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611149565b73ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611266575061133b565b600061127184611170565b905060006112d2828780610140019061128a91906122a2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611149565b90508073ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611337576001935050505061133b565b5050505b92915050565b600061135461134e611665565b8361177f565b9050919050565b60606000639e2045ce60e01b85858560405160240161137c93929190612bed565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000806113e88884611440565b91509150816113f957805160208201fd5b809350505050949350505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b8561142f576000611432565b60015b60ff16171790509392505050565b60006060600080845160208601875af491503d604051602082018101604052818152816000602083013e80925050509250929050565b6000606060008084516020860187895af191503d604051602082018101604052818152816000602083013e8092505050935093915050565b60008060418351036114ef5760008060006020860151925060408601519150606086015160001a90506114e3878285856117b2565b945094505050506114f8565b60006002915091505b9250929050565b60006004811115611513576115126126b0565b5b816004811115611526576115256126b0565b5b031561166257600160048111156115405761153f6126b0565b5b816004811115611553576115526126b0565b5b03611593576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158a90612c77565b60405180910390fd5b600260048111156115a7576115a66126b0565b5b8160048111156115ba576115b96126b0565b5b036115fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f190612ce3565b60405180910390fd5b6003600481111561160e5761160d6126b0565b5b816004811115611621576116206126b0565b5b03611661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165890612d75565b60405180910390fd5b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156116e157507f000000000000000000000000000000000000000000000000000000000000000046145b1561170e577f0000000000000000000000000000000000000000000000000000000000000000905061177c565b6117797f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611894565b90505b90565b60008282604051602001611794929190612de1565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156117ed57600060039150915061188b565b6000600187878787604051600081526020016040526040516118129493929190612e34565b6020604051602081039080840390855afa158015611834573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118825760006001925092505061188b565b80600092509250505b94509492505050565b600083838346306040516020016118af959493929190612e79565b6040516020818303038152906040528051906020012090509392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119085780820151818401526020810190506118ed565b60008484015250505050565b6000601f19601f8301169050919050565b6000611930826118ce565b61193a81856118d9565b935061194a8185602086016118ea565b61195381611914565b840191505092915050565b600060208201905081810360008301526119788184611925565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119bf82611994565b9050919050565b6119cf816119b4565b81146119da57600080fd5b50565b6000813590506119ec816119c6565b92915050565b6000819050919050565b611a05816119f2565b8114611a1057600080fd5b50565b600081359050611a22816119fc565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611a4d57611a4c611a28565b5b8235905067ffffffffffffffff811115611a6a57611a69611a2d565b5b602083019150836001820283011115611a8657611a85611a32565b5b9250929050565b600080600080600060808688031215611aa957611aa861198a565b5b6000611ab7888289016119dd565b9550506020611ac8888289016119dd565b9450506040611ad988828901611a13565b935050606086013567ffffffffffffffff811115611afa57611af961198f565b5b611b0688828901611a37565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b4a81611b15565b82525050565b6000602082019050611b656000830184611b41565b92915050565b6000819050919050565b611b7e81611b6b565b8114611b8957600080fd5b50565b600081359050611b9b81611b75565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bde82611914565b810181811067ffffffffffffffff82111715611bfd57611bfc611ba6565b5b80604052505050565b6000611c10611980565b9050611c1c8282611bd5565b919050565b600067ffffffffffffffff821115611c3c57611c3b611ba6565b5b611c4582611914565b9050602081019050919050565b82818337600083830152505050565b6000611c74611c6f84611c21565b611c06565b905082815260208101848484011115611c9057611c8f611ba1565b5b611c9b848285611c52565b509392505050565b600082601f830112611cb857611cb7611a28565b5b8135611cc8848260208601611c61565b91505092915050565b60008060408385031215611ce857611ce761198a565b5b6000611cf685828601611b8c565b925050602083013567ffffffffffffffff811115611d1757611d1661198f565b5b611d2385828601611ca3565b9150509250929050565b600060208284031215611d4357611d4261198a565b5b6000611d51848285016119dd565b91505092915050565b600080fd5b60006101608284031215611d7657611d75611d5a565b5b81905092915050565b600080600060608486031215611d9857611d9761198a565b5b600084013567ffffffffffffffff811115611db657611db561198f565b5b611dc286828701611d5f565b9350506020611dd386828701611b8c565b9250506040611de486828701611a13565b9150509250925092565b611df7816119f2565b82525050565b6000602082019050611e126000830184611dee565b92915050565b611e21816119b4565b82525050565b6000602082019050611e3c6000830184611e18565b92915050565b60028110611e4f57600080fd5b50565b600081359050611e6181611e42565b92915050565b600080600080600060808688031215611e8357611e8261198a565b5b6000611e91888289016119dd565b9550506020611ea288828901611a13565b945050604086013567ffffffffffffffff811115611ec357611ec261198f565b5b611ecf88828901611a37565b93509350506060611ee288828901611e52565b9150509295509295909350565b6000819050919050565b6000611f14611f0f611f0a84611994565b611eef565b611994565b9050919050565b6000611f2682611ef9565b9050919050565b6000611f3882611f1b565b9050919050565b611f4881611f2d565b82525050565b6000602082019050611f636000830184611f3f565b92915050565b60008083601f840112611f7f57611f7e611a28565b5b8235905067ffffffffffffffff811115611f9c57611f9b611a2d565b5b602083019150836020820283011115611fb857611fb7611a32565b5b9250929050565b60008060008060008060008060a0898b031215611fdf57611fde61198a565b5b6000611fed8b828c016119dd565b9850506020611ffe8b828c016119dd565b975050604089013567ffffffffffffffff81111561201f5761201e61198f565b5b61202b8b828c01611f69565b9650965050606089013567ffffffffffffffff81111561204e5761204d61198f565b5b61205a8b828c01611f69565b9450945050608089013567ffffffffffffffff81111561207d5761207c61198f565b5b6120898b828c01611a37565b92509250509295985092959890939650565b60008060008060008060a087890312156120b8576120b761198a565b5b60006120c689828a016119dd565b96505060206120d789828a016119dd565b95505060406120e889828a01611a13565b94505060606120f989828a01611a13565b935050608087013567ffffffffffffffff81111561211a5761211961198f565b5b61212689828a01611a37565b92509250509295509295509295565b60008060006040848603121561214e5761214d61198a565b5b600061215c868287016119dd565b935050602084013567ffffffffffffffff81111561217d5761217c61198f565b5b61218986828701611a37565b92509250509250925092565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572206f722073656c6600000000000000000000000000000000000000602082015250565b60006121f1602d836118d9565b91506121fc82612195565b604082019050919050565b60006020820190508181036000830152612220816121e4565b9050919050565b7f6163636f756e743a206e6f742066726f6d20656e747279506f696e7400000000600082015250565b600061225d601c836118d9565b915061226882612227565b602082019050919050565b6000602082019050818103600083015261228c81612250565b9050919050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126122bf576122be612293565b5b80840192508235915067ffffffffffffffff8211156122e1576122e0612298565b5b6020830192506001820236038313156122fd576122fc61229d565b5b509250929050565b600080fd5b600080fd5b6000808585111561232357612322612305565b5b838611156123345761233361230a565b5b6001850283019150848603905094509492505050565b600082905092915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600082821b905092915050565b600061239a838361234a565b826123a58135612355565b925060148210156123e5576123e07fffffffffffffffffffffffffffffffffffffffff00000000000000000000000083601403600802612381565b831692505b505092915050565b60007fffffffffffff000000000000000000000000000000000000000000000000000082169050919050565b6000612425838361234a565b8261243081356123ed565b925060068210156124705761246b7fffffffffffff000000000000000000000000000000000000000000000000000083600603600802612381565b831692505b505092915050565b6000806040838503121561248f5761248e61198a565b5b600083013567ffffffffffffffff8111156124ad576124ac61198f565b5b6124b985828601611ca3565b925050602083013567ffffffffffffffff8111156124da576124d961198f565b5b6124e685828601611ca3565b9150509250929050565b6124f981611b6b565b82525050565b600065ffffffffffff82169050919050565b61251a816124ff565b82525050565b600060a08201905061253560008301886124f0565b6125426020830187611e18565b61254f6040830186612511565b61255c6060830185612511565b61256960808301846124f0565b9695505050505050565b60008115159050919050565b61258881612573565b811461259357600080fd5b50565b6000815190506125a58161257f565b92915050565b6000602082840312156125c1576125c061198a565b5b60006125cf84828501612596565b91505092915050565b600081905092915050565b50565b60006125f36000836125d8565b91506125fe826125e3565b600082019050919050565b6000612614826125e6565b9150819050919050565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061267a6025836118d9565b91506126858261261e565b604082019050919050565b600060208201905081810360008301526126a98161266d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f6163636f756e743a20616c726561647920696e697469616c697a656400000000600082015250565b6000612715601c836118d9565b9150612720826126df565b602082019050919050565b6000602082019050818103600083015261274481612708565b9050919050565b6000819050919050565b600077ffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600061279461278f61278a8461274b565b611eef565b612755565b9050919050565b6127a481612779565b82525050565b60006040820190506127bf6000830185611e18565b6127cc602083018461279b565b9392505050565b6000815190506127e2816119fc565b92915050565b6000602082840312156127fe576127fd61198a565b5b600061280c848285016127d3565b91505092915050565b600081519050919050565b600082825260208201905092915050565b600061283c82612815565b6128468185612820565b93506128568185602086016118ea565b61285f81611914565b840191505092915050565b600060208201905081810360008301526128848184612831565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128c6826119f2565b91506128d1836119f2565b92508282039050818111156128e9576128e861288c565b5b92915050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612930601c836128ef565b915061293b826128fa565b601c82019050919050565b6000819050919050565b61296161295c82611b6b565b612946565b82525050565b600061297282612923565b915061297e8284612950565b60208201915081905092915050565b600061299c60208401846119dd565b905092915050565b6129ad816119b4565b82525050565b60006129c26020840184611a13565b905092915050565b6129d3816119f2565b82525050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112612a0557612a046129e3565b5b83810192508235915060208301925067ffffffffffffffff821115612a2d57612a2c6129d9565b5b600182023603831315612a4357612a426129de565b5b509250929050565b600082825260208201905092915050565b6000612a688385612a4b565b9350612a75838584611c52565b612a7e83611914565b840190509392505050565b60006101608301612a9d600084018461298d565b612aaa60008601826129a4565b50612ab860208401846129b3565b612ac560208601826129ca565b50612ad360408401846129e8565b8583036040870152612ae6838284612a5c565b92505050612af760608401846129e8565b8583036060870152612b0a838284612a5c565b92505050612b1b60808401846129b3565b612b2860808601826129ca565b50612b3660a08401846129b3565b612b4360a08601826129ca565b50612b5160c08401846129b3565b612b5e60c08601826129ca565b50612b6c60e08401846129b3565b612b7960e08601826129ca565b50612b886101008401846129b3565b612b966101008601826129ca565b50612ba56101208401846129e8565b858303610120870152612bb9838284612a5c565b92505050612bcb6101408401846129e8565b858303610140870152612bdf838284612a5c565b925050508091505092915050565b60006060820190508181036000830152612c078186612a89565b9050612c1660208301856124f0565b612c236040830184611dee565b949350505050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000612c616018836118d9565b9150612c6c82612c2b565b602082019050919050565b60006020820190508181036000830152612c9081612c54565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000612ccd601f836118d9565b9150612cd882612c97565b602082019050919050565b60006020820190508181036000830152612cfc81612cc0565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612d5f6022836118d9565b9150612d6a82612d03565b604082019050919050565b60006020820190508181036000830152612d8e81612d52565b9050919050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000612dcb6002836128ef565b9150612dd682612d95565b600282019050919050565b6000612dec82612dbe565b9150612df88285612950565b602082019150612e088284612950565b6020820191508190509392505050565b600060ff82169050919050565b612e2e81612e18565b82525050565b6000608082019050612e4960008301876124f0565b612e566020830186612e25565b612e6360408301856124f0565b612e7060608301846124f0565b95945050505050565b600060a082019050612e8e60008301886124f0565b612e9b60208301876124f0565b612ea860408301866124f0565b612eb56060830185611dee565b612ec26080830184611e18565b969550505050505056fea26469706673582212207ca1a9a98f1fe1b5080a3a8bd99547a1f6530573ce1d73150a48a293f6ed399f64736f6c63430008120033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Kernel__factory = exports.Kernel__factory = /** @class */ (function (_super) {
    __extends(Kernel__factory, _super);
    function Kernel__factory() {
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
    Kernel__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Kernel__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Kernel__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Kernel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Kernel__factory.bytecode = _bytecode;
    Kernel__factory.abi = _abi;
    return Kernel__factory;
}(ethers_1.ContractFactory));
