(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{711:function(e,c,o){"use strict";o.r(c);var t=o(1),s=Object(t.a)({},(function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"migrating-from-v4-to-v5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-v4-to-v5"}},[e._v("#")]),e._v(" Migrating from v4 to v5")]),e._v(" "),o("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),o("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#chains"}},[e._v("Chains")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#ibc-apps"}},[e._v("IBC Apps")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#relayers"}},[e._v("Relayers")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#ibc-light-clients"}},[e._v("IBC Light Clients")])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3Y0IC0mZ3Q7IGdpdGh1Yi5jb20vY29zbW9zL2liYy1nby92NQo="}}),e._v(" "),o("h2",{attrs:{id:"chains"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),o("h3",{attrs:{id:"ante-decorator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ante-decorator"}},[e._v("#")]),e._v(" Ante decorator")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AnteDecorator")]),e._v(" type in "),o("code",[e._v("core/ante")]),e._v(" has been renamed to "),o("code",[e._v("RedundantRelayDecorator")]),e._v(" (and the corresponding constructor function to "),o("code",[e._v("NewRedundantRelayDecorator")]),e._v("). Therefore in the function that creates the instance of the "),o("code",[e._v("sdk.AnteHandler")]),e._v(" type (e.g. "),o("code",[e._v("NewAnteHandler")]),e._v(") the change would be like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdBbnRlSGFuZGxlcihvcHRpb25zIEhhbmRsZXJPcHRpb25zKSAoc2RrLkFudGVIYW5kbGVyLCBlcnJvcikgewogICAvLyBwYXJhbWV0ZXIgdmFsaWRhdGlvbgoKICAgYW50ZURlY29yYXRvcnMgOj0gW11zZGsuQW50ZURlY29yYXRvcnsKICAgICAgLy8gb3RoZXIgYW50ZSBkZWNvcmF0b3JzCi0gICAgIGliY2FudGUuTmV3QW50ZURlY29yYXRvcihvcHRzLklCQ2tlZXBlciksCisgICAgIGliY2FudGUuTmV3UmVkdW5kYW50UmVsYXlEZWNvcmF0b3Iob3B0aW9ucy5JQkNLZWVwZXIpLAogICB9CgogICByZXR1cm4gc2RrLkNoYWluQW50ZURlY29yYXRvcnMoYW50ZURlY29yYXRvcnMuLi4pLCBuaWwKfQo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AnteDecorator")]),e._v(" was actually renamed twice, but in "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1820",target:"_blank",rel:"noopener noreferrer"}},[e._v("this PR"),o("OutboundLink")],1),e._v(" you can see the changes made for the final rename.")]),e._v(" "),o("h2",{attrs:{id:"ibc-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),o("h3",{attrs:{id:"core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/core/keeper")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwKICAgc3Rha2luZ0tlZXBlciBjbGllbnR0eXBlcy5TdGFraW5nS2VlcGVyLCAKICAgdXBncmFkZUtlZXBlciBjbGllbnR0eXBlcy5VcGdyYWRlS2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCikgKktlZXBlcgo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),o("code",[e._v("modules/core")]),e._v(" has been removed.")]),e._v(" "),o("h3",{attrs:{id:"ics03-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics03-connection"}},[e._v("#")]),e._v(" ICS03 - Connection")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/core/03-connection/keeper")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwgCiAgIGNrIHR5cGVzLkNsaWVudEtlZXBlcgopIEtlZXBlcgo="}}),e._v(" "),o("h3",{attrs:{id:"ics04-channel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics04-channel"}},[e._v("#")]),e._v(" ICS04 - Channel")]),e._v(" "),o("p",[e._v("The function "),o("code",[e._v("NewPacketId")]),e._v(" in "),o("code",[e._v("modules/core/04-channel/types")]),e._v(" has been renamed to "),o("code",[e._v("NewPacketID")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSAgZnVuYyBOZXdQYWNrZXRJZCgKKyAgZnVuYyBOZXdQYWNrZXRJRCgKICBwb3J0SUQsIAogIGNoYW5uZWxJRCBzdHJpbmcsIAogIHNlcSB1aW50NjQKKSBQYWNrZXRJZCAK"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/core/04-channel/keeper")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIGNsaWVudEtlZXBlciB0eXBlcy5DbGllbnRLZWVwZXIsCiAgIGNvbm5lY3Rpb25LZWVwZXIgdHlwZXMuQ29ubmVjdGlvbktlZXBlciwKICAgcG9ydEtlZXBlciB0eXBlcy5Qb3J0S2VlcGVyLCAKICAgc2NvcGVkS2VlcGVyIGNhcGFiaWxpdHlrZWVwZXIuU2NvcGVkS2VlcGVyLAopIEtlZXBlciAK"}}),e._v(" "),o("h3",{attrs:{id:"ics20-transfer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics20-transfer"}},[e._v("#")]),e._v(" ICS20 - Transfer")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/apps/transfer/keeper")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksIAogICBwYXJhbVNwYWNlIHBhcmFtdHlwZXMuU3Vic3BhY2UsCiAgIGljczRXcmFwcGVyIHR5cGVzLklDUzRXcmFwcGVyLCAKICAgY2hhbm5lbEtlZXBlciB0eXBlcy5DaGFubmVsS2VlcGVyLAogICBwb3J0S2VlcGVyIHR5cGVzLlBvcnRLZWVwZXIsCiAgIGF1dGhLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlciwKICAgYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCikgS2VlcGVyCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("amount")]),e._v(" parameter of function "),o("code",[e._v("GetTransferCoin")]),e._v(" in "),o("code",[e._v("modules/apps/transfer/types")]),e._v(" is now of type "),o("code",[e._v("math.Int")]),e._v(" ("),o("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBHZXRUcmFuc2ZlckNvaW4oCiAgIHBvcnRJRCwgY2hhbm5lbElELCBiYXNlRGVub20gc3RyaW5nLAotICBhbW91bnQgc2RrLkludAorICBhbW91bnQgbWF0aC5JbnQKKSBzZGsuQ29pbgo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),o("code",[e._v("modules/apps/transfer")]),e._v(" has been removed.")]),e._v(" "),o("h3",{attrs:{id:"ics27-interchain-accounts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" and "),o("code",[e._v("msgRouter")]),e._v(" parameters of the "),o("code",[e._v("NewKeeper")]),e._v(" functions in")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("modules/apps/27-interchain-accounts/controller/keeper")])]),e._v(" "),o("li",[e._v("and "),o("code",[e._v("modules/apps/27-interchain-accounts/host/keeper")])])]),e._v(" "),o("p",[e._v("have changed type. The "),o("code",[e._v("key")]),e._v(" parameter is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("), and the "),o("code",[e._v("msgRouter")]),e._v(" parameter is now of type "),o("code",[e._v("*icatypes.MessageRouter")]),e._v(" (where "),o("code",[e._v("icatypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/ibc-go/v5/modules/apps/27-interchain-accounts/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gTmV3S2VlcGVyIGNyZWF0ZXMgYSBuZXcgaW50ZXJjaGFpbiBhY2NvdW50cyBjb250cm9sbGVyIEtlZXBlciBpbnN0YW5jZQpmdW5jIE5ld0tlZXBlcigKICAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAotICBrZXkgc2RrLlN0b3JlS2V5LAorICBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAogICBpY3M0V3JhcHBlciBpY2F0eXBlcy5JQ1M0V3JhcHBlciwKICAgY2hhbm5lbEtlZXBlciBpY2F0eXBlcy5DaGFubmVsS2VlcGVyLAogICBwb3J0S2VlcGVyIGljYXR5cGVzLlBvcnRLZWVwZXIsCiAgIHNjb3BlZEtlZXBlciBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlciwKLSAgbXNnUm91dGVyICpiYXNlYXBwLk1zZ1NlcnZpY2VSb3V0ZXIsCisgIG1zZ1JvdXRlciAqaWNhdHlwZXMuTWVzc2FnZVJvdXRlciwKKSBLZWVwZXIgIAo="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gTmV3S2VlcGVyIGNyZWF0ZXMgYSBuZXcgaW50ZXJjaGFpbiBhY2NvdW50cyBob3N0IEtlZXBlciBpbnN0YW5jZQpmdW5jIE5ld0tlZXBlcigKICAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAotICBrZXkgc2RrLlN0b3JlS2V5LAorICBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAogICBjaGFubmVsS2VlcGVyIGljYXR5cGVzLkNoYW5uZWxLZWVwZXIsCiAgIHBvcnRLZWVwZXIgaWNhdHlwZXMuUG9ydEtlZXBlciwKICAgYWNjb3VudEtlZXBlciBpY2F0eXBlcy5BY2NvdW50S2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCi0gIG1zZ1JvdXRlciAqYmFzZWFwcC5Nc2dTZXJ2aWNlUm91dGVyLAorICBtc2dSb3V0ZXIgKmljYXR5cGVzLk1lc3NhZ2VSb3V0ZXIsCikgS2VlcGVyIAo="}}),e._v(" "),o("p",[e._v("The new "),o("code",[e._v("MessageRouter")]),e._v(" interface is defined as:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNZXNzYWdlUm91dGVyIGludGVyZmFjZSB7CiAJSGFuZGxlcihtc2cgc2RrLk1zZykgYmFzZWFwcC5Nc2dTZXJ2aWNlSGFuZGxlcgp9Cg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),o("code",[e._v("modules/apps/27-interchain-accounts")]),e._v(" has been removed.")]),e._v(" "),o("p",[e._v("An additional parameter, "),o("code",[e._v("ics4Wrapper")]),e._v(" has been added to the "),o("code",[e._v("host")]),e._v(" submodule "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/apps/27-interchain-accounts/host/keeper")]),e._v(".\nThis allows the "),o("code",[e._v("host")]),e._v(" submodule to correctly unwrap the channel version for channel reopening handshakes in the "),o("code",[e._v("OnChanOpenTry")]),e._v(" callback.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywgCiAgIGtleSBzdG9yZXR5cGVzLlN0b3JlS2V5LCAKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAorICBpY3M0V3JhcHBlciBpY2F0eXBlcy5JQ1M0V3JhcHBlciwKICAgY2hhbm5lbEtlZXBlciBpY2F0eXBlcy5DaGFubmVsS2VlcGVyLCAKICAgcG9ydEtlZXBlciBpY2F0eXBlcy5Qb3J0S2VlcGVyLAogICBhY2NvdW50S2VlcGVyIGljYXR5cGVzLkFjY291bnRLZWVwZXIsIAogICBzY29wZWRLZWVwZXIgaWNhdHlwZXMuU2NvcGVkS2VlcGVyLCAKICAgbXNnUm91dGVyIGljYXR5cGVzLk1lc3NhZ2VSb3V0ZXIsCikgS2VlcGVyCg=="}}),e._v(" "),o("h4",{attrs:{id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-message-handler-responses-in-packet-acknowledgement"}},[e._v("#")]),e._v(" Cosmos SDK message handler responses in packet acknowledgement")]),e._v(" "),o("p",[e._v("The construction of the transaction response of a message execution on the host chain has changed. The "),o("code",[e._v("Data")]),e._v(" field in the "),o("code",[e._v("sdk.TxMsgData")]),e._v(" has been deprecated and since Cosmos SDK 0.46 the "),o("code",[e._v("MsgResponses")]),e._v(" field contains the message handler responses packed into "),o("code",[e._v("Any")]),e._v("s.")]),e._v(" "),o("p",[e._v("For chains on Cosmos SDK 0.45 and below, the message response was constructed like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhNc2dEYXRhIDo9ICZhbXA7c2RrLlR4TXNnRGF0YXsKICAgRGF0YTogbWFrZShbXSpzZGsuTXNnRGF0YSwgbGVuKG1zZ3MpKSwKfQoKZm9yIGksIG1zZyA6PSByYW5nZSBtc2dzIHsKICAgLy8gbWVzc2FnZSB2YWxpZGF0aW9uCgogICBtc2dSZXNwb25zZSwgZXJyIDo9IGsuZXhlY3V0ZU1zZyhjYWNoZUN0eCwgbXNnKQogICAvLyByZXR1cm4gaWYgZXJyICE9IG5pbAoKICAgdHhNc2dEYXRhLkRhdGFbaV0gPSAmYW1wO3Nkay5Nc2dEYXRhewogICAgICBNc2dUeXBlOiBzZGsuTXNnVHlwZVVSTChtc2cpLAogICAgICBEYXRhOiAgICBtc2dSZXNwb25zZSwKICAgfQp9CgovLyBlbWl0IGV2ZW50cwoKdHhSZXNwb25zZSwgZXJyIDo9IHByb3RvLk1hcnNoYWwodHhNc2dEYXRhKQovLyByZXR1cm4gaWYgZXJyICE9IG5pbAoKcmV0dXJuIHR4UmVzcG9uc2UsIG5pbAo="}}),e._v(" "),o("p",[e._v("And for chains on Cosmos SDK 0.46 and above, it is now done like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhNc2dEYXRhIDo9ICZhbXA7c2RrLlR4TXNnRGF0YXsKICAgTXNnUmVzcG9uc2VzOiBtYWtlKFtdKmNvZGVjdHlwZXMuQW55LCBsZW4obXNncykpLAp9Cgpmb3IgaSwgbXNnIDo9IHJhbmdlIG1zZ3MgewogICAvLyBtZXNzYWdlIHZhbGlkYXRpb24KCiAgIGFueSwgZXJyIDo9IGsuZXhlY3V0ZU1zZyhjYWNoZUN0eCwgbXNnKQogICAvLyByZXR1cm4gaWYgZXJyICE9IG5pbAoKICAgdHhNc2dEYXRhLk1zZ1Jlc3BvbnNlc1tpXSA9IGFueQp9CgovLyBlbWl0IGV2ZW50cwoKdHhSZXNwb25zZSwgZXJyIDo9IHByb3RvLk1hcnNoYWwodHhNc2dEYXRhKQovLyByZXR1cm4gaWYgZXJyICE9IG5pbAoKcmV0dXJuIHR4UmVzcG9uc2UsIG5pbAo="}}),e._v(" "),o("p",[e._v("When handling the acknowledgement in the "),o("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback of a custom ICA controller module, then depending on whether "),o("code",[e._v("txMsgData.Data")]),e._v(" is empty or not, the logic to handle the message handler response will be different. "),o("strong",[e._v("Only controller chains on Cosmos SDK 0.46 or above will be able to write the logic needed to handle the response from a host chain on Cosmos SDK 0.46 or above.")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGFjayBjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50CmlmIGVyciA6PSBjaGFubmVsdHlwZXMuU3ViTW9kdWxlQ2RjLlVubWFyc2hhbEpTT04oYWNrbm93bGVkZ2VtZW50LCAmYW1wO2Fjayk7IGVyciAhPSBuaWwgewogICByZXR1cm4gZXJyCn0KCnZhciB0eE1zZ0RhdGEgc2RrLlR4TXNnRGF0YQppZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKGFjay5HZXRSZXN1bHQoKSwgdHhNc2dEYXRhKTsgZXJyICE9IG5pbCB7CiAgIHJldHVybiBlcnIKfQoKc3dpdGNoIGxlbih0eE1zZ0RhdGEuRGF0YSkgewpjYXNlIDA6IC8vIGZvciBTREsgMC40NiBhbmQgYWJvdmUKICAgZm9yIF8sIG1zZ1Jlc3BvbnNlIDo9IHJhbmdlIHR4TXNnRGF0YS5Nc2dSZXNwb25zZXMgewogICAgICAvLyB1bm1hcnNoYWxsIG1zZ1Jlc3BvbnNlIGFuZCBleGVjdXRlIGxvZ2ljIGJhc2VkIG9uIHRoZSByZXNwb25zZSAKICAgfQogICByZXR1cm4gbmlsCmRlZmF1bHQ6IC8vIGZvciBTREsgMC40NSBhbmQgYmVsb3cKICAgZm9yIF8sIG1zZ0RhdGEgOj0gcmFuZ2UgdHhNc2dEYXRhLkRhdGEgewogICAgICAvLyB1bm1hcnNoYWxsIG1zZ0RhdGEgYW5kIGV4ZWN1dGUgbG9naWMgYmFzZWQgb24gdGhlIHJlc3BvbnNlIAogICB9Cn0K"}}),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/architecture/adr-003-ics27-acknowledgement.md/#next-major-version-format"}},[e._v("ADR-03")]),e._v(" for more information or the "),o("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html#onacknowledgementpacket"}},[e._v("corrresponding documentation about authentication modules")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"ics29-fee-middleware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics29-fee-middleware"}},[e._v("#")]),e._v(" ICS29 - Fee Middleware")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/apps/29-fee")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwKICAgaWNzNFdyYXBwZXIgdHlwZXMuSUNTNFdyYXBwZXIsCiAgIGNoYW5uZWxLZWVwZXIgdHlwZXMuQ2hhbm5lbEtlZXBlciwKICAgcG9ydEtlZXBlciB0eXBlcy5Qb3J0S2VlcGVyLAogICBhdXRoS2VlcGVyIHR5cGVzLkFjY291bnRLZWVwZXIsCiAgIGJhbmtLZWVwZXIgdHlwZXMuQmFua0tlZXBlciwKKSBLZWVwZXIgCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),o("code",[e._v("modules/apps/29-fee")]),e._v(" has been removed.")]),e._v(" "),o("h3",{attrs:{id:"ibc-testing-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-testing-package"}},[e._v("#")]),e._v(" IBC testing package")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("MockIBCApp")]),e._v(" type has been renamed to "),o("code",[e._v("IBCApp")]),e._v(" (and the corresponding constructor function to "),o("code",[e._v("NewIBCApp")]),e._v("). This has resulted therefore in:")]),e._v(" "),o("ul",[o("li",[e._v("The "),o("code",[e._v("IBCApp")]),e._v(" field of the "),o("code",[e._v("*IBCModule")]),e._v(" in "),o("code",[e._v("testing/mock")]),e._v(" to change its type as well to "),o("code",[e._v("*IBCApp")]),e._v(":")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBJQkNNb2R1bGUgc3RydWN0IHsKICAgYXBwTW9kdWxlICpBcHBNb2R1bGUKLSAgSUJDQXBwICAgICpNb2NrSUJDQXBwIC8vIGJhc2UgYXBwbGljYXRpb24gb2YgYW4gSUJDIG1pZGRsZXdhcmUgc3RhY2sKKyAgSUJDQXBwICAgICpJQkNBcHAgLy8gYmFzZSBhcHBsaWNhdGlvbiBvZiBhbiBJQkMgbWlkZGxld2FyZSBzdGFjawp9Cg=="}}),e._v(" "),o("ul",[o("li",[e._v("The "),o("code",[e._v("app")]),e._v(" parameter to "),o("code",[e._v("*NewIBCModule")]),e._v(" in "),o("code",[e._v("testing/mock")]),e._v(" to change its type as well to "),o("code",[e._v("*IBCApp")]),e._v(":")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdJQkNNb2R1bGUoCiAgIGFwcE1vZHVsZSAqQXBwTW9kdWxlLAotICBhcHAgKk1vY2tJQkNBcHAKKyAgYXBwICpJQkNBcHAKKSBJQkNNb2R1bGUK"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("MockEmptyAcknowledgement")]),e._v(" type has been renamed to "),o("code",[e._v("EmptyAcknowledgement")]),e._v(" (and the corresponding constructor function to "),o("code",[e._v("NewEmptyAcknowledgement")]),e._v(").")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("TestingApp")]),e._v(" interface in "),o("code",[e._v("testing")]),e._v(" has gone through some modifications:")]),e._v(" "),o("ul",[o("li",[e._v("The return type of the function "),o("code",[e._v("GetStakingKeeper")]),e._v(" is not the concrete type "),o("code",[e._v("stakingkeeper.Keeper")]),e._v(" anymore (where "),o("code",[e._v("stakingkeeper")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/x/staking/keeper"')]),e._v("), but it has been changed to the interface "),o("code",[e._v("ibctestingtypes.StakingKeeper")]),e._v(" (where "),o("code",[e._v("ibctestingtypes")]),e._v(" is an import alias for "),o("code",[e._v('""github.com/cosmos/ibc-go/v5/testing/types"')]),e._v("). See this "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2028",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),o("OutboundLink")],1),e._v(" for more details. The "),o("code",[e._v("StakingKeeper")]),e._v(" interface is defined as:")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGFraW5nS2VlcGVyIGludGVyZmFjZSB7CiAJR2V0SGlzdG9yaWNhbEluZm8oY3R4IHNkay5Db250ZXh0LCBoZWlnaHQgaW50NjQpIChzdGFraW5ndHlwZXMuSGlzdG9yaWNhbEluZm8sIGJvb2wpCn0K"}}),e._v(" "),o("ul",[o("li",[e._v("The return type of the function "),o("code",[e._v("LastCommitID")]),e._v(" has changed to "),o("code",[e._v("storetypes.CommitID")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v(").")])]),e._v(" "),o("p",[e._v("See the following "),o("code",[e._v("git diff")]),e._v(" for more details:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBUZXN0aW5nQXBwIGludGVyZmFjZSB7CiAgIGFiY2kuQXBwbGljYXRpb24KICAgCiAgIC8vIGliYy1nbyBhZGRpdGlvbnMKICAgR2V0QmFzZUFwcCgpICpiYXNlYXBwLkJhc2VBcHAKLSAgR2V0U3Rha2luZ0tlZXBlcigpIHN0YWtpbmdrZWVwZXIuS2VlcGVyCisgIEdldFN0YWtpbmdLZWVwZXIoKSBpYmN0ZXN0aW5ndHlwZXMuU3Rha2luZ0tlZXBlcgogICBHZXRJQkNLZWVwZXIoKSAqa2VlcGVyLktlZXBlcgogICBHZXRTY29wZWRJQkNLZWVwZXIoKSBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlcgogICBHZXRUeENvbmZpZygpIGNsaWVudC5UeENvbmZpZwoKICAgLy8gSW1wbGVtZW50ZWQgYnkgU2ltQXBwCiAgIEFwcENvZGVjKCkgY29kZWMuQ29kZWMKICAKICAgLy8gSW1wbGVtZW50ZWQgYnkgQmFzZUFwcAotICBMYXN0Q29tbWl0SUQoKSBzZGsuQ29tbWl0SUQKKyAgTGFzdENvbW1pdElEKCkgc3RvcmV0eXBlcy5Db21taXRJRAogICBMYXN0QmxvY2tIZWlnaHQoKSBpbnQ2NAp9Cg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("powerReduction")]),e._v(" parameter of the function "),o("code",[e._v("SetupWithGenesisValSet")]),e._v(" in "),o("code",[e._v("testing")]),e._v(" is now of type "),o("code",[e._v("math.Int")]),e._v(" ("),o("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBTZXR1cFdpdGhHZW5lc2lzVmFsU2V0KAogICB0ICp0ZXN0aW5nLlQsCiAgIHZhbFNldCAqdG10eXBlcy5WYWxpZGF0b3JTZXQsCiAgIGdlbkFjY3MgW11hdXRodHlwZXMuR2VuZXNpc0FjY291bnQsCiAgIGNoYWluSUQgc3RyaW5nLAotICBwb3dlclJlZHVjdGlvbiBzZGsuSW50LAorICBwb3dlclJlZHVjdGlvbiBtYXRoLkludCwKICAgYmFsYW5jZXMgLi4uYmFua3R5cGVzLkJhbGFuY2UKKSBUZXN0aW5nQXBwCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("accAmt")]),e._v(" parameter of the functions")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("AddTestAddrsFromPubKeys")]),e._v(" ,")]),e._v(" "),o("li",[o("code",[e._v("AddTestAddrs")])]),e._v(" "),o("li",[e._v("and "),o("code",[e._v("AddTestAddrsIncremental")])])]),e._v(" "),o("p",[e._v("in "),o("code",[e._v("testing/simapp")]),e._v(" are now of type "),o("code",[e._v("math.Int")]),e._v(" ("),o("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBBZGRUZXN0QWRkcnNGcm9tUHViS2V5cygKICAgYXBwICpTaW1BcHAsCiAgIGN0eCBzZGsuQ29udGV4dCwKICAgcHViS2V5cyBbXWNyeXB0b3R5cGVzLlB1YktleSwKLSAgYWNjQW10IHNkay5JbnQsCisgIGFjY0FtdCBtYXRoLkludAopIApmdW5jIGFkZFRlc3RBZGRycygKICAgYXBwICpTaW1BcHAsCiAgIGN0eCBzZGsuQ29udGV4dCwKICAgYWNjTnVtIGludCwKLSAgYWNjQW10IHNkay5JbnQsCisgIGFjY0FtdCBtYXRoLkludCwKICAgc3RyYXRlZ3kgR2VuZXJhdGVBY2NvdW50U3RyYXRlZ3kKKSBbXXNkay5BY2NBZGRyZXNzCmZ1bmMgQWRkVGVzdEFkZHJzSW5jcmVtZW50YWwoCiAgIGFwcCAqU2ltQXBwLAogICBjdHggc2RrLkNvbnRleHQsCiAgIGFjY051bSBpbnQsCi0gIGFjY0FtdCBzZGsuSW50LAorICBhY2NBbXQgbWF0aC5JbnQKKSBbXXNkay5BY2NBZGRyZXNzCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),o("code",[e._v("testing/mock")]),e._v(" has been removed.")]),e._v(" "),o("h2",{attrs:{id:"relayers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),o("ul",[o("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),o("h2",{attrs:{id:"ibc-light-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),o("h3",{attrs:{id:"ics02-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ics02-client"}},[e._v("#")]),e._v(" ICS02 - Client")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("key")]),e._v(" parameter of the "),o("code",[e._v("NewKeeper")]),e._v(" function in "),o("code",[e._v("modules/core/02-client/keeper")]),e._v(" is now of type "),o("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),o("code",[e._v("storetypes")]),e._v(" is an import alias for "),o("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwKICAgc2sgdHlwZXMuU3Rha2luZ0tlZXBlciwKICAgdWsgdHlwZXMuVXBncmFkZUtlZXBlcgopIEtlZXBlcgo="}})],1)}),[],!1,null,null,null);c.default=s.exports}}]);