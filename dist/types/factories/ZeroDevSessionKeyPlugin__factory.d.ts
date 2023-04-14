import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ZeroDevSessionKeyPlugin, ZeroDevSessionKeyPluginInterface } from "../ZeroDevSessionKeyPlugin";
type ZeroDevSessionKeyPluginConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ZeroDevSessionKeyPlugin__factory extends ContractFactory {
    constructor(...args: ZeroDevSessionKeyPluginConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ZeroDevSessionKeyPlugin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ZeroDevSessionKeyPlugin;
    connect(signer: Signer): ZeroDevSessionKeyPlugin__factory;
    static readonly bytecode = "0x6101406040523480156200001257600080fd5b506040518060400160405280601781526020017f5a65726f44657653657373696f6e4b6579506c7567696e0000000000000000008152506040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000e88184846200013760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050506200024b565b6000838383463060405160200162000154959493929190620001ee565b6040516020818303038152906040528051906020012090509392505050565b6000819050919050565b620001888162000173565b82525050565b6000819050919050565b620001a3816200018e565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001d682620001a9565b9050919050565b620001e881620001c9565b82525050565b600060a0820190506200020560008301886200017d565b6200021460208301876200017d565b6200022360408301866200017d565b62000232606083018562000198565b620002416080830184620001dd565b9695505050505050565b60805160a05160c05160e0516101005161012051611e016200029b6000396000610bac01526000610bee01526000610bcd01526000610b0201526000610b5801526000610b810152611e016000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806384f4fc6a14610051578063970aa9ad1461006d5780639e2045ce146100a0578063fa01dc06146100d0575b600080fd5b61006b60048036038101906100669190610fd2565b610100565b005b61008760048036038101906100829190611064565b6101a7565b604051610097949392919061110f565b60405180910390f35b6100ba60048036038101906100b591906111db565b6103ba565b6040516100c79190611265565b60405180910390f35b6100ea60048036038101906100e59190610fd2565b61040f565b6040516100f79190611265565b60405180910390f35b600161010a61046e565b60000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f17c796fb82086b3c9effaec517342e5ca9ed8fd78c339137ec082f748ab60cbe60405160405180910390a250565b3660003660008086866000906020926101c29392919061128a565b906101cd91906112dd565b60001c90506000878783906020856101e5919061136b565b926101f29392919061128a565b906101fd91906112dd565b60001c9050600088886020906040926102189392919061128a565b9061022391906112dd565b60001c905060008989839060208561023b919061136b565b926102489392919061128a565b9061025391906112dd565b60001c90508989602086610267919061136b565b9085602088610276919061136b565b610280919061136b565b9261028d9392919061128a565b9750975089896020846102a0919061136b565b90836020866102af919061136b565b6102b9919061136b565b926102c69392919061128a565b9550955081602080856102d991906113ce565b6102e391906113ff565b6040866102f0919061136b565b6102fa919061136b565b1461033a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103319061149e565b60405180910390fd5b898990506020808361034c91906113ce565b61035691906113ff565b604084610363919061136b565b61036d919061136b565b146103ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a49061150a565b60405180910390fd5b5050505092959194509250565b60003660003660006103ec888061014001906103d69190611539565b60619080926103e79392919061128a565b6101a7565b93509350935093506104028888868686866104ad565b9450505050509392505050565b600061041961046e565b60000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060017f6da8a1d7d4f224b5b2581a964c1890eb7e987638c691727e5a2a14ca24d03fd960001c6104a1919061159c565b60001b90508091505090565b60008085856000906014926104c49392919061128a565b906104cf91906115fc565b60601c90506104dc61046e565b60000160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561056a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610561906116a7565b60405180910390fd5b600086866014906034926105809392919061128a565b9061058b91906112dd565b90506000801b81036105b45784846021906062926105ab9392919061128a565b9450945061091a565b6000858560008181106105ca576105c96116c7565b5b9050013560f81c60f81b60f81c90506060600060148360ff16036106f55787876001906015926105fc9392919061128a565b60405161060a929190611726565b60405180910390209050878760569080926106279392919061128a565b810190610634919061187d565b9150878760019060159261064a9392919061128a565b604051610658929190611726565b60405180910390208c80606001906106709190611539565b6010906024926106829392919061128a565b604051610690929190611726565b6040518091039020146106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf90611912565b60405180910390fd5b87876015906056926106ec9392919061128a565b975097506108cc565b60188360ff16036108cb5787876001906019926107149392919061128a565b604051610722929190611726565b604051809103902090508787605a90809261073f9392919061128a565b81019061074c919061187d565b915087876001906015926107629392919061128a565b604051610770929190611726565b60405180910390208c80606001906107889190611539565b60109060249261079a9392919061128a565b6040516107a8929190611726565b6040518091039020146107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790611912565b60405180910390fd5b60008c80606001906108029190611539565b6044906064926108149392919061128a565b9061081f91906112dd565b60001c90503660008e80606001906108379190611539565b602485610844919061136b565b90602886610852919061136b565b9261085f9392919061128a565b915091508a8a6015906019926108779392919061128a565b604051610885929190611726565b6040518091039020828260405161089d929190611932565b6040518091039020146108af57600080fd5b8a8a601990605a926108c39392919061128a565b9a509a505050505b5b6108d7828583610a50565b610916576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090d90611997565b60405180910390fd5b5050505b60006109737ff0a98eef9608fd8bfe5833dfbc8b73ab86d0355db37a1f539565c5985ad1c2428a8c60200135604051602001610958939291906119d5565b60405160208183030381529060405280519060200120610a67565b905060006109ce87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505083610a8190919063ffffffff16565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3590611a58565b60405180910390fd5b60019450505050509695505050505050565b600082610a5d8584610aa8565b1490509392505050565b6000610a7a610a74610afe565b83610c18565b9050919050565b6000806000610a908585610c4b565b91509150610a9d81610c9c565b819250505092915050565b60008082905060005b8451811015610af357610ade82868381518110610ad157610ad06116c7565b5b6020026020010151610e02565b91508080610aeb90611a78565b915050610ab1565b508091505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610b7a57507f000000000000000000000000000000000000000000000000000000000000000046145b15610ba7577f00000000000000000000000000000000000000000000000000000000000000009050610c15565b610c127f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e2d565b90505b90565b60008282604051602001610c2d929190611b38565b60405160208183030381529060405280519060200120905092915050565b6000806041835103610c8c5760008060006020860151925060408601519150606086015160001a9050610c8087828585610e67565b94509450505050610c95565b60006002915091505b9250929050565b60006004811115610cb057610caf611b6f565b5b816004811115610cc357610cc2611b6f565b5b0315610dff5760016004811115610cdd57610cdc611b6f565b5b816004811115610cf057610cef611b6f565b5b03610d30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2790611bea565b60405180910390fd5b60026004811115610d4457610d43611b6f565b5b816004811115610d5757610d56611b6f565b5b03610d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8e90611c56565b60405180910390fd5b60036004811115610dab57610daa611b6f565b5b816004811115610dbe57610dbd611b6f565b5b03610dfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df590611ce8565b60405180910390fd5b5b50565b6000818310610e1a57610e158284610f49565b610e25565b610e248383610f49565b5b905092915050565b60008383834630604051602001610e48959493929190611d17565b6040516020818303038152906040528051906020012090509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610ea2576000600391509150610f40565b600060018787878760405160008152602001604052604051610ec79493929190611d86565b6020604051602081039080840390855afa158015610ee9573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f3757600060019250925050610f40565b80600092509250505b94509492505050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f9f82610f74565b9050919050565b610faf81610f94565b8114610fba57600080fd5b50565b600081359050610fcc81610fa6565b92915050565b600060208284031215610fe857610fe7610f6a565b5b6000610ff684828501610fbd565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261102457611023610fff565b5b8235905067ffffffffffffffff81111561104157611040611004565b5b60208301915083600182028301111561105d5761105c611009565b5b9250929050565b6000806020838503121561107b5761107a610f6a565b5b600083013567ffffffffffffffff81111561109957611098610f6f565b5b6110a58582860161100e565b92509250509250929050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006110ee83856110b1565b93506110fb8385846110c2565b611104836110d1565b840190509392505050565b6000604082019050818103600083015261112a8186886110e2565b9050818103602083015261113f8184866110e2565b905095945050505050565b600080fd5b600061016082840312156111665761116561114a565b5b81905092915050565b6000819050919050565b6111828161116f565b811461118d57600080fd5b50565b60008135905061119f81611179565b92915050565b6000819050919050565b6111b8816111a5565b81146111c357600080fd5b50565b6000813590506111d5816111af565b92915050565b6000806000606084860312156111f4576111f3610f6a565b5b600084013567ffffffffffffffff81111561121257611211610f6f565b5b61121e8682870161114f565b935050602061122f86828701611190565b9250506040611240868287016111c6565b9150509250925092565b60008115159050919050565b61125f8161124a565b82525050565b600060208201905061127a6000830184611256565b92915050565b600080fd5b600080fd5b6000808585111561129e5761129d611280565b5b838611156112af576112ae611285565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b60006112e983836112c5565b826112f4813561116f565b925060208210156113345761132f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026112d0565b831692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611376826111a5565b9150611381836111a5565b92508282019050808211156113995761139861133c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113d9826111a5565b91506113e4836111a5565b9250826113f4576113f361139f565b5b828204905092915050565b600061140a826111a5565b9150611415836111a5565b9250828202611423816111a5565b9150828204841483151761143a5761143961133c565b5b5092915050565b600082825260208201905092915050565b7f696e76616c696420646174610000000000000000000000000000000000000000600082015250565b6000611488600c83611441565b915061149382611452565b602082019050919050565b600060208201905081810360008301526114b78161147b565b9050919050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b60006114f4601183611441565b91506114ff826114be565b602082019050919050565b60006020820190508181036000830152611523816114e7565b9050919050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126115565761155561152a565b5b80840192508235915067ffffffffffffffff8211156115785761157761152f565b5b60208301925060018202360383131561159457611593611534565b5b509250929050565b60006115a7826111a5565b91506115b2836111a5565b92508282039050818111156115ca576115c961133c565b5b92915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600061160883836112c5565b8261161381356115d0565b925060148210156116535761164e7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000836014036008026112d0565b831692505b505092915050565b7f73657373696f6e206b6579207265766f6b656400000000000000000000000000600082015250565b6000611691601383611441565b915061169c8261165b565b602082019050919050565b600060208201905081810360008301526116c081611684565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b600061170d83856116f6565b935061171a8385846110c2565b82840190509392505050565b6000611733828486611701565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611777826110d1565b810181811067ffffffffffffffff821117156117965761179561173f565b5b80604052505050565b60006117a9610f60565b90506117b5828261176e565b919050565b600067ffffffffffffffff8211156117d5576117d461173f565b5b602082029050602081019050919050565b60006117f96117f4846117ba565b61179f565b9050808382526020820190506020840283018581111561181c5761181b611009565b5b835b8181101561184557806118318882611190565b84526020840193505060208101905061181e565b5050509392505050565b600082601f83011261186457611863610fff565b5b81356118748482602086016117e6565b91505092915050565b60006020828403121561189357611892610f6a565b5b600082013567ffffffffffffffff8111156118b1576118b0610f6f565b5b6118bd8482850161184f565b91505092915050565b7f696e76616c69642073657373696f6e206b657900000000000000000000000000600082015250565b60006118fc601383611441565b9150611907826118c6565b602082019050919050565b6000602082019050818103600083015261192b816118ef565b9050919050565b600061193f828486611701565b91508190509392505050565b7f696e76616c696465206d65726b6c6520726f6f74000000000000000000000000600082015250565b6000611981601483611441565b915061198c8261194b565b602082019050919050565b600060208201905081810360008301526119b081611974565b9050919050565b6119c08161116f565b82525050565b6119cf816111a5565b82525050565b60006060820190506119ea60008301866119b7565b6119f760208301856119b7565b611a0460408301846119c6565b949350505050565b7f6163636f756e743a20696e76616c6964207369676e6174757265000000000000600082015250565b6000611a42601a83611441565b9150611a4d82611a0c565b602082019050919050565b60006020820190508181036000830152611a7181611a35565b9050919050565b6000611a83826111a5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ab557611ab461133c565b5b600182019050919050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611b01600283611ac0565b9150611b0c82611acb565b600282019050919050565b6000819050919050565b611b32611b2d8261116f565b611b17565b82525050565b6000611b4382611af4565b9150611b4f8285611b21565b602082019150611b5f8284611b21565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611bd4601883611441565b9150611bdf82611b9e565b602082019050919050565b60006020820190508181036000830152611c0381611bc7565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611c40601f83611441565b9150611c4b82611c0a565b602082019050919050565b60006020820190508181036000830152611c6f81611c33565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611cd2602283611441565b9150611cdd82611c76565b604082019050919050565b60006020820190508181036000830152611d0181611cc5565b9050919050565b611d1181610f94565b82525050565b600060a082019050611d2c60008301886119b7565b611d3960208301876119b7565b611d4660408301866119b7565b611d5360608301856119c6565b611d606080830184611d08565b9695505050505050565b600060ff82169050919050565b611d8081611d6a565b82525050565b6000608082019050611d9b60008301876119b7565b611da86020830186611d77565b611db560408301856119b7565b611dc260608301846119b7565b9594505050505056fea26469706673582212205d61a7056fe6bfe6f67806ccdffcd495a3b016728c92d497f976c9d84670b56a64736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "key";
            readonly type: "address";
        }];
        readonly name: "SessionKeyRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_packed";
            readonly type: "bytes";
        }];
        readonly name: "parseDataAndSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_key";
            readonly type: "address";
        }];
        readonly name: "revokeSessionKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_key";
            readonly type: "address";
        }];
        readonly name: "revoked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "callGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validatePluginData";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "validated";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ZeroDevSessionKeyPluginInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ZeroDevSessionKeyPlugin;
}
export {};
