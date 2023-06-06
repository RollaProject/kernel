// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./KernelFactory.sol";
import "src/validator/SessionKeyOwnedValidator.sol";

contract SessionKeyOwnedKernelFactory {
    KernelFactory public immutable singletonFactory;
    SessionKeyOwnedValidator public immutable validator;
    IEntryPoint public immutable entryPoint;

    constructor(KernelFactory _singletonFactory, SessionKeyOwnedValidator _validator, IEntryPoint _entryPoint) {
        singletonFactory = _singletonFactory;
        validator = _validator;
        entryPoint = _entryPoint;
    }

    function createAccount(address _owner, uint256 _index) external returns (EIP1967Proxy proxy) {
        bytes memory data = _getOwnerData(_owner);

        proxy = singletonFactory.createAccount(validator, data, _index);
    }

    function getAccountAddress(address _owner, uint256 _index) public view returns (address) {
        bytes memory data = _getOwnerData(_owner);
        return singletonFactory.getAccountAddress(validator, data, _index);
    }

    function _getOwnerData(address _owner) internal pure returns (bytes memory data) {
        // the owner is treated as a session key that lasts forever
        uint48 validUntil = type(uint48).max;
        uint48 validAfter = 0;

        data = abi.encodePacked(_owner, validUntil, validAfter);
    }
}
