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
  {
    inputs: [],
    name: "resetVoters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var Ballot;
var userAccount;
var userAccountBalance;
var chairPerson;
//   var name = document.querySelector("#name1");
var proposal_name = document.querySelector("#proposal_name");
var alertPlaceholder = document.getElementById("txStatus");

function startApp() {
  //ballot contratc address
  var ballotAddress = "0x210DD459A9A257e99173074c74B1fCCE40925BDE";
  console.log(userAccount);
  Ballot = new web3.eth.Contract(ballotAbi, ballotAddress);

  //enter value into your profile
  document.getElementById(
    "adminAddress"
  ).innerHTML = `<i class="bi bi-person-fill me-1"></i>  ${userAccount}`;
  document.getElementById(
    "adminBalance"
  ).innerHTML = `<i class="bi bi-currency-dollar me-1"></i>
    ${userAccountBalance} Ether `;

  //  e = sessionStorage.getItem("endVote");
  if (window.location.href == "http://127.0.0.1:5500/Voter.html") {
    if (JSON.parse(sessionStorage.getItem("pause"))) {
      $(".votingSection").hide();
      $(".resultSection").show();
      $(".resultSection").html(`<p>Voting paused</p>`);
    } else if (JSON.parse(sessionStorage.getItem("endVote"))) {
      $(".votingSection").hide();
      $(".resultSection").show();
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
  return Ballot.methods.viewProposalsName().call();
}

function giveRight() {
  Ballot.methods
    .giveRightToVote(userAccount)
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You are now eligible for voting</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry something wrong happen</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
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
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>Congratulations!! you have successfully voted.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry!! Something wrong happen</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

function delegateVote(address) {
  Ballot.methods
    .delegate(address)
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      $("#delegateId").val("");
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>Congratulations!! you have successfully delegate your right to ${address}.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry!! Something wrong happen</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

function winner() {
  Ballot.methods
    .winnerName()
    .call()
    .then(function (value) {
      $(".content").append(
        `<p>Winner name :- ${value.name}</p><p>Total votes :- ${value.voteCount}</p>`
      );
    });
}

function summaryVotes() {
  Ballot.methods
    .summaryOfVotes()
    .call()
    .then(function (value) {
      var temp = [".votes1", ".votes2", ".votes3", ".votes4"];
      var i = 0;
      value.forEach(function (val) {
        $(temp[i]).html(`<p>${val.voteCount}</p>`);
        i++;
      });
      $("#exampleModal").modal("show");
    });
}

function resetVote() {
  Ballot.methods
    .resetVoters()
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You successfully reset voting</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry! Its unsuccessfull to reset voting</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
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
      web3.eth.getBalance(userAccount).then(function (val) {
        userAccountBalance = web3.utils.fromWei(val, "ether");
        startApp();
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    userAccount = web3.eth.accounts[0];
    web3.eth.getBalance(userAccount).then(function (val) {
      userAccountBalance = web3.utils.fromWei(val, "ether");
      startApp();
    });
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

$("#giveRight").click(function (params) {
  giveRight();
});

$("#vote").click(function (params) {
  var radios = document.getElementsByName("flexRadioDefault");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      vote(radios[i].value);
      break;
    }
  }
});

$("#delegate").click(function (params) {
  delegateVote($("#delegateId").val());
});

$("#summary").click(function () {
  summaryVotes();
});

// admin end vote
$("#endVote").click(function (val) {
  sessionStorage.setItem("endVote", true);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-success alert-dismissible" role="alert">`,
    `   <div>Voting is over. You can see winner name soon</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
});

// admin pause button
$("#pause").click(function (val) {
  var btn = document.getElementById("pause");

  if (btn.value == "pause") {
    btn.value = "continue";
    btn.textContent = "continue";
    sessionStorage.setItem("pause", true);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-success alert-dismissible" role="alert">`,
      `   <div>You successfully pause the voting</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  } else if (btn.value == "continue") {
    btn.value = "pause";
    btn.textContent = "pause";
    sessionStorage.setItem("pause", false);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-success alert-dismissible" role="alert">`,
      `   <div>Voting is continue</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  }
});

$("#reset").click(function (val) {
  resetVote();
});

//for login home page
$("#submit").click(function () {
  let value = $("#loginId").val();
  let temp = "0xE390F21E31ccd2160AE461fFA24788FfD98901b9";
  if (value.toLowerCase() == temp.toLowerCase()) {
    window.location.href = "./Admin.html";
  } else if (value.toLowerCase() == userAccount.toLowerCase()) {
    window.location.href = "./Voter.html";
  }
});
