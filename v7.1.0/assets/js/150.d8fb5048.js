(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{713:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrating-from-ibc-go-v6-to-v7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v6-to-v7"}},[e._v("#")]),e._v(" Migrating from ibc-go v6 to v7")]),e._v(" "),a("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),a("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),a("ul",[a("li",[e._v("Chains")]),e._v(" "),a("li",[e._v("IBC Apps")]),e._v(" "),a("li",[e._v("Relayers")]),e._v(" "),a("li",[e._v("IBC Light Clients")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),a("h2",{attrs:{id:"chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),a("p",[e._v("Chains will perform automatic migrations to remove existing localhost clients and to migrate the solomachine to v3 of the protobuf definition.")]),e._v(" "),a("p",[e._v("An optional upgrade handler has been added to prune expired tendermint consensus states. It may be used during any upgrade (from v7 onwards).\nAdd the following to the function call to the upgrade handler in "),a("code",[e._v("app/app.go")]),e._v(", to perform the optional state pruning.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgogICAgaWJjdG1taWdyYXRpb25zICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby92Ni9tb2R1bGVzL2xpZ2h0LWNsaWVudHMvMDctdGVuZGVybWludC9taWdyYXRpb25zJnF1b3Q7CikKCi8vIC4uLgoKYXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoCiAgICB1cGdyYWRlTmFtZSwKICAgIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBfIHVwZ3JhZGV0eXBlcy5QbGFuLCBfIG1vZHVsZS5WZXJzaW9uTWFwKSAobW9kdWxlLlZlcnNpb25NYXAsIGVycm9yKSB7CiAgICAgICAgLy8gcHJ1bmUgZXhwaXJlZCB0ZW5kZXJtaW50IGNvbnNlbnN1cyBzdGF0ZXMgdG8gc2F2ZSBzdG9yYWdlIHNwYWNlCiAgICAgICAgXywgZXJyIDo9IGliY3RtbWlncmF0aW9ucy5QcnVuZUV4cGlyZWRDb25zZW5zdXNTdGF0ZXMoY3R4LCBhcHAuQ29kZWMsIGFwcC5JQkNLZWVwZXIuQ2xpZW50S2VlcGVyKQogICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgICAgICB9CgogICAgICAgIHJldHVybiBhcHAubW0uUnVuTWlncmF0aW9ucyhjdHgsIGFwcC5jb25maWd1cmF0b3IsIGZyb21WTSkKICAgIH0sCikK"}}),e._v(" "),a("p",[e._v("Checkout the logs to see how many consensus states are pruned.")]),e._v(" "),a("h3",{attrs:{id:"light-client-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-client-registration"}},[e._v("#")]),e._v(" Light client registration")]),e._v(" "),a("p",[e._v("Chains must explicitly register the types of any light client modules it wishes to integrate.")]),e._v(" "),a("h4",{attrs:{id:"tendermint-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-registration"}},[e._v("#")]),e._v(" Tendermint registration")]),e._v(" "),a("p",[e._v("To register the tendermint client, modify the "),a("code",[e._v("app.go")]),e._v(" file to include the tendermint "),a("code",[e._v("AppModuleBasic")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgorICAgaWJjdG0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3Y2L21vZHVsZXMvbGlnaHQtY2xpZW50cy8wNy10ZW5kZXJtaW50JnF1b3Q7CikKCi8vIC4uLgoKTW9kdWxlQmFzaWNzID0gbW9kdWxlLk5ld0Jhc2ljTWFuYWdlcigKICAgIC4uLgogICAgaWJjLkFwcE1vZHVsZUJhc2lje30sCisgICBpYmN0bS5BcHBNb2R1bGVCYXNpY3t9LAogICAgLi4uCikK"}}),e._v(" "),a("p",[e._v("It may be useful to reference the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2825",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),a("OutboundLink")],1),e._v(" which added the "),a("code",[e._v("AppModuleBasic")]),e._v(" for the tendermint client.")]),e._v(" "),a("h4",{attrs:{id:"solo-machine-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solo-machine-registration"}},[e._v("#")]),e._v(" Solo machine registration")]),e._v(" "),a("p",[e._v("To register the solo machine client, modify the "),a("code",[e._v("app.go")]),e._v(" file to include the solo machine "),a("code",[e._v("AppModuleBasic")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgorICAgc29sb21hY2hpbmUgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3Y2L21vZHVsZXMvbGlnaHQtY2xpZW50cy8wNi1zb2xvbWFjaGluZSZxdW90OwopCgovLyAuLi4KCk1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCiAgICAuLi4KICAgIGliYy5BcHBNb2R1bGVCYXNpY3t9LAorICAgc29sb21hY2hpbmUuQXBwTW9kdWxlQmFzaWN7fSwKICAgIC4uLgopCg=="}}),e._v(" "),a("p",[e._v("It may be useful to reference the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2826",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),a("OutboundLink")],1),e._v(" which added the "),a("code",[e._v("AppModuleBasic")]),e._v(" for the solo machine client.")]),e._v(" "),a("h3",{attrs:{id:"testing-package-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-package-api"}},[e._v("#")]),e._v(" Testing package API")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SetChannelClosed")]),e._v(" utility method in "),a("code",[e._v("testing/endpoint.go")]),e._v(" has been updated to "),a("code",[e._v("SetChannelState")]),e._v(", which will take a "),a("code",[e._v("channeltypes.State")]),e._v(" argument so that the "),a("code",[e._v("ChannelState")]),e._v(" can be set to any of the possible channel states.")]),e._v(" "),a("h2",{attrs:{id:"ibc-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"ibc-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),a("h3",{attrs:{id:"clientstate-interface-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientstate-interface-changes"}},[e._v("#")]),e._v(" "),a("code",[e._v("ClientState")]),e._v(" interface changes")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("VerifyUpgradeAndUpdateState")]),e._v(" function has been modified. The client state and consensus state return values have been removed.")]),e._v(" "),a("p",[e._v("Light clients "),a("strong",[e._v("must")]),e._v(" handle all management of client and consensus states including the setting of updated client state and consensus state in the client store.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Initialize")]),e._v(" method is now expected to set the initial client state, consensus state and any client-specific metadata in the provided store upon client creation.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("CheckHeaderAndUpdateState")]),e._v(" method has been split into 4 new methods:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("VerifyClientMessage")]),e._v(" verifies a "),a("code",[e._v("ClientMessage")]),e._v(". A "),a("code",[e._v("ClientMessage")]),e._v(" could be a "),a("code",[e._v("Header")]),e._v(", "),a("code",[e._v("Misbehaviour")]),e._v(", or batch update. Calls to "),a("code",[e._v("CheckForMisbehaviour")]),e._v(", "),a("code",[e._v("UpdateState")]),e._v(", and "),a("code",[e._v("UpdateStateOnMisbehaviour")]),e._v(" will assume that the content of the "),a("code",[e._v("ClientMessage")]),e._v(" has been verified and can be trusted. An error should be returned if the "),a("code",[e._v("ClientMessage")]),e._v(" fails to verify.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CheckForMisbehaviour")]),e._v(" checks for evidence of a misbehaviour in "),a("code",[e._v("Header")]),e._v(" or "),a("code",[e._v("Misbehaviour")]),e._v(" types.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("UpdateStateOnMisbehaviour")]),e._v(" performs appropriate state changes on a "),a("code",[e._v("ClientState")]),e._v(" given that misbehaviour has been detected and verified.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("UpdateState")]),e._v(" updates and stores as necessary any associated information for an IBC client, such as the "),a("code",[e._v("ClientState")]),e._v(" and corresponding "),a("code",[e._v("ConsensusState")]),e._v(". An error is returned if "),a("code",[e._v("ClientMessage")]),e._v(" is of type "),a("code",[e._v("Misbehaviour")]),e._v(". Upon successful update, a list containing the updated consensus state height is returned.")])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("CheckMisbehaviourAndUpdateState")]),e._v(" function has been removed from "),a("code",[e._v("ClientState")]),e._v(" interface. This functionality is now encapsulated by the usage of "),a("code",[e._v("VerifyClientMessage")]),e._v(", "),a("code",[e._v("CheckForMisbehaviour")]),e._v(", "),a("code",[e._v("UpdateStateOnMisbehaviour")]),e._v(".")]),e._v(" "),a("p",[e._v("The function "),a("code",[e._v("GetTimestampAtHeight")]),e._v(" has been added to the "),a("code",[e._v("ClientState")]),e._v(" interface. It should return the timestamp for a consensus state associated with the provided height.")]),e._v(" "),a("p",[e._v("Prior to ibc-go/v7 the "),a("code",[e._v("ClientState")]),e._v(" interface defined a method for each data type which was being verified in the counterparty state store.\nThe state verification functions for all IBC data types have been consolidated into two generic methods, "),a("code",[e._v("VerifyMembership")]),e._v(" and "),a("code",[e._v("VerifyNonMembership")]),e._v(".\nBoth are expected to be provided with a standardised key path, "),a("code",[e._v("exported.Path")]),e._v(", as defined in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 24 host requirements"),a("OutboundLink")],1),e._v(". Membership verification requires callers to provide the marshalled value "),a("code",[e._v("[]byte")]),e._v(". Delay period values should be zero for non-packet processing verification. A zero proof height is now allowed by core IBC and may be passed into "),a("code",[e._v("VerifyMembership")]),e._v(" and "),a("code",[e._v("VerifyNonMembership")]),e._v(". Light clients are responsible for returning an error if a zero proof height is invalid behaviour.")]),e._v(" "),a("p",[e._v("See below for an example of how ibc-go now performs channel state verification.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bWVya2xlUGF0aCA6PSBjb21taXRtZW50dHlwZXMuTmV3TWVya2xlUGF0aChob3N0LkNoYW5uZWxQYXRoKHBvcnRJRCwgY2hhbm5lbElEKSkKbWVya2xlUGF0aCwgZXJyIDo9IGNvbW1pdG1lbnR0eXBlcy5BcHBseVByZWZpeChjb25uZWN0aW9uLkdldENvdW50ZXJwYXJ0eSgpLkdldFByZWZpeCgpLCBtZXJrbGVQYXRoKQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKfQoKY2hhbm5lbEVuZCwgb2sgOj0gY2hhbm5lbC4oY2hhbm5lbHR5cGVzLkNoYW5uZWwpCmlmICFvayB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKHNka2Vycm9ycy5FcnJJbnZhbGlkVHlwZSwgJnF1b3Q7aW52YWxpZCBjaGFubmVsIHR5cGUgJVQmcXVvdDssIGNoYW5uZWwpCn0KCmJ6LCBlcnIgOj0gay5jZGMuTWFyc2hhbCgmYW1wO2NoYW5uZWxFbmQpCmlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9CgppZiBlcnIgOj0gY2xpZW50U3RhdGUuVmVyaWZ5TWVtYmVyc2hpcCgKICAgIGN0eCwgY2xpZW50U3RvcmUsIGsuY2RjLCBoZWlnaHQsCiAgICAwLCAwLCAvLyBza2lwIGRlbGF5IHBlcmlvZCBjaGVja3MgZm9yIG5vbi1wYWNrZXQgcHJvY2Vzc2luZyB2ZXJpZmljYXRpb24KICAgIHByb29mLCBtZXJrbGVQYXRoLCBieiwKKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKGVyciwgJnF1b3Q7ZmFpbGVkIGNoYW5uZWwgc3RhdGUgdmVyaWZpY2F0aW9uIGZvciBjbGllbnQgKCVzKSZxdW90OywgY2xpZW50SUQpCn0K"}}),e._v(" "),a("h3",{attrs:{id:"header-and-misbehaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-and-misbehaviour"}},[e._v("#")]),e._v(" "),a("code",[e._v("Header")]),e._v(" and "),a("code",[e._v("Misbehaviour")])]),e._v(" "),a("p",[a("code",[e._v("exported.Header")]),e._v(" and "),a("code",[e._v("exported.Misbehaviour")]),e._v(" interface types have been merged and renamed to "),a("code",[e._v("ClientMessage")]),e._v(" interface.")]),e._v(" "),a("p",[a("code",[e._v("GetHeight")]),e._v(" function has been removed from "),a("code",[e._v("exported.Header")]),e._v(" and thus is not included in the "),a("code",[e._v("ClientMessage")]),e._v(" interface")]),e._v(" "),a("h3",{attrs:{id:"consensusstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensusstate"}},[e._v("#")]),e._v(" "),a("code",[e._v("ConsensusState")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("GetRoot")]),e._v(" function has been removed from consensus state interface since it was not used by core IBC.")]),e._v(" "),a("h3",{attrs:{id:"client-keeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-keeper"}},[e._v("#")]),e._v(" Client keeper")]),e._v(" "),a("p",[e._v("Keeper function "),a("code",[e._v("CheckMisbehaviourAndUpdateState")]),e._v(" has been removed since function "),a("code",[e._v("UpdateClient")]),e._v(" can now handle updating "),a("code",[e._v("ClientState")]),e._v(" on "),a("code",[e._v("ClientMessage")]),e._v(" type which can be any "),a("code",[e._v("Misbehaviour")]),e._v(" implementations.")]),e._v(" "),a("h3",{attrs:{id:"sdk-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk-message"}},[e._v("#")]),e._v(" SDK message")]),e._v(" "),a("p",[a("code",[e._v("MsgSubmitMisbehaviour")]),e._v(" is deprecated since "),a("code",[e._v("MsgUpdateClient")]),e._v(" can now submit a "),a("code",[e._v("ClientMessage")]),e._v(" type which can be any "),a("code",[e._v("Misbehaviour")]),e._v(" implementations.")]),e._v(" "),a("p",[e._v("The field "),a("code",[e._v("header")]),e._v(" in "),a("code",[e._v("MsgUpdateClient")]),e._v(" has been renamed to "),a("code",[e._v("client_message")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"solomachine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solomachine"}},[e._v("#")]),e._v(" Solomachine")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("06-solomachine")]),e._v(" client implementation has been simplified in ibc-go/v7. In-place store migrations have been added to migrate solomachine clients from "),a("code",[e._v("v2")]),e._v(" to "),a("code",[e._v("v3")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"clientstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientstate"}},[e._v("#")]),e._v(" "),a("code",[e._v("ClientState")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ClientState")]),e._v(" protobuf message definition has been updated to remove the deprecated "),a("code",[e._v("bool")]),e._v(" field "),a("code",[e._v("allow_update_after_proposal")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"bWVzc2FnZSBDbGllbnRTdGF0ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICB1aW50NjQgc2VxdWVuY2UgICAgICAgICAgICAgICAgICA9IDE7CiAgYm9vbCBpc19mcm96ZW4gICAgICAgICAgICAgICAgICAgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2lzX2Zyb3plblwmcXVvdDsmcXVvdDtdOwogIENvbnNlbnN1c1N0YXRlIGNvbnNlbnN1c19zdGF0ZSAgID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjb25zZW5zdXNfc3RhdGVcJnF1b3Q7JnF1b3Q7XTsKLSBib29sIGFsbG93X3VwZGF0ZV9hZnRlcl9wcm9wb3NhbCA9IDQgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7YWxsb3dfdXBkYXRlX2FmdGVyX3Byb3Bvc2FsXCZxdW90OyZxdW90O107Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"header-and-misbehaviour-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-and-misbehaviour-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("Header")]),e._v(" and "),a("code",[e._v("Misbehaviour")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("06-solomachine")]),e._v(" protobuf message "),a("code",[e._v("Header")]),e._v(" has been updated to remove the "),a("code",[e._v("sequence")]),e._v(" field. This field was seen as redundant as the implementation can safely rely on the "),a("code",[e._v("sequence")]),e._v(" value maintained within the "),a("code",[e._v("ClientState")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"bWVzc2FnZSBIZWFkZXIgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKIAotIHVpbnQ2NCAgICAgICAgICAgICAgc2VxdWVuY2UgICAgICAgID0gMTsKLSB1aW50NjQgICAgICAgICAgICAgIHRpbWVzdGFtcCAgICAgICA9IDI7Ci0gYnl0ZXMgICAgICAgICAgICAgICBzaWduYXR1cmUgICAgICAgPSAzOwotIGdvb2dsZS5wcm90b2J1Zi5BbnkgbmV3X3B1YmxpY19rZXkgID0gNCBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtuZXdfcHVibGljX2tleVwmcXVvdDsmcXVvdDtdOwotIHN0cmluZyAgICAgICAgICAgICAgbmV3X2RpdmVyc2lmaWVyID0gNSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtuZXdfZGl2ZXJzaWZpZXJcJnF1b3Q7JnF1b3Q7XTsKKyB1aW50NjQgICAgICAgICAgICAgIHRpbWVzdGFtcCAgICAgICA9IDE7CisgYnl0ZXMgICAgICAgICAgICAgICBzaWduYXR1cmUgICAgICAgPSAyOworIGdvb2dsZS5wcm90b2J1Zi5BbnkgbmV3X3B1YmxpY19rZXkgID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtuZXdfcHVibGljX2tleVwmcXVvdDsmcXVvdDtdOworIHN0cmluZyAgICAgICAgICAgICAgbmV3X2RpdmVyc2lmaWVyID0gNCBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtuZXdfZGl2ZXJzaWZpZXJcJnF1b3Q7JnF1b3Q7XTsKfQo="}}),e._v(" "),a("p",[e._v("Similarly, the "),a("code",[e._v("Misbehaviour")]),e._v(" protobuf message has been updated to remove the "),a("code",[e._v("client_id")]),e._v(" field.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"bWVzc2FnZSBNaXNiZWhhdmlvdXIgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKICAKLSBzdHJpbmcgICAgICAgICAgIGNsaWVudF9pZCAgICAgICAgID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjbGllbnRfaWRcJnF1b3Q7JnF1b3Q7XTsKLSB1aW50NjQgICAgICAgICAgIHNlcXVlbmNlICAgICAgICAgID0gMjsKLSBTaWduYXR1cmVBbmREYXRhIHNpZ25hdHVyZV9vbmUgICAgID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtzaWduYXR1cmVfb25lXCZxdW90OyZxdW90O107Ci0gU2lnbmF0dXJlQW5kRGF0YSBzaWduYXR1cmVfdHdvICAgICA9IDQgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7c2lnbmF0dXJlX3R3b1wmcXVvdDsmcXVvdDtdOworIHVpbnQ2NCAgICAgICAgICAgc2VxdWVuY2UgICAgICAgICAgPSAxOworIFNpZ25hdHVyZUFuZERhdGEgc2lnbmF0dXJlX29uZSAgICAgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3NpZ25hdHVyZV9vbmVcJnF1b3Q7JnF1b3Q7XTsKKyBTaWduYXR1cmVBbmREYXRhIHNpZ25hdHVyZV90d28gICAgID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtzaWduYXR1cmVfdHdvXCZxdW90OyZxdW90O107Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"signbytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signbytes"}},[e._v("#")]),e._v(" "),a("code",[e._v("SignBytes")])]),e._v(" "),a("p",[e._v("Most notably, the "),a("code",[e._v("SignBytes")]),e._v(" protobuf definition has been modified to replace the "),a("code",[e._v("data_type")]),e._v(" field with a new field, "),a("code",[e._v("path")]),e._v(". The "),a("code",[e._v("path")]),e._v(" field is defined as "),a("code",[e._v("bytes")]),e._v(" and represents a serialized "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24"),a("OutboundLink")],1),e._v(" standardized key path under which the "),a("code",[e._v("data")]),e._v(" is stored.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"bWVzc2FnZSBTaWduQnl0ZXMgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgdWludDY0IHNlcXVlbmNlICAgID0gMTsKICB1aW50NjQgdGltZXN0YW1wICAgPSAyOwogIHN0cmluZyBkaXZlcnNpZmllciA9IDM7Ci0gRGF0YVR5cGUgZGF0YV90eXBlID0gNCBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtkYXRhX3R5cGVcJnF1b3Q7JnF1b3Q7XTsKKyBieXRlcyBwYXRoICAgICAgICAgPSA0OwogIGJ5dGVzIGRhdGEgICAgICAgICA9IDU7Cn0K"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("DataType")]),e._v(" enum and all associated data types have been removed, greatly reducing the number of message definitions and complexity in constructing the "),a("code",[e._v("SignBytes")]),e._v(" message type. Likewise, solomachine implementations must now use the serialized "),a("code",[e._v("path")]),e._v(" value when constructing "),a("code",[e._v("SignatureAndData")]),e._v(" for signature verification of "),a("code",[e._v("SignBytes")]),e._v(" data.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"bWVzc2FnZSBTaWduYXR1cmVBbmREYXRhIHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CiAKICBieXRlcyAgICBzaWduYXR1cmUgPSAxOwotIERhdGFUeXBlIGRhdGFfdHlwZSA9IDIgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7ZGF0YV90eXBlXCZxdW90OyZxdW90O107CisgYnl0ZXMgICAgcGF0aCAgICAgID0gMjsKICBieXRlcyAgICBkYXRhICAgICAgPSAzOwogIHVpbnQ2NCAgIHRpbWVzdGFtcCA9IDQ7Cn0K"}}),e._v(" "),a("p",[e._v("For more information, please refer to "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/docs/architecture/adr-007-solomachine-signbytes.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-007"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"ibc-module-constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-module-constants"}},[e._v("#")]),e._v(" IBC module constants")]),e._v(" "),a("p",[e._v("IBC module constants have been moved from the "),a("code",[e._v("host")]),e._v(" package to the "),a("code",[e._v("exported")]),e._v(" package. Any usages will need to be updated.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgotICAgaG9zdCAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9pYmMtZ28vdjYvbW9kdWxlcy9jb3JlLzI0LWhvc3QmcXVvdDsKKyAgIGliY2V4cG9ydGVkICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby92Ni9tb2R1bGVzL2NvcmUvZXhwb3J0ZWQmcXVvdDsKICAgIC8vIC4uLgopCgotIGhvc3QuTW9kdWxlTmFtZQorIGliY2V4cG9ydGVkLk1vZHVsZU5hbWUKCi0gaG9zdC5TdG9yZUtleQorIGliY2V4cG9ydGVkLlN0b3JlS2V5CgotIGhvc3QuUXVlcmllclJvdXRlCisgaWJjZXhwb3J0ZWQuUXVlcmllclJvdXRlCgotIGhvc3QuUm91dGVyS2V5CisgaWJjZXhwb3J0ZWQuUm91dGVyS2V5Cg=="}}),e._v(" "),a("h2",{attrs:{id:"upgrading-to-cosmos-sdk-0-47"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-cosmos-sdk-0-47"}},[e._v("#")]),e._v(" Upgrading to Cosmos SDK 0.47")]),e._v(" "),a("p",[e._v("The following should be considered as complementary to "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc2/UPGRADING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK v0.47 UPGRADING.md"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"protobuf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),a("p",[e._v("Protobuf code generation, linting and formatting have been updated to leverage the "),a("code",[e._v("ghcr.io/cosmos/proto-builder:0.11.5")]),e._v(" docker container. IBC protobuf definitions are now packaged and published to "),a("a",{attrs:{href:"https://buf.build/cosmos/ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf.build/cosmos/ibc"),a("OutboundLink")],1),e._v(" via CI workflows. The "),a("code",[e._v("third_party/proto")]),e._v(" directory has been removed in favour of dependency management using "),a("a",{attrs:{href:"https://docs.buf.build/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf.build"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"app-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-modules"}},[e._v("#")]),e._v(" App modules")]),e._v(" "),a("p",[e._v("Legacy APIs of the "),a("code",[e._v("AppModule")]),e._v(" interface have been removed from ibc-go modules. For example, for")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSAvLyBSb3V0ZSBpbXBsZW1lbnRzIHRoZSBBcHBNb2R1bGUgaW50ZXJmYWNlCi0gZnVuYyAoYW0gQXBwTW9kdWxlKSBSb3V0ZSgpIHNkay5Sb3V0ZSB7Ci0gICAgIHJldHVybiBzZGsuUm91dGV7fQotIH0KLQotIC8vIFF1ZXJpZXJSb3V0ZSBpbXBsZW1lbnRzIHRoZSBBcHBNb2R1bGUgaW50ZXJmYWNlCi0gZnVuYyAoQXBwTW9kdWxlKSBRdWVyaWVyUm91dGUoKSBzdHJpbmcgewotICAgICByZXR1cm4gdHlwZXMuUXVlcmllclJvdXRlCi0gfQotCi0gLy8gTGVnYWN5UXVlcmllckhhbmRsZXIgaW1wbGVtZW50cyB0aGUgQXBwTW9kdWxlIGludGVyZmFjZQotIGZ1bmMgKGFtIEFwcE1vZHVsZSkgTGVnYWN5UXVlcmllckhhbmRsZXIoKmNvZGVjLkxlZ2FjeUFtaW5vKSBzZGsuUXVlcmllciB7Ci0gICAgIHJldHVybiBuaWwKLSB9Ci0KLSAvLyBQcm9wb3NhbENvbnRlbnRzIGRvZXNuJ3QgcmV0dXJuIGFueSBjb250ZW50IGZ1bmN0aW9ucyBmb3IgZ292ZXJuYW5jZSBwcm9wb3NhbHMuCi0gZnVuYyAoQXBwTW9kdWxlKSBQcm9wb3NhbENvbnRlbnRzKF8gbW9kdWxlLlNpbXVsYXRpb25TdGF0ZSkgW11zaW10eXBlcy5XZWlnaHRlZFByb3Bvc2FsQ29udGVudCB7Ci0gICAgIHJldHVybiBuaWwKLSB9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imports"}},[e._v("#")]),e._v(" Imports")]),e._v(" "),a("p",[e._v("Imports for ics23 have been updated as the repository have been migrated from confio to cosmos.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgotICAgaWNzMjMgJnF1b3Q7Z2l0aHViLmNvbS9jb25maW8vaWNzMjMvZ28mcXVvdDsKKyAgIGljczIzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2ljczIzL2dvJnF1b3Q7CiAgICAvLyAuLi4KKQo="}}),e._v(" "),a("p",[e._v("Imports for gogoproto have been updated.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"aW1wb3J0ICgKICAgIC8vIC4uLgotICAgJnF1b3Q7Z2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL3Byb3RvJnF1b3Q7CisgICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9nb2dvcHJvdG8vcHJvdG8mcXVvdDsKICAgIC8vIC4uLgopCg=="}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);