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

const nftAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
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
    name: "getNftTokenid",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const marketAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Listed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Sale",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "temp_list",
    outputs: [
      {
        internalType: "enum Market.ListingStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listToken",
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
        name: "listingid",
        type: "uint256",
      },
    ],
    name: "getListing",
    outputs: [
      {
        components: [
          {
            internalType: "enum Market.ListingStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Market.Listing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllNFT",
    outputs: [
      {
        components: [
          {
            internalType: "enum Market.ListingStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Market.Listing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var Ballot;
var NFT;
var Market;
var userAccount;
var userAccountBalance;
var chairPerson;
var lastTokenId;
var lastListingId;
var ntfAddress = "0xBEd03C5Bec043d139c3A2b08d58b82AcD0cc9150";
var marketAddress = "0xdb4f43953298EeD82DA2DC19b157612a64588DCf";
var ballotAddress = "0xE69CDa058dc5e905102f39cD6C05102B4b144B30";
//   var name = document.querySelector("#name1");
var proposal_name = document.querySelector("#proposal_name");
var alertPlaceholder = document.getElementById("txStatus");

function startApp() {
  //ballot contratc address
  console.log(userAccount);
  Ballot = new web3.eth.Contract(ballotAbi, ballotAddress);
  NFT = new web3.eth.Contract(nftAbi, ntfAddress);
  Market = new web3.eth.Contract(marketAbi, marketAddress);

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

  if (window.location.href == "http://127.0.0.1:5500/Nft.html") {
    console.log("hi");
    getAllNft();
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

function MintNFT() {
  NFT.methods
    .mint()
    .send({ from: userAccount })
    .on("receipt", function (receipt) {
      console.log(receipt);
      lastTokenId = receipt.events.Transfer.returnValues.tokenId;
      sessionStorage.setItem("lastTokenId", lastTokenId);

      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You successfully Mint NFT and tokenId is ${lastTokenId}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      // console.log(NFT.methods._tokenId.call().call());
      // console.log(lastTokenId);
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry! Its unsuccessfull to mint NFT</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

function listingNFT(tokenid, price) {
  NFT.methods
    .approve(marketAddress, tokenid)
    .send({ from: userAccount })
    .on("receipt", function (receipt) {
      console.log(receipt);
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You successfully approved nft</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);

      // listing contract
      Market.methods
        .listToken(ntfAddress, tokenid, price)
        .send({ from: userAccount })
        .on("receipt", function (receipt1) {
          console.log(receipt1.events.Listed.returnValues.listingId);
          lastListingId = receipt1.events.Listed.returnValues.listingId;
          sessionStorage.setItem("lastListingId", lastListingId);

          const wrapper = document.createElement("div");
          wrapper.innerHTML = [
            `<div class="alert alert-success alert-dismissible" role="alert">`,
            `   <div>You successfully listed nft</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
          ].join("");

          alertPlaceholder.append(wrapper);
          $("#tokenid").val("");
          $("#price").val("");
        })
        .on("error", function (error) {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            `   <div>Sorry! Its unsuccessfull to listed NFT</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
          ].join("");

          alertPlaceholder.append(wrapper);
          console.log(error);
        });
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry! Its unsuccessfull to approved NFT</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

function getAllNft() {
  lastListingId = parseInt(sessionStorage.getItem("lastListingId"));
  // console.log(lastListingId);
  var temp = [".row1", ".row2", ".row3", ".row4"];
  var j = -1;
  var status = ["Active", "Sold", "Cancelled"];
  var bkgStatus = ["success", "secondary", "danger"];
  for (let i = 0; i < lastListingId; i++) {
    // console.log("oho");
    if (i % 3 == 0) {
      j++;
    }
    Market.methods
      .getListing(i + 1)
      .call()
      .then(function (val) {
        console.log(val);
        if (status[parseInt(val.status)] != "Sold") {
          var button = `<button type="submit" class="d-block w-100 mt-3 btn btn-primary buyNft" onClick="buyNft(${
            i + 1
          }, ${val.price})">Buy</button>`;
        } else {
          var button = `<button type="submit" class=" d-block w-100 mt-3 btn btn-secondary" disabled>Buy</button>`;
        }
        $(temp[j]).append(`
        <div class="col-md-4">
          <div class="card m-3" style="width: 15rem">
            <img src="https://cdn.dribbble.com/users/5180/screenshots/13951298/media/194e6228d7477efddad399ce9ef8b063.png?compress=1&resize=400x300&vertical=top" class="card-img-top" alt="ABC" height="110px">
            <div class="card-body">
              <h5 class="card-title mb-3" id="card-title">ABC Token #${
                val.tokenId
              }</h5>
              <p class="card-text text-nowrap text-secondary" id="seller"><i class="bi bi-person-fill me-2"></i> ${
                val.seller
              }</p>
              <p class="card-text text-secondary"><i class="bi bi-tag-fill me-2"></i> ${
                val.price
              } Wei</p>
              <span class="fw-normal badge text-bg-${
                bkgStatus[parseInt(val.status)]
              }">${status[parseInt(val.status)]}</span>
              ${button}
            </div>
          </div>
        </div>`);
        // $("#card-title").html(`ABC Token #${val.tokenId}`);
      });
  }
}

function buyNft(listingID, price) {
  // console.log(listingID);
  Market.methods
    .buyToken(listingID)
    .send({ from: userAccount, value: price })
    .on("receipt", function (receipt) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You successfully Buy nft</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      location.reload();
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry! Its unsuccessfull to buy NFT</div>`,
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

//admin mint nft

$("#mint").click(function (val) {
  MintNFT();
});

$("#listingNft").click(function (val) {
  if ($("#tokenid").val() == null || $("#price").val() == null) {
    alert("please enter value");
  } else {
    listingNFT(parseInt($("#tokenid").val()), parseInt($("#price").val()));
  }
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
