// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Digest;
  
  
  const v60 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  const v61 = stdlib.protect(ctc0, interact.secretKey, 'for Alice\'s interact field secretKey');
  
  const v64 = stdlib.digest(ctc1, [v61]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v60, v64],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v60, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
      
      sim_r.txns.push({
        amt: v66,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc1, [v78]);
  const v82 = stdlib.digestEq(v81, v67);
  stdlib.assert(v82, {
    at: './index.rsh:43:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const v74 = stdlib.protect(ctc0, await interact.getBobPass(), {
    at: './index.rsh:38:50:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:12:function exp)'],
    msg: 'getBobPass',
    who: 'Bob'
    });
  const v75 = stdlib.digest(ctc2, [v74]);
  const v76 = stdlib.digestEq(v75, v67);
  stdlib.assert(v76, {
    at: './index.rsh:39:12:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:12:function exp)'],
    msg: null,
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v66, v67, v74],
    evt_cnt: 1,
    funcNum: 1,
    lct: v68,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v77,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc2, [v78]);
  const v82 = stdlib.digestEq(v81, v67);
  stdlib.assert(v82, {
    at: './index.rsh:43:10:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQEWKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAASCMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFFzX/gATVFRkUNP8WULA0/xYBNANXCCASRLEisgE0AyJbsggjshAxALIHs0IAUEiBoI0GiAC2IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwggNf6ABLTe81Y0/xZQNP5QsDT/iACGNP8WNP5QKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161074b38038061074b833981016040819052610022916101ef565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c90341460076100f7565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100ef9260029290910190610120565b505050610284565b8161011c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012c90610249565b90600052602060002090601f01602090048101928261014e5760008555610194565b82601f1061016757805160ff1916838001178555610194565b82800160010185558215610194579182015b82811115610194578251825591602001919060010190610179565b506101a09291506101a4565b5090565b5b808211156101a057600081556001016101a5565b604080519081016001600160401b03811182821017156101e957634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561020257600080fd5b61020a6101b9565b835181526040601f198301121561022057600080fd5b6102286101b9565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025d57607f821691505b6020821081141561027e57634e487b7160e01b600052602260045260246000fd5b50919050565b6104b8806102936000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461037b565b6100b8565b3480156100a157600080fd5b506100aa610263565b604051610064929190610393565b6100c8600160005414600a610300565b6100e2813515806100db57506001548235145b600b610300565b6000808055600280546100f4906103f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103f0565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610425565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101da34156008610300565b60208082015160405161021b926101fa9186820135910190815260200190565b6040516020818303038152906040528051906020012060001c146009610300565b8051604051339180156108fc02916000818181858888f19350505050158015610248573d6000803e3d6000fd5b506000808055600181905561025f90600290610325565b5050565b600060606000546002808054610278906103f0565b80601f01602080910402602001604051908101604052809291908181526020018280546102a4906103f0565b80156102f15780601f106102c6576101008083540402835291602001916102f1565b820191906000526020600020905b8154815290600101906020018083116102d457829003601f168201915b50505050509050915091509091565b8161025f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610331906103f0565b6000825580601f10610341575050565b601f01602090049060005260206000209081019061035f9190610362565b50565b5b808211156103775760008155600101610363565b5090565b60006040828403121561038d57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103c7578581018301518582016060015282016103ab565b818111156103d9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061040457607f821691505b6020821081141561038d57634e487b7160e01b600052602260045260246000fd5b60006040828403121561043757600080fd5b6040516040810181811067ffffffffffffffff8211171561046857634e487b7160e01b600052604160045260246000fd5b60405282518152602092830151928101929092525091905056fea2646970667358221220a869c91e7c58090c623e911267068d544a9b4064d5d6a8fc56b7f18686bc922c64736f6c634300080c0033`,
  BytecodeLen: 1867,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
