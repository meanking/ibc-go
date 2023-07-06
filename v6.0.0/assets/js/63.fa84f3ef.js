(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{623:function(e,n,t){"use strict";t.r(n);var a=t(0),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"understanding-active-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-active-channels"}},[e._v("#")]),e._v(" Understanding Active Channels")]),e._v(" "),t("p",[e._v("The Interchain Accounts module uses "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#ordering",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORDERED channels"),t("OutboundLink")],1),e._v(" to maintain the order of transactions when sending packets from a controller to a host chain. A limitation when using ORDERED channels is that when a packet times out the channel will be closed.")]),e._v(" "),t("p",[e._v("In the case of a channel closing, a controller chain needs to be able to regain access to the interchain account registered on this channel. "),t("code",[e._v("Active Channels")]),e._v(" enable this functionality.")]),e._v(" "),t("p",[e._v("When an Interchain Account is registered using "),t("code",[e._v("MsgRegisterInterchainAccount")]),e._v(", a new channel is created on a particular port. During the "),t("code",[e._v("OnChanOpenAck")]),e._v(" and "),t("code",[e._v("OnChanOpenConfirm")]),e._v(" steps (on controller & host chain respectively) the "),t("code",[e._v("Active Channel")]),e._v(" for this interchain account is stored in state.")]),e._v(" "),t("p",[e._v("It is possible to create a new channel using the same controller chain portID if the previously set "),t("code",[e._v("Active Channel")]),e._v(" is now in a "),t("code",[e._v("CLOSED")]),e._v(" state. This channel creation can be initialized programatically by sending a new "),t("code",[e._v("MsgChannelOpenInit")]),e._v(" message like so:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bXNnIDo9IGNoYW5uZWx0eXBlcy5OZXdNc2dDaGFubmVsT3BlbkluaXQocG9ydElELCBzdHJpbmcodmVyc2lvbkJ5dGVzKSwgY2hhbm5lbHR5cGVzLk9SREVSRUQsIFtdc3RyaW5ne2Nvbm5lY3Rpb25JRH0sIGljYXR5cGVzLkhvc3RQb3J0SUQsIGF1dGh0eXBlcy5OZXdNb2R1bGVBZGRyZXNzKGljYXR5cGVzLk1vZHVsZU5hbWUpLlN0cmluZygpKQpoYW5kbGVyIDo9IGtlZXBlci5tc2dSb3V0ZXIuSGFuZGxlcihtc2cpCnJlcywgZXJyIDo9IGhhbmRsZXIoY3R4LCBtc2cpCmlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),t("p",[e._v("Alternatively, any relayer operator may initiate a new channel handshake for this interchain account once the previously set "),t("code",[e._v("Active Channel")]),e._v(" is in a "),t("code",[e._v("CLOSED")]),e._v(" state. This is done by initiating the channel handshake on the controller chain using the same portID associated with the interchain account in question.")]),e._v(" "),t("p",[e._v("It is important to note that once a channel has been opened for a given interchain account, new channels can not be opened for this account until the currently set "),t("code",[e._v("Active Channel")]),e._v(" is set to "),t("code",[e._v("CLOSED")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"future-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future improvements")]),e._v(" "),t("p",[e._v("Future versions of the ICS-27 protocol and the Interchain Accounts module will likely use a new channel type that provides ordering of packets without the channel closing in the event of a packet timing out, thus removing the need for "),t("code",[e._v("Active Channels")]),e._v(" entirely.\nThe following is a list of issues which will provide the infrastructure to make this possible:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1599",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC Channel Upgrades"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1661",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implement ORDERED_ALLOW_TIMEOUT logic in 04-channel"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1662",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add ORDERED_ALLOW_TIMEOUT as supported ordering in 03-connection"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1663",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allow ICA channels to be opened as ORDERED_ALLOW_TIMEOUT"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);n.default=o.exports}}]);