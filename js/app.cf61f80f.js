(function(t){function n(n){for(var a,s,i=n[0],c=n[1],u=n[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(a=!1)}a&&(o.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},r={app:0},o=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"0add":function(t,n,e){"use strict";e("25f7")},"0f8c":function(t,n,e){},"0fc1":function(t,n,e){"use strict";e("0f8c")},"13dd":function(t,n,e){},"235d":function(t,n,e){t.exports="img/total.75a32b9d.svg"},"25f7":function(t,n,e){},2908:function(t,n,e){t.exports="img/income.040cd73a.svg"},"2ba3":function(t,n,e){},"319d":function(t,n,e){"use strict";e("b969")},"31e8":function(t,n,e){var a={"./expense.svg":"b669","./income.svg":"2908","./logo.svg":"9b19","./minus.svg":"e9b2","./plus.svg":"8a37","./total.svg":"235d"};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(a,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="31e8"},4695:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Header"),e("Main"),e("Footer")],1)},o=[],s=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("header",[a("img",{attrs:{src:e("cf05"),alt:"Logo - Dev.Finance$"}})])}],c={name:"Header"},u=c,l=(e("0fc1"),e("2877")),f=Object(l["a"])(u,s,i,!1,null,"7adf5e5a",null),d=f.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{staticClass:"container"},[e("Balance",{attrs:{transactions:t.transactions}}),e("Transaction",{attrs:{transactions:t.transactions},on:{"show-modal":function(n){t.showModal=!0},"remove-transaction":function(n){return t.removeTransaction(n)}}})],1),e("Modal",{attrs:{showModal:t.showModal},on:{"close-modal":function(n){t.showModal=!1},"add-transaction":function(n){return t.addTransaction(n)}}})],1)},p=[],v=(e("e9c4"),e("4de4"),e("d3b7"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"balance"}},[e("h2",{staticClass:"sr-only"},[t._v("Balanço")]),e("BalanceCard",{attrs:{title:"Entradas",icon:"income",amount:t.incomes}}),e("BalanceCard",{attrs:{title:"Saídas",icon:"expense",amount:t.expenses}}),e("BalanceCard",{attrs:{title:"Total",icon:"total",addClass:["total",""+((t.total>0?"positive":t.total<0&&"negative")||"")],amount:t.total}})],1)}),h=[],b=(e("159b"),e("a9e3"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:"card "+(t.addClass.length&&t.addClass.toString().replace(","," "))},[a("h3",[a("span",[t._v(t._s(t.title))]),a("img",{attrs:{src:e("31e8")("./"+t.icon+".svg"),alt:"Ícone de "+t.title}})]),a("p",{attrs:{id:t.icon+"Display"}},[t._v(t._s(t.formattedCurrency))])])}),_=[],g=e("ed08"),y=e.n(g),x={name:"BalanceCard",props:{title:{default:"",require:!0,type:String},icon:{default:"",require:!0,type:String},addClass:{default:function(){return[]},require:!1,type:Array},amount:{default:0,require:!0,type:Number}},computed:{formattedCurrency:function(){return y.a.formatCurrency(this.amount)}}},w=x,C=(e("319d"),Object(l["a"])(w,b,_,!1,null,null,null)),$=C.exports,O={name:"Balance",components:{BalanceCard:$},props:{transactions:{default:function(){return[]},require:!0,type:Array}},computed:{incomes:function(){var t=0;return this.transactions.forEach((function(n){return n.amount>0?t+=Number(n.amount):t})),t},expenses:function(){var t=0;return this.transactions.forEach((function(n){return n.amount<0?t+=Number(n.amount):t})),t},total:function(){return this.incomes+this.expenses}}},T=O,E=(e("a830"),Object(l["a"])(T,v,h,!1,null,null,null)),j=E.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"transaction"}},[e("h2",{staticClass:"sr-only"},[t._v("Transações")]),e("a",{staticClass:"button new",attrs:{href:"#"},on:{click:function(n){return t.$emit("show-modal")}}},[t._v("+ Nova Transação")]),e("TransactionTable",{attrs:{transactions:t.transactions},on:{"remove-transaction":function(n){return t.$emit("remove-transaction",n)}}})],1)},S=[],k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{attrs:{id:"data-table"}},[t._m(0),t.transactions.length?e("tbody",[t._l(t.transactions,(function(n,a){return[e("TransactionRow",{key:a,attrs:{transaction:n},on:{"remove-transaction":function(n){return t.$emit("remove-transaction",n)}}})]}))],2):t._e()])},N=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("Descrição")]),e("th",[t._v("Valor")]),e("th",[t._v("Data")]),e("th")])])}],B=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("tr",[a("td",{staticClass:"description"},[t._v(t._s(t.transaction.description))]),a("td",{class:t.classCSS},[t._v(t._s(t.formattedAmount))]),a("td",{staticClass:"date"},[t._v(t._s(t.transaction.date))]),a("td",[a("img",{attrs:{src:e("e9b2"),alt:"Remover Transação"},on:{click:function(n){return t.$emit("remove-transaction",t.transaction)}}})])])},D=[],A={name:"TransactionRow",props:{transaction:{default:function(){return{}},require:!0,type:Object}},computed:{classCSS:function(){return this.transaction.amount<0?"expense":"income"},formattedAmount:function(){return y.a.formatCurrency(this.transaction.amount)}}},P=A,F=(e("cf61"),Object(l["a"])(P,B,D,!1,null,null,null)),q=F.exports,R={name:"TransactionTable",components:{TransactionRow:q},props:{transactions:{default:function(){return[]},require:!0,type:Array}}},J=R,L=(e("c098"),Object(l["a"])(J,k,N,!1,null,null,null)),V=L.exports,H={name:"Transaction",components:{TransactionTable:V},props:{transactions:{default:function(){return[]},require:!1,type:Array}}},I=H,U=(e("7d84"),Object(l["a"])(I,M,S,!1,null,null,null)),z=U.exports,G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showModal?e("div",{ref:"modal",staticClass:"modal-overlay",attrs:{tabindex:"0"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.$emit("close-modal")}}},[e("div",{staticClass:"modal"},[e("TransactionForm",{on:{"close-modal":function(n){return t.$emit("close-modal")},"add-transaction":function(n){return t.$emit("add-transaction",n)}}})],1)]):t._e()},K=[],Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"form"}},[e("h2",[t._v("Nova Transação")]),e("form",{on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"sr-only",attrs:{for:"description"}},[t._v("Descrição")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],attrs:{id:"description",name:"description",type:"text",placeholder:"Descrição"},domProps:{value:t.transaction.description},on:{input:function(n){n.target.composing||t.$set(t.transaction,"description",n.target.value)}}})]),e("div",{staticClass:"input-group"},[e("label",{staticClass:"sr-only",attrs:{for:"amount"}},[t._v("Valor")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],attrs:{id:"amount",name:"amount",type:"number",step:"0.01",placeholder:"0,00"},domProps:{value:t.transaction.amount},on:{input:function(n){n.target.composing||t.$set(t.transaction,"amount",n.target.value)}}}),t._m(0)]),e("div",{staticClass:"input-group"},[e("label",{staticClass:"sr-only",attrs:{for:"date"}},[t._v("Data")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.date,expression:"transaction.date"}],attrs:{id:"date",name:"date",type:"date"},domProps:{value:t.transaction.date},on:{input:function(n){n.target.composing||t.$set(t.transaction,"date",n.target.value)}}})]),e("div",{staticClass:"input-group actions"},[e("a",{staticClass:"button cancel",attrs:{href:"#"},on:{click:function(n){return t.$emit("close-modal")}}},[t._v("Cancelar")]),e("button",{attrs:{type:"submit"}},[t._v("Salvar")])])])])},W=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("small",{staticClass:"help"},[t._v("Use o sinal "),e("b",[t._v('"-" (negativo)')]),t._v(" para despesas e "),e("b",[t._v('"," (vírgula)')]),t._v(" para casas decimais.")])}],X=(e("a4d3"),e("e01a"),e("498a"),{name:"TransacionForm",data:function(){return{transaction:{description:"",amount:"",date:""}}},methods:{formatValues:function(){var t=this.transaction,n=t.description,e=t.amount,a=t.date;return e=y.a.formatAmount(e),a=y.a.formatDate(a),{description:n,amount:e,date:a}},validateFields:function(){var t=this.transaction,n=t.description,e=t.amount,a=t.date;if(""===n.trim()||""===e.trim()||""===a.trim())throw new Error("Por favor, preencha todos os campos.")},submit:function(){try{this.validateFields();var t=this.formatValues();this.$emit("add-transaction",t)}catch(n){alert(n.message)}}}}),Y=X,Z=(e("63ec"),Object(l["a"])(Y,Q,W,!1,null,null,null)),tt=Z.exports,nt={name:"Modal",components:{TransactionForm:tt},props:{showModal:{default:!1,required:!1,type:Boolean}},watch:{showModal:function(){var t=this;this.showModal&&this.$nextTick((function(){return t.$refs.modal.focus()}))}}},et=nt,at=(e("0add"),Object(l["a"])(et,G,K,!1,null,null,null)),rt=at.exports,ot={name:"Main",components:{Balance:j,Transaction:z,Modal:rt},data:function(){return{showModal:!1,transactions:[]}},created:function(){this.getAllTransacions()},methods:{getAllTransacions:function(){this.transactions=JSON.parse(localStorage.getItem("dev.finances:transactions"))||[]},addTransaction:function(t){this.transactions.unshift(t),this.showModal=!1,localStorage.setItem("dev.finances:transactions",JSON.stringify(this.transactions))},removeTransaction:function(t){this.transactions=this.transactions.filter((function(n){return n!==t})),localStorage.setItem("dev.finances:transactions",JSON.stringify(this.transactions))}}},st=ot,it=(e("a5af"),Object(l["a"])(st,m,p,!1,null,null,null)),ct=it.exports,ut=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[t._v(" dev.finance$ - created by "),e("a",{attrs:{href:"http://rayanneblima.github.io/",target:"_blank"}},[t._v(" Rayanne B. Lima ")]),t._v(" with 💖 ")])}],ft={name:"Footer"},dt=ft,mt=(e("c272"),Object(l["a"])(dt,ut,lt,!1,null,null,null)),pt=mt.exports,vt={name:"App",components:{Header:d,Main:ct,Footer:pt}},ht=vt,bt=(e("034f"),Object(l["a"])(ht,r,o,!1,null,null,null)),_t=bt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_t)}}).$mount("#app")},"63ec":function(t,n,e){"use strict";e("13dd")},"7d84":function(t,n,e){"use strict";e("9bbc")},"85ec":function(t,n,e){},"8a37":function(t,n,e){t.exports="img/plus.d1e53ad1.svg"},"9b19":function(t,n,e){t.exports="img/logo.da05e5d5.svg"},"9bbc":function(t,n,e){},a5af:function(t,n,e){"use strict";e("4695")},a830:function(t,n,e){"use strict";e("cf80")},b669:function(t,n,e){t.exports="img/expense.1d45a4a1.svg"},b969:function(t,n,e){},bfe0:function(t,n,e){},c098:function(t,n,e){"use strict";e("2ba3")},c272:function(t,n,e){"use strict";e("ce2f")},ce2f:function(t,n,e){},cf05:function(t,n,e){t.exports="img/logo.fddf2763.png"},cf61:function(t,n,e){"use strict";e("bfe0")},cf80:function(t,n,e){},e9b2:function(t,n,e){t.exports="img/minus.3002e89a.svg"},ed08:function(t,n,e){function a(t){return t*=100,Math.round(t)}function r(t){var n=t.split("-");return"".concat(n[2],"/").concat(n[1],"/").concat(n[0])}function o(t){var n=Number(t)<0?"-":"";return t=String(t).replace(/\D/g,""),t=Number(t)/100,t=t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),n+t}e("ac1f"),e("1276"),e("99af"),e("a9e3"),e("5319"),t.exports={formatAmount:a,formatDate:r,formatCurrency:o}}});
//# sourceMappingURL=app.cf61f80f.js.map