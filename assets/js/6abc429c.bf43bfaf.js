(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[863],{3905:function(e,t,i){"use strict";i.d(t,{kt:function(){return u}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(i),f=a,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||s;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8718:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=i(2122),a=i(9756),s=(i(7294),i(3905)),o=["components"],r={},l="4.4 Solidification",d={unversionedId:"4.4 Solidification",id:"4.4 Solidification",isDocsHomePage:!1,title:"4.4 Solidification",description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle.",source:"@site/docs/4.4 Solidification.md",sourceDirName:".",slug:"/4.4 Solidification",permalink:"/IOTA-2.0-Research-Specifications/docs/4.4 Solidification",editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docs/4.4 Solidification.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.3 Tip Selection Algorithm",permalink:"/IOTA-2.0-Research-Specifications/docs/4.3 Tip Selection Algorithm"},next:{title:"4.5 Rate Control through Adaptive Proof of Work",permalink:"/IOTA-2.0-Research-Specifications/docs/4.5 Rate Control"}},c=[{value:"4.4.1 Motivation",id:"441-motivation",children:[]},{value:"4.4.2 Definitions",id:"442-definitions",children:[]},{value:"4.4.3 Parameters",id:"443-parameters",children:[]},{value:"4.4.4 Solidification and solidfication check",id:"444-solidification-and-solidfication-check",children:[{value:"Strong solidification:",id:"strong-solidification",children:[]},{value:"Weak solidification:",id:"weak-solidification",children:[]}]},{value:"4.4.5 Communication details",id:"445-communication-details",children:[{value:"4.4.5.1 Request and response",id:"4451-request-and-response",children:[]},{value:"SolidificationRequest",id:"solidificationrequest",children:[]},{value:"SolidificationResponse",id:"solidificationresponse",children:[]}]},{value:"4.4.6 Denial of Service",id:"446-denial-of-service",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"44-solidification"},"4.4 Solidification"),(0,s.kt)("p",null,"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle."),(0,s.kt)("p",null,"The Solidification specification depends on the following specifications:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.2%20Timestamps"},"4.2 - Timestamps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./5.1%20UTXO"},"5.1 - UTXO"))),(0,s.kt)("h2",{id:"441-motivation"},"4.4.1 Motivation"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Solidification")," is a process of requesting missing referenced messages. It may be recursively repeated until all of a message's past cone up to the genesis (or snapshot) becomes solid."),(0,s.kt)("p",null,"In that way, the Tangle enables all nodes to retrieve all of a message's history, even the ones joining the network at a point later in time."),(0,s.kt)("h2",{id:"442-definitions"},"4.4.2 Definitions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"valid"),":\nA message validity status is initialized as ",(0,s.kt)("em",{parentName:"p"},"valid"),", and it's set as ",(0,s.kt)("em",{parentName:"p"},"invalid")," whenever the message does not pass any of the filters from the solidifier and from the message booker:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Solidifier: checks if parents are valid,")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Booker: checks if the contained transaction is valid. Note that only messages containing a transaction are required to perform this check, which are defined in ",(0,s.kt)("a",{parentName:"p",href:"./5.1%20UTXO#validation"},"Section 5.1 - UTXO"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"parents age check"),": A check that ensures the timestamps of parents and child are valid, following the details defined in ",(0,s.kt)("a",{parentName:"p",href:"./4.2%20Timestamps"},"Section 4.2 - Timestamps"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"solid"),": A message is solid if it passes the solidification check and all its parents are stored in the storage, solid and their validity status is set as valid."))),(0,s.kt)("h2",{id:"443-parameters"},"4.4.3 Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retryInterval"),": The time interval of resending the same solidification request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"maxRequestThreshold"),": The maximum retry times to send a solidification request.")),(0,s.kt)("h2",{id:"444-solidification-and-solidfication-check"},"4.4.4 Solidification and solidfication check"),(0,s.kt)("p",null,"During solidification, if a node is missing a referenced message, the corresponding message ID is stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". A node asks its neighbors for the missing message by sending a ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification request")," containing the message ID.\nIt also sets a boolean flag ",(0,s.kt)("inlineCode",{parentName:"p"},"isStrongRequest")," for whether the missing message was requested as a strong (",(0,s.kt)("inlineCode",{parentName:"p"},"TRUE"),") or weak (",(0,s.kt)("inlineCode",{parentName:"p"},"FALSE"),") parent. This information can be used to decide which checks a message shall pass, when the message is received. "),(0,s.kt)("p",null,"Note that through the following process the parents of a message that is requested through a weak solidification are not requested, and also the message does not have to pass the parent age check."),(0,s.kt)("p",null,"If a message gets solid, it shall walk through the rest of the data flow, then propagate the solid status to its future cone by performing the solidification checks on each of the message in its future cone again."),(0,s.kt)("h3",{id:"strong-solidification"},"Strong solidification:"),(0,s.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,s.kt)("inlineCode",{parentName:"p"},"isStrongRequest==TRUE")," the requested message is marked as solid after it passes the strong solidification checks. If any of the checks fails, the message remains unsolid, or is set to invalid, see. Image 4.4.1."),(0,s.kt)("p",null,"In the strong solidification check we check if"),(0,s.kt)("p",null,"1) the parents exist;\n2) the parents are solid, and if not wait until these get solid;\n3) the parents age check passes,\n4) the parents are valid."),(0,s.kt)("h3",{id:"weak-solidification"},"Weak solidification:"),(0,s.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,s.kt)("inlineCode",{parentName:"p"},"isStrongRequest==FALSE")," the requested message is marked as solid."),(0,s.kt)("p",null,"No weak solidification check has to be performed."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11289354/117009286-28333200-ad1e-11eb-8d0d-186c8d8ce373.png",alt:"GoShimmer-flow-solidification_spec"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 4.4.1:")," Strong solidification process."),(0,s.kt)("h2",{id:"445-communication-details"},"4.4.5 Communication details"),(0,s.kt)("p",null,"Nodes send and receive ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification request/response")," via gossip layer. The ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification request")," is created and scheduled by the gossip manager, if a node does not get the requested message, the gossip manager re-sends it every ",(0,s.kt)("inlineCode",{parentName:"p"},"retryInterval"),". If the requested message is not received within ",(0,s.kt)("inlineCode",{parentName:"p"},"maxRequestThreshold")," rounds, the ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification request")," must be removed from the ",(0,s.kt)("inlineCode",{parentName:"p"},"solidification buffer"),"."),(0,s.kt)("h3",{id:"4451-request-and-response"},"4.4.5.1 Request and response"),(0,s.kt)("p",null,"Below we define the form of SolidificationRequest and SolidificationResponse: "),(0,s.kt)("h3",{id:"solidificationrequest"},"SolidificationRequest"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"type"),(0,s.kt)("td",null,"uint8"),(0,s.kt)("td",null,"Indicates that the packet is SolidificationRequest.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"messageID"),(0,s.kt)("td",null,"ByteArray[32]"),(0,s.kt)("td",null,"Contains the message ID of the requested message."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Table 4.4.2:")," SolidificationRequest data fields description."),(0,s.kt)("h3",{id:"solidificationresponse"},"SolidificationResponse"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"type"),(0,s.kt)("td",null,"uint8"),(0,s.kt)("td",null,"Indicates that the packet is SolidificationResponse.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"message"),(0,s.kt)("td",null,"ByteArray"),(0,s.kt)("td",null,"Contains the entire requested message."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Table 4.4.3:")," SolidificationResponses data fields description."),(0,s.kt)("h2",{id:"446-denial-of-service"},"4.4.6 Denial of Service"),(0,s.kt)("p",null,"All requests/responses exchanged during the solidification are sent via UDP. As such, any UDP based Denial of Service attack may harm the normal functionality of the solidification. To limit this, hardware based protection such as firewall or alternatively may be used."))}u.isMDXComponent=!0}}]);