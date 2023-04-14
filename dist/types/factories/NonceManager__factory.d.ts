import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NonceManager, NonceManagerInterface } from "../NonceManager";
type NonceManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonceManager__factory extends ContractFactory {
    constructor(...args: NonceManagerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NonceManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NonceManager;
    connect(signer: Signer): NonceManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610432806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd28e3b146100465780631b2e01b81461006257806335567e1a14610092575b600080fd5b610060600480360381019061005b9190610286565b6100c2565b005b61007c60048036038101906100779190610311565b61015e565b604051610089919061036a565b60405180910390f35b6100ac60048036038101906100a79190610311565b610183565b6040516100b9919061036a565b60405180910390f35b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008277ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610156906103b4565b919050555050565b6000602052816000526040600020602052806000526040600020600091509150505481565b600060408277ffffffffffffffffffffffffffffffffffffffffffffffff16901b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008477ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205417905092915050565b600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61026381610236565b811461026e57600080fd5b50565b6000813590506102808161025a565b92915050565b60006020828403121561029c5761029b610231565b5b60006102aa84828501610271565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102de826102b3565b9050919050565b6102ee816102d3565b81146102f957600080fd5b50565b60008135905061030b816102e5565b92915050565b6000806040838503121561032857610327610231565b5b6000610336858286016102fc565b925050602061034785828601610271565b9150509250929050565b6000819050919050565b61036481610351565b82525050565b600060208201905061037f600083018461035b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103bf82610351565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036103f1576103f0610385565b5b60018201905091905056fea2646970667358221220834236a8a750314be3c5751b4606fdae1d48ca9a9bb849eb794b583899041c1d64736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint192";
            readonly name: "key";
            readonly type: "uint192";
        }];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint192";
            readonly name: "key";
            readonly type: "uint192";
        }];
        readonly name: "incrementNonce";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint192";
            readonly name: "";
            readonly type: "uint192";
        }];
        readonly name: "nonceSequenceNumber";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): NonceManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonceManager;
}
export {};
