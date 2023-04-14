import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { KernelStorage, KernelStorageInterface } from "../KernelStorage";
type KernelStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KernelStorage__factory extends ContractFactory {
    constructor(...args: KernelStorageConstructorParams);
    deploy(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<KernelStorage>;
    getDeployTransaction(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): KernelStorage;
    connect(signer: Signer): KernelStorage__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516107a13803806107a183398181016040528101906100329190610171565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060016100766100bd60201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061020b565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c6100f091906101d7565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061012c82610101565b9050919050565b600061013e82610121565b9050919050565b61014e81610133565b811461015957600080fd5b50565b60008151905061016b81610145565b92915050565b600060208284031215610187576101866100fc565b5b60006101958482850161015c565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101e28261019e565b91506101ed8361019e565b9250828203905081811115610205576102046101a8565b5b92915050565b60805161057561022c6000396000818160c9015261025d01526105756000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633659cfe614610051578063893d20e81461006d578063b0d691fe1461008b578063d087d288146100a9575b600080fd5b61006b60048036038101906100669190610334565b6100c7565b005b610075610228565b6040516100829190610370565b60405180910390f35b61009361025b565b6040516100a091906103ea565b60405180910390f35b6100b161027f565b6040516100be919061041e565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806101775750610124610292565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6101b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad906104bc565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181558173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25050565b6000610232610292565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610289610292565b60010154905090565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c6102c5919061050b565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610301826102d6565b9050919050565b610311816102f6565b811461031c57600080fd5b50565b60008135905061032e81610308565b92915050565b60006020828403121561034a576103496102d1565b5b60006103588482850161031f565b91505092915050565b61036a816102f6565b82525050565b60006020820190506103856000830184610361565b92915050565b6000819050919050565b60006103b06103ab6103a6846102d6565b61038b565b6102d6565b9050919050565b60006103c282610395565b9050919050565b60006103d4826103b7565b9050919050565b6103e4816103c9565b82525050565b60006020820190506103ff60008301846103db565b92915050565b6000819050919050565b61041881610405565b82525050565b6000602082019050610433600083018461040f565b92915050565b600082825260208201905092915050565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006104a6602583610439565b91506104b18261044a565b604082019050919050565b600060208201905081810360008301526104d581610499565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061051682610405565b915061052183610405565b9250828203905081811115610539576105386104dc565b5b9291505056fea264697066735822122049341b1087f5175662be9fe5d7eb3b02c58a4567574a6df73a219383b433461164736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "_entryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): KernelStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KernelStorage;
}
export {};
