/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ClaimSwapCampUSDTLpDepository,
  ClaimSwapCampUSDTLpDepositoryInterface,
} from "../ClaimSwapCampUSDTLpDepository";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
    ],
    name: "BondCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "debtRatio",
        type: "uint256",
      },
    ],
    name: "BondPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    name: "BondRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "initialBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "adjustment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "addition",
        type: "bool",
      },
    ],
    name: "ControlVariableAdjustment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "CAMP",
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
    inputs: [],
    name: "DAO",
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
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "REVISION",
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
    inputs: [
      {
        internalType: "address",
        name: "_CAMP",
        type: "address",
      },
      {
        internalType: "address",
        name: "_DAO",
        type: "address",
      },
      {
        internalType: "address",
        name: "_principle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Token0address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Token1address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdt_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "__initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adjustment",
    outputs: [
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetPrice",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bondInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePaid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentDebt",
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
    name: "debtDecay",
    outputs: [
      {
        internalType: "uint256",
        name: "decay_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "debtRatio_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minimumPriceRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialDebt",
        type: "uint256",
      },
    ],
    name: "initializeBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDecay",
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
    name: "maxPayout",
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
    name: "owner",
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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "payoutFor",
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
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "pendingPayoutFor",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingPayout_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "percentVestedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "percentVested_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceRate",
    outputs: [
      {
        internalType: "uint256",
        name: "rate_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "principle",
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
    inputs: [],
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "recoverLostToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_stake",
        type: "bool",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_addition",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_increment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_buffer",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum BondDepository.PARAMETER",
        name: "_parameter",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
    ],
    name: "setBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
    ],
    name: "setStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
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
    inputs: [],
    name: "terms",
    outputs: [
      {
        internalType: "uint256",
        name: "controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumPriceRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDebt",
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
    name: "treasury",
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
    inputs: [],
    name: "usdt_address",
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
];

const _bytecode =
  "0x6080604052600060025534801561001557600080fd5b5061001e610023565b6100e6565b6000546001600160a01b03161561009b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f776e61626c653a20616c726561647920696e697469616c697a656400000000604482015290519081900360640190fd5b600080546001600160a01b03191633178082556040516001600160a01b039190911691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3565b612b2280620000f66000396000f3fe608060405234801561001057600080fd5b506004361061025c5760003560e01c80638da5cb5b11610145578063d24378eb116100bd578063e0176de81161008c578063f0f4426011610071578063f0f4426014610691578063f5c2ab5b146106b7578063fc7b9c18146106bf5761025c565b8063e0176de814610681578063e392a262146106895761025c565b8063d24378eb1461062e578063d502562514610636578063d7ccfb0b14610671578063dde43cba146106795761025c565b8063a3f4df7e11610114578063cd1234b3116100f9578063cd1234b3146105d2578063cea55f571461061e578063ceb791d9146106265761025c565b8063a3f4df7e1461051b578063b4abccba146105985761025c565b80638da5cb5b146104b35780638dbdbe6d146104bb5780638ff39099146104ed57806398fabd3a146105135761025c565b8063451ee4a1116101d85780635a96ac0a116101a7578063715350081161018c578063715350081461044d578063759076e51461048e5780637927ebf8146104965761025c565b80635a96ac0a1461043d57806361d027b3146104455761025c565b8063451ee4a1146103b457806346f68ee9146103e95780634cf088d91461040f578063507930ec146104175761025c565b80631e321a0f1161022f5780631fef3056116102145780631fef30561461034c57806325e9e3a71461035457806332f57962146103ac5761025c565b80631e321a0f146102f85780631feed31f1461031e5761025c565b8063016a42841461026157806301b88ee814610285578063089208d8146102bd5780631a3d0068146102c7575b600080fd5b6102696106c7565b604080516001600160a01b039092168252519081900360200190f35b6102ab6004803603602081101561029b57600080fd5b50356001600160a01b03166106d6565b60408051918252519081900360200190f35b6102c561072f565b005b6102c5600480360360808110156102dd57600080fd5b508035151590602081013590604081013590606001356107d8565b6102c56004803603604081101561030e57600080fd5b5060ff8135169060200135610926565b6102ab6004803603604081101561033457600080fd5b506001600160a01b0381351690602001351515610ae0565b610269610cd5565b6102c5600480360360e081101561036a57600080fd5b506001600160a01b038135811691602081013582169160408201358116916060810135821691608082013581169160a081013582169160c09091013516610ce4565b610269610e53565b6103bc610e62565b60408051951515865260208601949094528484019290925260608401526080830152519081900360a00190f35b6102c5600480360360208110156103ff57600080fd5b50356001600160a01b0316610e7a565b610269610f79565b6102ab6004803603602081101561042d57600080fd5b50356001600160a01b0316610f88565b6102c561101a565b6102696110c4565b6102c5600480360360e081101561046357600080fd5b5080359060208101359060408101359060608101359060808101359060a08101359060c001356110d3565b6102ab61128c565b6102ab600480360360208110156104ac57600080fd5b50356112a8565b6102696112d0565b6102ab600480360360608110156104d157600080fd5b50803590602081013590604001356001600160a01b03166112df565b6102c56004803603602081101561050357600080fd5b50356001600160a01b031661179c565b610269611830565b61052361183f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561055d578181015183820152602001610545565b50505050905090810190601f16801561058a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105be600480360360208110156105ae57600080fd5b50356001600160a01b031661185f565b604080519115158252519081900360200190f35b6105f8600480360360208110156105e857600080fd5b50356001600160a01b0316611994565b604080519485526020850193909352838301919091526060830152519081900360800190f35b6102ab6119bb565b6102ab611a60565b6102ab611a8f565b61063e611d3c565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b6102ab611d51565b6102ab611df6565b6102ab611dfb565b6102ab611e8d565b6102c5600480360360208110156106a757600080fd5b50356001600160a01b0316611ed2565b6102ab611f66565b6102ab611f6c565b603a546001600160a01b031681565b6000806106e283610f88565b6001600160a01b038416600090815260496020526040902054909150612710821061070f57809250610728565b61072561271061071f8385611f72565b90611fd2565b92505b5050919050565b6000546001600160a01b0316331461078e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b03163314610837576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603e5461084d906103e89061071f906019611f72565b83111561088b5760405162461bcd60e51b81526004018080602001828103825260238152602001806129556023913960400191505060405180910390fd5b8361089a57603e5482106108a0565b603e5482115b6108db5760405162461bcd60e51b815260040180806020018281038252602281526020018061289a6022913960400191505060405180910390fd5b6040805160a08101825294151580865260208601859052908501839052606085018290524360809095018590526044805460ff19169091179055604592909255604655604755604855565b6000546001600160a01b03163314610985576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600082600481111561099357fe5b14156109a357603f819055610adc565b60018260048111156109b157fe5b1415610a02576127108111156109f85760405162461bcd60e51b8152600401808060200182810382526030815260200180612a6b6030913960400191505060405180910390fd5b6041819055610adc565b6002826004811115610a1057fe5b1415610a6157612710811115610a575760405162461bcd60e51b815260040180806020018281038252602c815260200180612929602c913960400191505060405180910390fd5b6042819055610adc565b6003826004811115610a6f57fe5b1415610a7f576043819055610adc565b6004826004811115610a8d57fe5b1415610adc57633b9aca00811115610ad65760405162461bcd60e51b81526004018080602001828103825260288152602001806129a06028913960400191505060405180910390fd5b60408190555b5050565b6000610aea61284b565b506001600160a01b038316600090815260496020908152604080832081516080810183528154815260018201549381019390935260028101549183019190915260030154606082015290610b3d85610f88565b90506127108110610bcd576001600160a01b03851660008181526049602090815260408083208381556001810184905560028101849055600301839055855181519081529182019290925281517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1929181900390910190a2610bc485858460000151612014565b92505050610ccf565b8151600090610be4906127109061071f9085611f72565b90506040518060800160405280610c088386600001516121b690919063ffffffff16565b8152602001610c32610c278660400151436121b690919063ffffffff16565b6020870151906121b6565b8152436020808301919091526060808701516040938401526001600160a01b038a166000818152604984528490208551808255868501516001830155868601516002830155959092015160039092019190915582518581529182019390935281517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1929181900390910190a2610cc9868683612014565b93505050505b92915050565b603c546001600160a01b031681565b6000610cee6121f8565b90506002548111610d305760405162461bcd60e51b815260040180806020018281038252602e815260200180612a0a602e913960400191505060405180910390fd5b60028190556001600160a01b038816610d4857600080fd5b603680546001600160a01b0319166001600160a01b038a8116919091179091558516610d7357600080fd5b603880546001600160a01b0319166001600160a01b03878116919091179091558416610d9e57600080fd5b603980546001600160a01b0319166001600160a01b03868116919091179091558716610dc957600080fd5b603580546001600160a01b0319166001600160a01b03898116919091179091558616610df457600080fd5b603a80546001600160a01b0319166001600160a01b03888116919091179091558316610e1f57600080fd5b50603c80546001600160a01b039384166001600160a01b031991821617909155603780549290931691161790555050505050565b6036546001600160a01b031681565b60445460455460465460475460485460ff9094169385565b6000546001600160a01b03163314610ed9576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610f1e5760405162461bcd60e51b81526004018080602001828103825260268152602001806128746026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b603d546001600160a01b031681565b6000610f9261284b565b506001600160a01b03821660009081526049602090815260408083208151608081018352815481526001820154938101939093526002810154918301829052600301546060830152909190610fe89043906121b6565b6020830151909150801561100d576110068161071f84612710611f72565b9350611012565b600093505b505050919050565b6001546001600160a01b031633146110635760405162461bcd60e51b81526004018080602001828103825260228152602001806128e06022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b603b546001600160a01b031681565b6000546001600160a01b03163314611132576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603e54156111715760405162461bcd60e51b8152600401808060200182810382526030815260200180612a9b6030913960400191505060405180910390fd5b6127108411156111b25760405162461bcd60e51b8152600401808060200182810382526030815260200180612a6b6030913960400191505060405180910390fd5b6127108311156111f35760405162461bcd60e51b815260040180806020018281038252602c815260200180612929602c913960400191505060405180910390fd5b633b9aca008511156112365760405162461bcd60e51b81526004018080602001828103825260288152602001806129a06028913960400191505060405180910390fd5b6040805160c08101825288815260208101889052808201879052606081018690526080810185905260a001839052603e97909755603f9590955592909455604155604292909255604391909155604a5543604b55565b60006112a2611299611e8d565b604a54906121b6565b90505b90565b6000610ccf64e8d4a5100061071f6112be611d51565b61071f86670de0b6b3a7640000611f72565b6000546001600160a01b031690565b60006001600160a01b03821661133c576040805162461bcd60e51b815260206004820152601f60248201527f426f6e644465706f7369746f72793a20496e76616c6964206164647265737300604482015290519081900360640190fd5b6113446121fd565b604354604a5411156113875760405162461bcd60e51b81526004018080602001828103825260248152602001806128bc6024913960400191505060405180910390fd5b6000611391611d51565b9050808410156113d25760405162461bcd60e51b8152600401808060200182810382526033815260200180612a386033913960400191505060405180910390fd5b60006113ed620f424061071f886113e7611a8f565b90611f72565b905060006113fa826112a8565b9050662386f26fc10000811015611458576040805162461bcd60e51b815260206004820152601e60248201527f426f6e644465706f7369746f72793a20426f6e6420746f6f20736d616c6c0000604482015290519081900360640190fd5b611460611dfb565b8111156114b4576040805162461bcd60e51b815260206004820152601e60248201527f426f6e644465706f7369746f72793a20426f6e6420746f6f206c617267650000604482015290519081900360640190fd5b60006114d461271061071f603e6004015485611f7290919063ffffffff16565b603a549091506114ef906001600160a01b031633308b612211565b603a54603b546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018c90529051919092169163095ea7b39160448083019260209291908290030181600087803b15801561154857600080fd5b505af115801561155c573d6000803e3d6000fd5b505050506040513d602081101561157257600080fd5b5050603b54603a546001600160a01b039182169163bc157ac1918b9116611599868661228a565b6040518463ffffffff1660e01b815260040180848152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b1580156115e657600080fd5b505af11580156115fa573d6000803e3d6000fd5b505050508060001461162357603554603654611623916001600160a01b039182169116836122e4565b604a54611630908361228a565b604a55604080516080810182526001600160a01b0388166000908152604960205291909120548190611662908561228a565b8152603f546020808301919091524360408084019190915260609283018890526001600160a01b038a1660008181526049808552838220875180825588870151600183015588860151600283015597909601516003909601959095558251808401909352600883527f426f6e64496e666f00000000000000000000000000000000000000000000000083850152529190526116fd918861233b565b603f54849061170d90439061228a565b604080516001600160a01b038a168152602081018c9052815186927fd52c75b244055af9364c0a5dc0da7868f6ae104012f245ad2702031af04d9b8e928290030190a46117586119bb565b611760611d51565b6040517f2cb17bd1fd2a1fecfefae2de1e6a59194abaa62179652924ccdca01617f0bf1690600090a3611791612413565b509695505050505050565b6000546001600160a01b031633146117fb576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661180e57600080fd5b603d80546001600160a01b0319166001600160a01b0392909216919091179055565b6035546001600160a01b031681565b60606040518060600160405280602181526020016129e960219139905090565b6036546000906001600160a01b03838116911614156118af5760405162461bcd60e51b8152600401808060200182810382526022815260200180612acb6022913960400191505060405180910390fd5b603a546001600160a01b03838116911614156118fc5760405162461bcd60e51b81526004018080602001828103825260278152602001806129026027913960400191505060405180910390fd5b603554604080516370a0823160e01b8152306004820152905161198c926001600160a01b0390811692908616916370a0823191602480820192602092909190829003018186803b15801561194f57600080fd5b505afa158015611963573d6000803e3d6000fd5b505050506040513d602081101561197957600080fd5b50516001600160a01b03851691906122e4565b506001919050565b60496020526000908152604090208054600182015460028301546003909301549192909184565b60006112a2670de0b6b3a764000061071f603660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a1a57600080fd5b505afa158015611a2e573d6000803e3d6000fd5b505050506040513d6020811015611a4457600080fd5b505161071f670de0b6b3a76400006113e7633b9aca008161128c565b6000611a7b606461071f611a726119bb565b603e5490611f72565b6040549091508110156112a5575060405490565b600080603a60009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ae057600080fd5b505afa158015611af4573d6000803e3d6000fd5b505050506040513d6020811015611b0a57600080fd5b5051603854603a54604080516370a0823160e01b81526001600160a01b039283166004820152905193945060009391909216916370a08231916024808301926020929190829003018186803b158015611b6257600080fd5b505afa158015611b76573d6000803e3d6000fd5b505050506040513d6020811015611b8c57600080fd5b5051603954603a54604080516370a0823160e01b81526001600160a01b039283166004820152905193945060009391909216916370a08231916024808301926020929190829003018186803b158015611be457600080fd5b505afa158015611bf8573d6000803e3d6000fd5b505050506040513d6020811015611c0e57600080fd5b50516037546039546040805163b3596f0760e01b81526001600160a01b0392831660048201529051939450600093611c9e93929092169163b3596f0791602480820192602092909190829003018186803b158015611c6b57600080fd5b505afa158015611c7f573d6000803e3d6000fd5b505050506040513d6020811015611c9557600080fd5b50518390611f72565b6037546038546040805163b3596f0760e01b81526001600160a01b0392831660048201529051611d2693929092169163b3596f0791602480820192602092909190829003018186803b158015611cf357600080fd5b505afa158015611d07573d6000803e3d6000fd5b505050506040513d6020811015611d1d57600080fd5b50518590611f72565b019050611d338185611fd2565b94505050505090565b603e54603f5460405460415460425460435486565b6037546036546040805163b3596f0760e01b81526001600160a01b03928316600482015290516000938493169163b3596f07916024808301926020929190829003018186803b158015611da357600080fd5b505afa158015611db7573d6000803e3d6000fd5b505050506040513d6020811015611dcd57600080fd5b505190506000611ddb611a60565b9050611def633b9aca0061071f8484611f72565b9250505090565b600181565b60006112a2620f424061071f603e60030154603660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e5b57600080fd5b505afa158015611e6f573d6000803e3d6000fd5b505050506040513d6020811015611e8557600080fd5b505190611f72565b600080611ea5604b54436121b690919063ffffffff16565b603f54604a54919250611ebc9161071f9084611f72565b9150604a54821115611ece57604a5491505b5090565b6000546001600160a01b03163314611f31576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116611f4457600080fd5b603b80546001600160a01b0319166001600160a01b0392909216919091179055565b604b5481565b604a5481565b600082611f8157506000610ccf565b82820282848281611f8e57fe5b0414611fcb5760405162461bcd60e51b81526004018080602001828103825260218152602001806129c86021913960400191505060405180910390fd5b9392505050565b6000611fcb83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506124f3565b6000826120a3576036546040805163a9059cbb60e01b81526001600160a01b038781166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561207157600080fd5b505af1158015612085573d6000803e3d6000fd5b505050506040513d602081101561209b57600080fd5b506121af9050565b603654603d546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018690529051919092169163095ea7b39160448083019260209291908290030181600087803b1580156120fc57600080fd5b505af1158015612110573d6000803e3d6000fd5b505050506040513d602081101561212657600080fd5b5050603d54604080517fadc9772e0000000000000000000000000000000000000000000000000000000081526001600160a01b038781166004830152602482018690529151919092169163adc9772e91604480830192600092919082900301818387803b15801561219657600080fd5b505af11580156121aa573d6000803e3d6000fd5b505050505b5092915050565b6000611fcb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612595565b600190565b612208611299611e8d565b604a5543604b55565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03167f23b872dd000000000000000000000000000000000000000000000000000000001790526122849085906125ef565b50505050565b600082820183811015611fcb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526123369084906125ef565b505050565b6123368383836040516024018080602001848152602001836001600160a01b03168152602001828103825285818151815260200191508051906020019080838360005b8381101561239657818101518382015260200161237e565b50505050905090810190601f1680156123c35780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03167fe3849f790000000000000000000000000000000000000000000000000000000017905294506126a09350505050565b604754604854600091612426919061228a565b6045549091501580159061243a5750804310155b156124f057603e5460445460ff161561247457604554603e5461245c9161228a565b603e8190556046541161246f5760006045555b612496565b604554603e54612483916121b6565b603e819055604654106124965760006045555b43604855603e546045546044546040805185815260208101949094528381019290925260ff1615156060830152517fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9181900360800190a1505b50565b6000818361257f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561254457818101518382015260200161252c565b50505050905090810190601f1680156125715780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161258b57fe5b0495945050505050565b600081848411156125e75760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561254457818101518382015260200161252c565b505050900390565b6060612644826040518060400160405280601f81526020017f536166654b4950373a206c6f772d6c6576656c2063616c6c206661696c656400815250856001600160a01b03166126c19092919063ffffffff16565b8051909150156123365780806020019051602081101561266357600080fd5b50516123365760405162461bcd60e51b81526004018080602001828103825260288152602001806129786028913960400191505060405180910390fd5b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60606126d084846000856126d8565b949350505050565b60606126e385612845565b612734576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106127735780518252601f199092019160209182019101612754565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146127d5576040519150601f19603f3d011682016040523d82523d6000602084013e6127da565b606091505b509150915081156127ee5791506126d09050565b8051156127fe5780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561254457818101518382015260200161252c565b3b151590565b604051806080016040528060008152602001600081526020016000815260200160008152509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373426f6e644465706f7369746f72793a2077726f6e67207461726765742076616c7565426f6e644465706f7369746f72793a204d617820636170616369747920726561636865644f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6c426f6e6454726561737572793a2063616e6e6f74207769746864726177207072696e6369706c65426f6e644465706f7369746f72793a2044414f206665652063616e6e6f7420657863656564207061796f7574426f6e644465706f7369746f72793a20696e6372656d656e7420746f6f206c61726765536166654b4950373a204b495037206f7065726174696f6e20646964206e6f742073756363656564426f6e644465706f7369746f72793a206d696e20646973636f756e74207261746520657863656564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436c61696d537761702043414d502d55534454204c50204465706f7369746f7279436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564426f6e644465706f7369746f72793a20536c697070616765206c696d69743a206d6f7265207468616e206d6178207072696365426f6e644465706f7369746f72793a207061796f75742063616e6e6f742062652061626f766520312070657263656e74426f6e644465706f7369746f72793a20626f6e6473206d75737420626520696e697469616c697a65642066726f6d2030426f6e6454726561737572793a2063616e6e6f742077697468647261772043414d50a26469706673582212204aaf1c2999b908eb0772bdbe896076cbf3642a1514ecb0e5a838073bebeadfe264736f6c63430007050033";

export class ClaimSwapCampUSDTLpDepository__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimSwapCampUSDTLpDepository> {
    return super.deploy(
      overrides || {}
    ) as Promise<ClaimSwapCampUSDTLpDepository>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClaimSwapCampUSDTLpDepository {
    return super.attach(address) as ClaimSwapCampUSDTLpDepository;
  }
  connect(signer: Signer): ClaimSwapCampUSDTLpDepository__factory {
    return super.connect(signer) as ClaimSwapCampUSDTLpDepository__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimSwapCampUSDTLpDepositoryInterface {
    return new utils.Interface(_abi) as ClaimSwapCampUSDTLpDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimSwapCampUSDTLpDepository {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ClaimSwapCampUSDTLpDepository;
  }
}
