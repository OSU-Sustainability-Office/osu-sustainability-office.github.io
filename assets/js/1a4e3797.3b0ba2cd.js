"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{6702:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(6255),a=n(9050),l=n.n(a),u=n(3289),s=n(1608),c=n(2375),o=n(8085),i=n(4242),m=n(3702),h=n(4651),p=["zero","one","two","few","many","other"];function f(e){return p.filter((function(t){return e.includes(t)}))}var d={locale:"en",pluralForms:f(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,s.Z)().i18n.currentLocale;return(0,u.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:f(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),d}var t,n}),[e])}function v(){var e=g();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}var E=n(8476),y=n(3251),w=n(4678);var S=function(){var e=(0,y.k6)(),t=(0,y.TH)(),n=(0,s.Z)().siteConfig.baseUrl;return{searchValue:w.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},b=n(7423),I=n(1805),R=n(762),P=n(6487),F=n(758),k=n(4411),_="searchQueryInput_Rfes",x="searchResultItem_gF5N",C="searchResultItemPath__vrn",q="searchResultItemSummary_Kts6",T=n(7854);function Z(){var e=(0,s.Z)().siteConfig.baseUrl,t=(0,E.gA)(),n=e,a=(0,h.J)(null==t?void 0:t.pluginId).preferredVersion;a&&!a.isLast&&(n=a.path+"/");var c=v().selectMessage,i=S(),p=i.searchValue,f=i.updateSearchPath,d=(0,u.useState)(p),g=d[0],y=d[1],w=(0,u.useState)(),R=w[0],P=w[1],F=(0,u.useState)(),x=F[0],C=F[1],q=(0,u.useMemo)((function(){return g?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[g]);(0,u.useEffect)((function(){f(g),R&&(g?R(g,(function(e){C(e)})):C(void 0))}),[g,R]);var T=(0,u.useCallback)((function(e){y(e.target.value)}),[]);return(0,u.useEffect)((function(){p&&p!==g&&y(p)}),[p]),(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(l().mark((function e(){var t,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.w)(n);case 2:t=e.sent,r=t.wrappedIndexes,a=t.zhDictionary,P((function(){return(0,I.v)(r,a,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,q)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,q),u.createElement("input",{type:"search",name:"q",className:_,"aria-label":"Search",onChange:T,value:g,autoComplete:"off",autoFocus:!0}),!R&&g&&u.createElement("div",null,u.createElement(k.Z,null)),x&&(x.length>0?u.createElement("p",null,c(x.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:x.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,x&&x.map((function(e){return u.createElement(M,{key:e.document.i,searchResult:e})})))))}function M(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,l=t.tokens,s=t.metadata,c=0===r,o=2===r,m=(c?n.b:a.b).slice(),h=o?n.s:n.t;return c||m.push(a.t),u.createElement("article",{className:x},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,R.C)(h,l):(0,P.o)(h,(0,F.m)(s,"t"),l,100)}})),m.length>0&&u.createElement("p",{className:C},(0,T.e)(m)),o&&u.createElement("p",{className:q,dangerouslySetInnerHTML:{__html:(0,P.o)(n.t,(0,F.m)(s,"t"),l,100)}}))}var L=function(){return u.createElement(c.Z,null,u.createElement(Z,null))}}}]);