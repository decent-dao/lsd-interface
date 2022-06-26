/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  SuperTokenFactory,
  SuperTokenFactoryInterface,
} from "../../../../../../@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperTokenFactory.sol/SuperTokenFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract SuperTokenFactoryHelper",
        name: "helper",
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
        indexed: false,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "CustomSuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "SuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "tokenLogic",
        type: "address",
      },
    ],
    name: "SuperTokenLogicCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20WithTokenInfo",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "underlyingDecimals",
        type: "uint8",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
    ],
    name: "createSuperTokenLogic",
    outputs: [
      {
        internalType: "address",
        name: "logic",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHost",
    outputs: [
      {
        internalType: "address",
        name: "host",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSuperTokenLogic",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "customSuperTokenProxy",
        type: "address",
      },
    ],
    name: "initializeCustomSuperToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516113eb3803806113eb83398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a05161131a6100d160003960006102dd01526000818160a5015281816102200152818161047e01526109c5015261131a6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806352d1902d1161006657806352d1902d146101255780638129fc1c146101535780639470a5b21461015b578063a6d0c53414610172578063d412d3441461018557600080fd5b806320bc4425146100a3578063431f1481146100e257806346951954146100f55780634dcc4d791461010a57806350d75d251461011d575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b6100c56100f0366004610ba4565b610198565b610108610103366004610c37565b610215565b005b6100c5610118366004610c37565b6102bb565b6100c5610352565b6040517fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b62081526020016100d9565b610108610381565b6000546201000090046001600160a01b03166100c5565b6100c5610180366004610c6a565b6103f6565b610108610193366004610c37565b6106d6565b600061020a87886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102009190610d10565b88888888886103f6565b979650505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102a75760405162461bcd60e51b815260206004820152602c60248201527f5375706572546f6b656e466163746f72793a206f6e6c7920686f73742063616e60448201526b2075706461746520636f646560a01b60648201526084015b60405180910390fd5b6102b081610774565b6102b86109ae565b50565b6040516313db266360e31b81526001600160a01b0382811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690639ed93318906024016020604051808303816000875af1158015610328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c9190610d2d565b92915050565b600061037c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600061038d6001610a90565b905080156103a5576000805461ff0019166101001790555b6103ad6109ae565b80156102b8576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b60006001600160a01b03881661044e5760405162461bcd60e51b815260206004820152601f60248201527f5375706572546f6b656e466163746f72793a207a65726f206164647265737300604482015260640161029e565b600086600281111561046257610462610d4a565b036104f857604051634dcc4d7960e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201523090634dcc4d79906024016020604051808303816000875af11580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190610d2d565b9050610630565b600186600281111561050c5761050c610d4a565b036105ac57600060405161051f90610b1d565b604051809103906000f08015801561053b573d6000803e3d6000fd5b50600054604051634a0687ef60e01b81526001600160a01b036201000090920482166004820152919250821690634a0687ef90602401600060405180830381600087803b15801561058b57600080fd5b505af115801561059f573d6000803e3d6000fd5b5050505080915050610630565b60006040516105ba90610b2a565b604051809103906000f0801580156105d6573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b509293505050505b6040516285fc1360e71b81526001600160a01b038216906342fe098090610665908b908b908a908a908a908a90600401610d89565b600060405180830381600087803b15801561067f57600080fd5b505af1158015610693573d6000803e3d6000fd5b50506040516001600160a01b03841692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2979650505050505050565b600054604051634a0687ef60e01b81526001600160a01b0362010000909204821660048201528291821690634a0687ef90602401600060405180830381600087803b15801561072457600080fd5b505af1158015610738573d6000803e3d6000fd5b50506040516001600160a01b03851692507f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a59150600090a25050565b600061079e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036107f45760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604482015260640161029e565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610832573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108569190610dd7565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620146108d05760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b606482015260840161029e565b6001600160a01b03811630036109285760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f7000000000000000604482015260640161029e565b610950817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620604080519182526001600160a01b0384166020830152016103eb565b604051634dcc4d7960e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201523090634dcc4d79906024016020604051808303816000875af1158015610a14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a389190610d2d565b6000805462010000600160b01b031916620100006001600160a01b03938416810291909117808355604051919004909216917fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b8740297839190a2565b60008054610100900460ff1615610ad7578160ff166001148015610ab35750303b155b610acf5760405162461bcd60e51b815260040161029e90610df0565b506000919050565b60005460ff808416911610610afe5760405162461bcd60e51b815260040161029e90610df0565b506000805460ff191660ff92909216919091179055600190565b919050565b61024a80610e3f83390190565b61025c8061108983390190565b6001600160a01b03811681146102b857600080fd5b803560038110610b1857600080fd5b60008083601f840112610b6d57600080fd5b50813567ffffffffffffffff811115610b8557600080fd5b602083019150836020828501011115610b9d57600080fd5b9250929050565b60008060008060008060808789031215610bbd57600080fd5b8635610bc881610b37565b9550610bd660208801610b4c565b9450604087013567ffffffffffffffff80821115610bf357600080fd5b610bff8a838b01610b5b565b90965094506060890135915080821115610c1857600080fd5b50610c2589828a01610b5b565b979a9699509497509295939492505050565b600060208284031215610c4957600080fd5b8135610c5481610b37565b9392505050565b60ff811681146102b857600080fd5b600080600080600080600060a0888a031215610c8557600080fd5b8735610c9081610b37565b96506020880135610ca081610c5b565b9550610cae60408901610b4c565b9450606088013567ffffffffffffffff80821115610ccb57600080fd5b610cd78b838c01610b5b565b909650945060808a0135915080821115610cf057600080fd5b50610cfd8a828b01610b5b565b989b979a50959850939692959293505050565b600060208284031215610d2257600080fd5b8151610c5481610c5b565b600060208284031215610d3f57600080fd5b8151610c5481610b37565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815260ff86166020820152608060408201819052600090610db79083018688610d60565b8281036060840152610dca818587610d60565b9998505050505050505050565b600060208284031215610de957600080fd5b5051919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fe608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122062f5acbf761dafe16ca2da224e9ca3e61a5a42b4a29d02084dd7d2ae797bf46464736f6c634300080e0033608060405234801561001057600080fd5b5061023c806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100f9565b61019c565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100d35760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015260640160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b038116610134576101346101c0565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610172573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019691906101d6565b91505090565b3660008037600080366000845af43d6000803e8080156101bb573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101e857600080fd5b81516001600160a01b03811681146101ff57600080fd5b939250505056fea2646970667358221220738733eac8fb43985aa04c1d81dcb3d87cc55667ebbefe2d808b5bbf1a79329764736f6c634300080e0033a2646970667358221220c2cb1d253a57449a53a0fd3ad785994a05b5d47b8773e60c09d4b0bb6f83b22764736f6c634300080e0033";

type SuperTokenFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuperTokenFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SuperTokenFactory__factory extends ContractFactory {
  constructor(...args: SuperTokenFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: PromiseOrValue<string>,
    helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SuperTokenFactory> {
    return super.deploy(
      host,
      helper,
      overrides || {}
    ) as Promise<SuperTokenFactory>;
  }
  override getDeployTransaction(
    host: PromiseOrValue<string>,
    helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(host, helper, overrides || {});
  }
  override attach(address: string): SuperTokenFactory {
    return super.attach(address) as SuperTokenFactory;
  }
  override connect(signer: Signer): SuperTokenFactory__factory {
    return super.connect(signer) as SuperTokenFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuperTokenFactoryInterface {
    return new utils.Interface(_abi) as SuperTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SuperTokenFactory {
    return new Contract(address, _abi, signerOrProvider) as SuperTokenFactory;
  }
}