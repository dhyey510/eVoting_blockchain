const ballotAbi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "proposalNames",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
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
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
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
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
        ],
        internalType: "struct Ballot.Proposal",
        name: "winnerName_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewProposalsName",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewChairperson",
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
    name: "summaryOfVotes",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
        ],
        internalType: "struct Ballot.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

var Ballot;
var userAccount;
var chairPerson;
//   var name = document.querySelector("#name1");
var proposal_name = document.querySelector("#proposal_name");

function startApp() {
  //ballot contratc address
  var ballotAddress = "0xb3ecEf0C990f5636ee45c8E0CdB5567C770677f3";
  console.log(userAccount);
  Ballot = new web3.eth.Contract(ballotAbi, ballotAddress);

  //  e = sessionStorage.getItem("endVote");
  if (window.location.href == "http://127.0.0.1:5500/Voter.html") {
    if (JSON.parse(sessionStorage.getItem("pause"))) {
      $(".votingSection").hide();
      $(".resultSection").append(`<p>Voting paused</p>`);
    } else if (JSON.parse(sessionStorage.getItem("endVote"))) {
      $(".votingSection").hide();
      winner();
    }
  }

  if (window.location.href == "http://127.0.0.1:5500/Admin.html") {
    if (!JSON.parse(sessionStorage.getItem("pause"))) {
      document.getElementById("pause").value = "pause";
      document.getElementById("pause").textContent = "pause";
    } else {
      document.getElementById("pause").value = "continue";
      document.getElementById("pause").textContent = "continue";
    }
  }
}

function displayProposalsName() {
  getProposalsName().then(function (value) {
    value.forEach((element) => {
      console.log(element);
      $(".name1").append(`<p>${element}</p>`);
    });
  });
}

function getProposalsName() {
  console.log("in");
  return Ballot.methods.viewProposalsName().call();
}

function giveRight() {
  Ballot.methods
    .giveRightToVote(userAccount)
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      console.log("success");
    })
    .on("error", function (error) {
      console.log(error);
    });
}

function vote(index) {
  Ballot.methods
    .vote(index)
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      console.log("success");
    })
    .on("error", function (error) {
      console.log(error);
    });
}

function winner() {
  Ballot.methods
    .winnerName()
    .call()
    .then(function (value) {
      $(".resultSection").append(
        `<p>Winner name :- ${value.name}</p><p>Total votes :- ${value.voteCount}</p>`
      );
    });
}

function summaryVotes() {
  Ballot.methods
    .summaryOfVotes()
    .call()
    .then(function (value) {
      value.forEach(function (val) {
        $(".summary").append(`<p>${val.name} -> ${val.voteCount}</p>`);
      });
    });
}

function resetVote() {
  Ballot.methods
    .voters()
    .call()
    .then(function (val) {
      console.log(val);
    });
}

window.addEventListener("load", async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      const accounts = await ethereum.enable();
      // Acccounts now exposed
      userAccount = accounts[0];
      startApp();
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    userAccount = web3.eth.accounts[0];
    startApp();
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
});

ethereum.on("accountsChanged", (accounts) => {
  window.location.reload();
});

ethereum.on("chainChanged", (chainId) => {
  window.location.reload();
});

// proposal_name.addEventListener("click", () => {
//   displayProposalsName();
// });

$("#giveRight").click(function (params) {
  giveRight();
});

$("#vote").click(function (params) {
  vote(parseInt($("#index").val()));
});

$("#summary").click(function () {
  summaryVotes();
});

$("#endVote").click(function (val) {
  sessionStorage.setItem("endVote", true);
});

$("#pause").click(function (val) {
  var btn = document.getElementById("pause");

  if (btn.value == "pause") {
    btn.value = "continue";
    btn.textContent = "continue";
    sessionStorage.setItem("pause", true);
  } else if (btn.value == "continue") {
    btn.value = "pause";
    btn.textContent = "pause";
    sessionStorage.setItem("pause", false);
  }
});

$("#reset").click(function (val) {
  resetVote();
});

//for login home page
$("#submit").click(function () {
  let value = $("#loginId").val();
  if (value == "Admin") {
    window.location.href = "./Admin.html";
  }
  if (value.toLowerCase() == userAccount.toLowerCase()) {
    window.location.href = "./Voter.html";
  }
});
