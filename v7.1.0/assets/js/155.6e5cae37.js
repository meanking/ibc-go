(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{718:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"roadmap-ibc-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-ibc-go"}},[e._v("#")]),e._v(" Roadmap ibc-go")]),e._v(" "),a("p",[a("em",[e._v("Lastest update: December 21st, 2022")])]),e._v(" "),a("p",[e._v("This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications.")]),e._v(" "),a("p",[e._v("This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans. For the latest expected release timelines, please check "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"v7-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v7-0-0"}},[e._v("#")]),e._v(" v7.0.0")]),e._v(" "),a("h3",{attrs:{id:"_02-client-refactor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-client-refactor"}},[e._v("#")]),e._v(" 02-client refactor")]),e._v(" "),a("p",[e._v("This refactor will make the development of light clients easier. The ibc-go implementation will finally align with the spec and light clients will be required to set their own client and consensus states. This will allow more flexibility for light clients to manage their own internal storage and do batch updates. See "),a("RouterLink",{attrs:{to:"/architecture/adr-006-02-client-refactor.html"}},[e._v("ADR 006")]),e._v(" for more information.")],1),e._v(" "),a("p",[e._v("Follow the progress with the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/25",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/27",target:"_blank",rel:"noopener noreferrer"}},[e._v("RC"),a("OutboundLink")],1),e._v(" milestones or in the "),a("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7/views/14",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"upgrade-cosmos-sdk-v0-47"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-cosmos-sdk-v0-47"}},[e._v("#")]),e._v(" Upgrade Cosmos SDK v0.47")]),e._v(" "),a("p",[e._v("Follow the progress with the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/36",target:"_blank",rel:"noopener noreferrer"}},[e._v("milestone"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"add-authz-support-to-20-transfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-authz-support-to-20-transfer"}},[e._v("#")]),e._v(" Add "),a("code",[e._v("authz")]),e._v(" support to 20-transfer")]),e._v(" "),a("p",[e._v("Authz goes cross chain: users can grant permission for their tokens to be transferred to another chain on their behalf. See "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/2431",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),a("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),a("h2",{attrs:{id:"v7-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v7-1-0"}},[e._v("#")]),e._v(" v7.1.0")]),e._v(" "),a("p",[e._v("Because it is so important to have an ibc-go release compatible with the latest Cosmos SDK release, a couple of features will take a little longer and be released in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("v7.1.0"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"localhost-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localhost-connection"}},[e._v("#")]),e._v(" Localhost connection")]),e._v(" "),a("p",[e._v("This feature will add support for applications on a chain to communicate with applications on the same chain using the existing standard interface to communicate with applications on remote chains. This is a powerful UX improvement, particularly for those users interested in interacting with multiple smart contracts on a single chain through one interface.")]),e._v(" "),a("p",[e._v("For more details, see the design proposal and discussion "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/discussions/2191",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("A special shout out to Strangelove for their substantial contribution on this feature.")]),e._v(" "),a("h3",{attrs:{id:"support-for-wasm-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-for-wasm-light-clients"}},[e._v("#")]),e._v(" Support for Wasm light clients")]),e._v(" "),a("p",[e._v("We will add support for Wasm light clients. The first Wasm client developed with ibc-go/v7 02-client refactor and stored as Wasm bytecode will be the GRANDPA light client used for Cosmos <> Substrate IBC connections. This feature will be used also for a NEAR light client in the future.")]),e._v(" "),a("p",[e._v("This feature was developed by Composable and Strangelove but will be upstreamed into ibc-go.")]),e._v(" "),a("h2",{attrs:{id:"v8-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-0-0"}},[e._v("#")]),e._v(" v8.0.0")]),e._v(" "),a("h3",{attrs:{id:"channel-upgradability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-upgradability"}},[e._v("#")]),e._v(" Channel upgradability")]),e._v(" "),a("p",[e._v("Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel.")]),e._v(" "),a("p",[e._v("Follow the progress with the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/29",target:"_blank",rel:"noopener noreferrer"}},[e._v("alpha milestone"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7/views/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"path-unwinding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-unwinding"}},[e._v("#")]),e._v(" Path unwinding")]),e._v(" "),a("p",[e._v("This feature will allow tokens with non-native denoms to be sent back automatically to their native chains before being sent to a final destination chain. This will allow tokens to reach a final destination with the least amount possible of hops from their native chain.")]),e._v(" "),a("p",[e._v("For more details, see this "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/discussions/824",target:"_blank",rel:"noopener noreferrer"}},[e._v("discussion"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("This roadmap is also available as a "),a("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7/views/25",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For the latest expected release timelines, please check "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For the latest information on the progress of the work or the decisions made that might influence the roadmap, please follow our "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Engineering-updates",target:"_blank",rel:"noopener noreferrer"}},[e._v("engineering updates"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": release version numbers may be subject to change.")])])}),[],!1,null,null,null);t.default=o.exports}}]);