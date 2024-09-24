var Lt=Object.defineProperty;var jt=(t,e,n)=>e in t?Lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var He=(t,e,n)=>jt(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function O(){}const Tt=t=>t;function St(t){return t()}function ut(){return Object.create(null)}function se(t){t.forEach(St)}function nt(t){return typeof t=="function"}function ee(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let je;function at(t,e){return t===e?!0:(je||(je=document.createElement("a")),je.href=e,t===je.href)}function zt(t){return Object.keys(t).length===0}function Rt(t,...e){if(t==null){for(const l of e)l(void 0);return O}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function R(t,e,n){t.$$.on_destroy.push(Rt(e,n))}function F(t,e,n){return t.set(n),e}const It=typeof window<"u";let Yt=It?()=>window.performance.now():()=>Date.now(),lt=It?t=>requestAnimationFrame(t):O;const Ge=new Set;function Pt(t){Ge.forEach(e=>{e.c(t)||(Ge.delete(e),e.f())}),Ge.size!==0&&lt(Pt)}function Bt(t){let e;return Ge.size===0&&lt(Pt),{promise:new Promise(n=>{Ge.add(e={c:t,f:n})}),abort(){Ge.delete(e)}}}function u(t,e){t.appendChild(e)}function At(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Xt(t){const e=d("style");return e.textContent="/* empty */",Ft(At(t),e),e.sheet}function Ft(t,e){return u(t.head||t,e),e.sheet}function j(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function $(){return H(" ")}function it(){return H("")}function P(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return t===""?null:+t}function Vt(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.data!==e&&(t.data=e)}function L(t,e){t.value=e??""}function pe(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function ft(t,e,n){t.classList.toggle(e,!!n)}function Wt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const Ye=new Map;let Be=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ut(t,e){const n={stylesheet:Xt(e),rules:{}};return Ye.set(t,n),n}function dt(t,e,n,l,i,r,s,a=0){const m=16.666/l;let c=`{
`;for(let _=0;_<=1;_+=m){const v=e+(n-e)*r(_);c+=_*100+`%{${s(v,1-v)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,g=`__svelte_${Ht(f)}_${a}`,k=At(t),{stylesheet:b,rules:p}=Ye.get(k)||Ut(k,t);p[g]||(p[g]=!0,b.insertRule(`@keyframes ${g} ${f}`,b.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${g} ${l}ms linear ${i}ms 1 both`,Be+=1,g}function Kt(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-l.length;i&&(t.style.animation=l.join(", "),Be-=i,Be||Jt())}function Jt(){lt(()=>{Be||(Ye.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),Ye.clear())})}let st;function Ae(t){st=t}const $e=[],Xe=[];let Ce=[];const xe=[],Qt=Promise.resolve();let et=!1;function Zt(){et||(et=!0,Qt.then(Nt))}function De(t){Ce.push(t)}function Ot(t){xe.push(t)}const Ue=new Set;let ke=0;function Nt(){if(ke!==0)return;const t=st;do{try{for(;ke<$e.length;){const e=$e[ke];ke++,Ae(e),xt(e.$$)}}catch(e){throw $e.length=0,ke=0,e}for(Ae(null),$e.length=0,ke=0;Xe.length;)Xe.pop()();for(let e=0;e<Ce.length;e+=1){const n=Ce[e];Ue.has(n)||(Ue.add(n),n())}Ce.length=0}while($e.length);for(;xe.length;)xe.pop()();et=!1,Ue.clear(),Ae(t)}function xt(t){if(t.fragment!==null){t.update(),se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(De)}}function en(t){const e=[],n=[];Ce.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Ce=e}let Pe;function tn(){return Pe||(Pe=Promise.resolve(),Pe.then(()=>{Pe=null})),Pe}function Ke(t,e,n){t.dispatchEvent(Wt(`${e?"intro":"outro"}${n}`))}const ze=new Set;let ae;function Oe(){ae={r:0,c:[],p:ae}}function Ne(){ae.r||se(ae.c),ae=ae.p}function X(t,e){t&&t.i&&(ze.delete(t),t.i(e))}function W(t,e,n,l){if(t&&t.o){if(ze.has(t))return;ze.add(t),ae.c.push(()=>{ze.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const nn={duration:0};function mt(t,e,n,l){let r=e(t,n,{direction:"both"}),s=l?0:1,a=null,m=null,c=null,f;function g(){c&&Kt(t,c)}function k(p,y){const _=p.b-s;return y*=Math.abs(_),{a:s,b:p.b,d:_,duration:y,start:p.start,end:p.start+y,group:p.group}}function b(p){const{delay:y=0,duration:_=300,easing:v=Tt,tick:h=O,css:w}=r||nn,E={start:Yt()+y,b:p};p||(E.group=ae,ae.r+=1),"inert"in t&&(p?f!==void 0&&(t.inert=f):(f=t.inert,t.inert=!0)),a||m?m=E:(w&&(g(),c=dt(t,s,p,_,y,v,w)),p&&h(0,1),a=k(E,_),De(()=>Ke(t,p,"start")),Bt(z=>{if(m&&z>m.start&&(a=k(m,_),m=null,Ke(t,a.b,"start"),w&&(g(),c=dt(t,s,a.b,a.duration,0,v,r.css))),a){if(z>=a.end)h(s=a.b,1-s),Ke(t,a.b,"end"),m||(a.b?g():--a.group.r||se(a.group.c)),a=null;else if(z>=a.start){const G=z-a.start;s=a.a+a.d*v(G/a.duration),h(s,1-s)}}return!!(a||m)}))}return{run(p){nt(r)?tn().then(()=>{r=r({direction:p?"in":"out"}),b(p)}):b(p)},end(){g(),a=m=null}}}function me(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Dt(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function ce(t){t&&t.c()}function ne(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),De(()=>{const r=t.$$.on_mount.map(St).filter(nt);t.$$.on_destroy?t.$$.on_destroy.push(...r):se(r),t.$$.on_mount=[]}),i.forEach(De)}function le(t,e){const n=t.$$;n.fragment!==null&&(en(n.after_update),se(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ln(t,e){t.$$.dirty[0]===-1&&($e.push(t),Zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,l,i,r,s=null,a=[-1]){const m=st;Ae(t);const c=t.$$={fragment:null,ctx:[],props:r,update:O,not_equal:i,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ut(),dirty:a,skip_bound:!1,root:e.target||m.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(g,k,...b)=>{const p=b.length?b[0]:k;return c.ctx&&i(c.ctx[g],c.ctx[g]=p)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](p),f&&ln(t,g)),k}):[],c.update(),f=!0,se(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const g=Vt(e.target);c.fragment&&c.fragment.l(g),g.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&X(t.$$.fragment),ne(t,e.target,e.anchor),Nt()}Ae(m)}class oe{constructor(){He(this,"$$");He(this,"$$set")}$destroy(){le(this,1),this.$destroy=O}$on(e,n){if(!nt(n))return O;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const sn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(sn);const we=[];function he(t,e=O){let n;const l=new Set;function i(a){if(ee(t,a)&&(t=a,n)){const m=!we.length;for(const c of l)c[1](),we.push(c,t);if(m){for(let c=0;c<we.length;c+=2)we[c][0](we[c+1]);we.length=0}}}function r(a){i(a(t))}function s(a,m=O){const c=[a,m];return l.add(c),l.size===1&&(n=e(i,r)||O),a(t),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:s}}class ue{constructor(e,n,l,i,r,s,a){this.index=e,this.title=n,this.coverPath=l,this.developer=i,this.genres=r,this.entries=s,this.goals=a}addEntry(e){this.entries.append(e)}}class de{constructor(e,n,l,i,r,s){this.index=e,this.date=n,this.timePlayed=l,this.rating=i,this.ratingRed=250-25*(this.rating-1),this.ratingGreen=0+25*(this.rating-1),this.like=r,this.dislike=s}}class ge{constructor(e){this.goals=e}addGoal(e){this.goals=[...this.goals,e]}}class tt{constructor(e,n,l){this.index=e,this.goalText=n,this.completed=l}}const Je=new Date;let _e=`${Je.getMonth()}/${Je.getDate()}/${Je.getFullYear()}`,Mt=[new ue(0,"Minecraft","Minecraft_game_cover.jpeg","Mojang","Sandbox",[new de(0,_e,90,5,"I liked X.","I disliked Y."),new de(1,_e+"2",91,5,"I liked X.","I disliked Y.")],new ge([new tt(0,"TEST GOAL ONE",!1),new tt(1,"TEST GOAL TWO",!0)])),new ue(1,"Terraria","Terraria_game_cover.jpg","Re-Logic","Sandbox",[new de(0,_e,90,5,"I liked X.","I disliked Y.")],new ge([])),new ue(2,"Overwatch","Overwatch_cover_art.jpg","Blizzard","Hero Shooter",[new de(0,_e,90,5,"I liked X.","I disliked Y.")],new ge([])),new ue(3,"Tokaido","Tokaido.jpg","TODO","Boardgame",[new de(0,_e,90,5,"I liked X.","I disliked Y.")],new ge([])),new ue(4,"Deadlock","deadlock_cover.jpg","Valve","Moba",[new de(0,_e,90,5,"I liked X.","I disliked Y.")],new ge([])),new ue(5,"Unrailed","Unrailed.jpg","TODO","Cooperative",[new de(0,_e+"1",90,5,"I liked X.","I disliked Y.")],new ge([]))];const ie=he(Mt),Qe=he(0),be=he(0),ve=he(Mt[0].entries[0]),Ze=he(0),Ee=he(!1),qe=he(!1),Se=he(!1);function rn(t){let e,n,l;return{c(){e=d("button"),e.textContent="Add Game",o(e,"class","svelte-145oilo")},m(i,r){j(i,e,r),n||(l=P(e,"click",t[1]),n=!0)},p:O,i:O,o:O,d(i){i&&A(e),n=!1,l()}}}function on(t,e,n){let l;return R(t,Ee,r=>n(0,l=r)),[l,()=>F(Ee,l=!0,l)]}class un extends oe{constructor(e){super(),re(this,e,on,rn,ee,{})}}function an(t){let e,n,l,i,r,s,a,m,c,f,g,k,b,p,y,_,v,h,w,E,z;return{c(){e=d("div"),n=d("div"),n.innerHTML='<label for="cover">Cover</label><input type="file" id="cover"/>',l=$(),i=d("div"),r=d("label"),r.textContent="Title",s=d("input"),a=$(),m=d("div"),c=d("label"),c.textContent="Genre",f=d("input"),g=$(),k=d("div"),b=d("label"),b.textContent="Developer",p=d("input"),y=$(),_=d("div"),v=d("button"),v.textContent="Submit New Game",h=$(),w=d("button"),w.textContent="Cancel",o(n,"class","item svelte-25qvyp"),o(r,"for","title"),o(s,"type","text"),o(s,"id","title"),o(i,"class","item svelte-25qvyp"),o(c,"for","genre"),o(f,"type","text"),o(f,"id","genre"),o(m,"class","item svelte-25qvyp"),o(b,"for","developr"),o(p,"type","text"),o(p,"id","developr"),o(k,"class","item svelte-25qvyp"),o(_,"id","button-container"),o(_,"class","svelte-25qvyp"),o(e,"id","main-container"),o(e,"class","svelte-25qvyp")},m(G,T){j(G,e,T),u(e,n),u(e,l),u(e,i),u(i,r),u(i,s),L(s,t[0]),u(e,a),u(e,m),u(m,c),u(m,f),L(f,t[1]),u(e,g),u(e,k),u(k,b),u(k,p),L(p,t[2]),u(e,y),u(e,_),u(_,v),u(_,h),u(_,w),E||(z=[P(s,"input",t[5]),P(f,"input",t[6]),P(p,"input",t[7]),P(v,"click",t[8]),P(w,"click",t[9])],E=!0)},p(G,[T]){T&1&&s.value!==G[0]&&L(s,G[0]),T&2&&f.value!==G[1]&&L(f,G[1]),T&4&&p.value!==G[2]&&L(p,G[2])},i:O,o:O,d(G){G&&A(e),E=!1,se(z)}}}let cn="No-Cover.png";function fn(t,e,n){let l,i;R(t,ie,p=>n(10,l=p)),R(t,Ee,p=>n(3,i=p));let r="",s="",a="";function m(){F(ie,l=[...l,new ue(l.length,r,cn,a,s,[],new ge([]))],l),F(Ee,i=!1,i),console.log(l)}function c(){r=this.value,n(0,r)}function f(){s=this.value,n(1,s)}function g(){a=this.value,n(2,a)}return[r,s,a,i,m,c,f,g,()=>m(),()=>F(Ee,i=!1,i)]}class dn extends oe{constructor(e){super(),re(this,e,fn,an,ee,{})}}function pt(t,e,n){const l=t.slice();return l[4]=e[n],l}function ht(t,e,n){const l=t.slice();return l[4]=e[n],l[7]=e,l[8]=n,l}function _t(t){let e,n,l=t[4].goalText+"",i,r,s,a,m,c;function f(){return t[3](t[4],t[7],t[8])}return{c(){e=d("div"),n=d("div"),i=H(l),r=$(),s=d("button"),s.textContent="✔️",a=$(),o(n,"class","svelte-1nr9cbq"),o(s,"class","complete svelte-1nr9cbq"),o(e,"class","goal svelte-1nr9cbq")},m(g,k){j(g,e,k),u(e,n),u(n,i),u(e,r),u(e,s),u(e,a),m||(c=P(s,"click",f),m=!0)},p(g,k){t=g,k&1&&l!==(l=t[4].goalText+"")&&Q(i,l)},d(g){g&&A(e),m=!1,c()}}}function gt(t){let e,n=!t[4].completed&&_t(t);return{c(){n&&n.c(),e=it()},m(l,i){n&&n.m(l,i),j(l,e,i)},p(l,i){l[4].completed?n&&(n.d(1),n=null):n?n.p(l,i):(n=_t(l),n.c(),n.m(e.parentNode,e))},d(l){l&&A(e),n&&n.d(l)}}}function vt(t){let e,n=t[4].goalText+"",l;return{c(){e=d("div"),l=H(n),o(e,"class","svelte-1nr9cbq")},m(i,r){j(i,e,r),u(e,l)},p(i,r){r&1&&n!==(n=i[4].goalText+"")&&Q(l,n)},d(i){i&&A(e)}}}function bt(t){let e,n=t[4].completed&&vt(t);return{c(){n&&n.c(),e=it()},m(l,i){n&&n.m(l,i),j(l,e,i)},p(l,i){l[4].completed?n?n.p(l,i):(n=vt(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){l&&A(e),n&&n.d(l)}}}function mn(t){let e,n,l,i,r,s,a,m,c,f,g,k=me(t[0]),b=[];for(let _=0;_<k.length;_+=1)b[_]=gt(ht(t,k,_));let p=me(t[0]),y=[];for(let _=0;_<p.length;_+=1)y[_]=bt(pt(t,p,_));return{c(){e=d("div"),n=d("h1"),n.textContent="Goals",l=$(),i=d("div"),r=d("div"),s=d("h2"),s.textContent="Current Goals",a=$();for(let _=0;_<b.length;_+=1)b[_].c();m=$(),c=d("div"),f=d("h2"),f.textContent="Completed Goals",g=$();for(let _=0;_<y.length;_+=1)y[_].c();o(r,"id","current"),o(r,"class","svelte-1nr9cbq"),o(c,"id","completed"),o(c,"class","svelte-1nr9cbq"),o(i,"id","inner"),o(i,"class","svelte-1nr9cbq"),o(e,"id","main-container"),o(e,"class","svelte-1nr9cbq")},m(_,v){j(_,e,v),u(e,n),u(e,l),u(e,i),u(i,r),u(r,s),u(r,a);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(r,null);u(i,m),u(i,c),u(c,f),u(c,g);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(c,null)},p(_,[v]){if(v&1){k=me(_[0]);let h;for(h=0;h<k.length;h+=1){const w=ht(_,k,h);b[h]?b[h].p(w,v):(b[h]=gt(w),b[h].c(),b[h].m(r,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=k.length}if(v&1){p=me(_[0]);let h;for(h=0;h<p.length;h+=1){const w=pt(_,p,h);y[h]?y[h].p(w,v):(y[h]=bt(w),y[h].c(),y[h].m(c,null))}for(;h<y.length;h+=1)y[h].d(1);y.length=p.length}},i:O,o:O,d(_){_&&A(e),Re(b,_),Re(y,_)}}}function pn(t,e,n){let l,i,r;R(t,be,a=>n(1,i=a)),R(t,ie,a=>n(2,r=a));const s=(a,m,c)=>n(0,m[c].completed=!0,l);return t.$$.update=()=>{t.$$.dirty&6&&n(0,l=r[i].goals.goals)},[l,i,r,s]}class hn extends oe{constructor(e){super(),re(this,e,pn,mn,ee,{})}}function yt(t,e,n){const l=t.slice();return l[7]=e[n],l}function kt(t){let e,n=t[7].date+"",l,i,r,s,a;function m(){return t[5](t[7])}return{c(){e=d("button"),l=H(n),i=$(),r=d("hr"),o(e,"class","entry-selector svelte-8nq1yo"),o(r,"class","svelte-8nq1yo")},m(c,f){j(c,e,f),u(e,l),j(c,i,f),j(c,r,f),s||(a=P(e,"click",m),s=!0)},p(c,f){t=c,f&1&&n!==(n=t[7].date+"")&&Q(l,n)},d(c){c&&(A(e),A(i),A(r)),s=!1,a()}}}function _n(t){let e,n,l,i,r,s,a,m,c,f,g=t[1].timePlayed+"",k,b,p,y,_,v,h,w,E,z,G,T=t[1].rating+"",N,V,I,q,x,B,D=t[1].like+"",te,Y,C,S,K,fe,Le=t[1].dislike+"",Fe,Ve,Ie,We,rt,ye=me(t[0]),J=[];for(let M=0;M<ye.length;M+=1)J[M]=kt(yt(t,ye,M));return{c(){e=d("h1"),e.textContent="My Entries",n=$(),l=d("div"),i=d("div");for(let M=0;M<J.length;M+=1)J[M].c();r=$(),s=d("div"),a=d("div"),m=d("p"),m.textContent="Time Played:",c=$(),f=d("p"),k=H(g),b=$(),p=d("div"),y=d("p"),y.textContent="Rating:",_=$(),v=d("div"),h=ct("svg"),w=ct("circle"),z=$(),G=d("p"),N=H(T),V=$(),I=d("div"),q=d("p"),q.textContent="Liked:",x=$(),B=d("p"),te=H(D),Y=$(),C=d("div"),S=d("p"),S.textContent="Disliked:",K=$(),fe=d("p"),Fe=H(Le),Ve=$(),Ie=d("button"),Ie.textContent="Edit Entry",o(i,"id","dates-container"),o(i,"class","svelte-8nq1yo"),o(m,"class","entry-header svelte-8nq1yo"),o(f,"class","entry-data svelte-8nq1yo"),o(a,"class","entry-line svelte-8nq1yo"),o(y,"class","entry-header svelte-8nq1yo"),o(w,"r","10"),o(w,"cx","10"),o(w,"cy","10"),o(w,"fill",E="rgb("+t[1].ratingRed+", "+t[1].ratingGreen+", 0)"),o(h,"height","20"),o(h,"width","20"),pe(h,"padding-top",".4em"),o(G,"class","entry-data svelte-8nq1yo"),pe(v,"display","flex"),pe(v,"flex-direction","row"),o(p,"class","entry-line svelte-8nq1yo"),o(q,"class","entry-header svelte-8nq1yo"),o(B,"class","entry-data svelte-8nq1yo"),o(I,"class","entry-line svelte-8nq1yo"),o(S,"class","entry-header svelte-8nq1yo"),o(fe,"class","entry-data svelte-8nq1yo"),o(C,"class","entry-line svelte-8nq1yo"),o(s,"id","entry-information"),o(s,"class","svelte-8nq1yo"),o(l,"id","main-container"),o(l,"class","svelte-8nq1yo")},m(M,Z){j(M,e,Z),j(M,n,Z),j(M,l,Z),u(l,i);for(let U=0;U<J.length;U+=1)J[U]&&J[U].m(i,null);u(l,r),u(l,s),u(s,a),u(a,m),u(a,c),u(a,f),u(f,k),u(s,b),u(s,p),u(p,y),u(p,_),u(p,v),u(v,h),u(h,w),u(v,z),u(v,G),u(G,N),u(s,V),u(s,I),u(I,q),u(I,x),u(I,B),u(B,te),u(s,Y),u(s,C),u(C,S),u(C,K),u(C,fe),u(fe,Fe),j(M,Ve,Z),j(M,Ie,Z),We||(rt=P(Ie,"click",t[6]),We=!0)},p(M,[Z]){if(Z&3){ye=me(M[0]);let U;for(U=0;U<ye.length;U+=1){const ot=yt(M,ye,U);J[U]?J[U].p(ot,Z):(J[U]=kt(ot),J[U].c(),J[U].m(i,null))}for(;U<J.length;U+=1)J[U].d(1);J.length=ye.length}Z&2&&g!==(g=M[1].timePlayed+"")&&Q(k,g),Z&2&&E!==(E="rgb("+M[1].ratingRed+", "+M[1].ratingGreen+", 0)")&&o(w,"fill",E),Z&2&&T!==(T=M[1].rating+"")&&Q(N,T),Z&2&&D!==(D=M[1].like+"")&&Q(te,D),Z&2&&Le!==(Le=M[1].dislike+"")&&Q(Fe,Le)},i:O,o:O,d(M){M&&(A(e),A(n),A(l),A(Ve),A(Ie)),Re(J,M),We=!1,rt()}}}function gn(t,e,n){let l,i,r,s,a;R(t,be,f=>n(3,i=f)),R(t,ie,f=>n(4,r=f)),R(t,ve,f=>n(1,s=f)),R(t,qe,f=>n(2,a=f));const m=f=>F(ve,s=f,s),c=()=>F(qe,a=!0,a);return t.$$.update=()=>{t.$$.dirty&24&&n(0,l=r[i].entries)},[l,s,a,i,r,m,c]}class vn extends oe{constructor(e){super(),re(this,e,gn,_n,ee,{})}}function bn(t){let e,n,l,i;return{c(){e=d("button"),o(e,"class","game-container svelte-8wb5fm"),o(e,"id",n="game-"+t[0].index),pe(e,"background-image","url("+t[0].coverPath+")"),pe(e,"background-size","100px 150px"),ft(e,"selected",t[1])},m(r,s){j(r,e,s),l||(i=P(e,"click",t[3]),l=!0)},p(r,[s]){s&1&&n!==(n="game-"+r[0].index)&&o(e,"id",n),s&1&&pe(e,"background-image","url("+r[0].coverPath+")"),s&2&&ft(e,"selected",r[1])},i:O,o:O,d(r){r&&A(e),l=!1,i()}}}function yn(t,e,n){let l;R(t,be,a=>n(2,l=a));let{game:i=new ue}=e,{selected:r=!1}=e;const s=()=>F(be,l=i.index,l);return t.$$set=a=>{"game"in a&&n(0,i=a.game),"selected"in a&&n(1,r=a.selected)},[i,r,l,s]}class kn extends oe{constructor(e){super(),re(this,e,yn,bn,ee,{game:0,selected:1})}}function wt(t,e,n){const l=t.slice();return l[7]=e[n],l[8]=e,l[9]=n,l}function $t(t){let e,n,l;function i(s){t[4](s,t[7],t[8],t[9])}let r={selected:t[2]==t[9]};return t[7]!==void 0&&(r.game=t[7]),e=new kn({props:r}),Xe.push(()=>Dt(e,"game",i)),{c(){ce(e.$$.fragment)},m(s,a){ne(e,s,a),l=!0},p(s,a){t=s;const m={};a&4&&(m.selected=t[2]==t[9]),!n&&a&1&&(n=!0,m.game=t[7],Ot(()=>n=!1)),e.$set(m)},i(s){l||(X(e.$$.fragment,s),l=!0)},o(s){W(e.$$.fragment,s),l=!1},d(s){le(e,s)}}}function Gt(t){let e,n,l=t[9]>=t[1]&&t[1]+Me>t[9]&&$t(t);return{c(){l&&l.c(),e=it()},m(i,r){l&&l.m(i,r),j(i,e,r),n=!0},p(i,r){i[9]>=i[1]&&i[1]+Me>i[9]?l?(l.p(i,r),r&2&&X(l,1)):(l=$t(i),l.c(),X(l,1),l.m(e.parentNode,e)):l&&(Oe(),W(l,1,1,()=>{l=null}),Ne())},i(i){n||(X(l),n=!0)},o(i){W(l),n=!1},d(i){i&&A(e),l&&l.d(i)}}}function wn(t){let e,n,l,i,r,s,a,m,c,f,g,k,b,p=me(t[0]),y=[];for(let v=0;v<p.length;v+=1)y[v]=Gt(wt(t,p,v));const _=v=>W(y[v],1,1,()=>{y[v]=null});return{c(){e=d("div"),n=d("button"),l=H("◀"),r=$(),s=d("div");for(let v=0;v<y.length;v+=1)y[v].c();a=$(),m=d("button"),c=H("▶"),o(n,"id","left-arrow"),o(n,"class","arrow svelte-1uri8zq"),n.disabled=i=t[1]<=0,o(s,"id","games-container"),o(s,"class","svelte-1uri8zq"),o(m,"id","right-arrow"),o(m,"class","arrow svelte-1uri8zq"),m.disabled=f=t[1]+Me>=t[0].length,o(e,"id","main-container"),o(e,"class","svelte-1uri8zq")},m(v,h){j(v,e,h),u(e,n),u(n,l),u(e,r),u(e,s);for(let w=0;w<y.length;w+=1)y[w]&&y[w].m(s,null);u(e,a),u(e,m),u(m,c),g=!0,k||(b=[P(n,"click",t[3]),P(m,"click",t[5])],k=!0)},p(v,[h]){if((!g||h&2&&i!==(i=v[1]<=0))&&(n.disabled=i),h&7){p=me(v[0]);let w;for(w=0;w<p.length;w+=1){const E=wt(v,p,w);y[w]?(y[w].p(E,h),X(y[w],1)):(y[w]=Gt(E),y[w].c(),X(y[w],1),y[w].m(s,null))}for(Oe(),w=p.length;w<y.length;w+=1)_(w);Ne()}(!g||h&3&&f!==(f=v[1]+Me>=v[0].length))&&(m.disabled=f)},i(v){if(!g){for(let h=0;h<p.length;h+=1)X(y[h]);g=!0}},o(v){y=y.filter(Boolean);for(let h=0;h<y.length;h+=1)W(y[h]);g=!1},d(v){v&&A(e),Re(y,v),k=!1,se(b)}}}const Me=5;function $n(t,e,n){let l,i,r;R(t,ie,c=>n(0,l=c)),R(t,Qe,c=>n(1,i=c)),R(t,be,c=>n(2,r=c)),l.length;const s=()=>{i>0&&F(Qe,i--,i)};function a(c,f,g,k){g[k]=c,ie.set(l)}return[l,i,r,s,a,()=>{i+Me<l.length&&F(Qe,i++,i)}]}class Gn extends oe{constructor(e){super(),re(this,e,$n,wn,ee,{})}}function Cn(t){let e,n,l,i,r,s,a,m,c=t[0].title+"",f,g,k,b=t[0].developer+"",p,y,_,v=t[0].genres+"",h,w,E,z,G,T,N,V;return{c(){e=d("div"),n=d("img"),i=$(),r=d("hr"),s=$(),a=d("div"),m=d("h1"),f=H(c),g=$(),k=d("h2"),p=H(b),y=$(),_=d("h2"),h=H(v),w=$(),E=d("h2"),z=H(t[2]),G=$(),T=d("h2"),N=H("Total Goals: "),V=H(t[1]),o(n,"id","cover"),at(n.src,l=t[0].coverPath)||o(n,"src",l),o(n,"alt",""),o(n,"class","svelte-13c2l22"),o(r,"class","svelte-13c2l22"),o(m,"id","title"),o(m,"class","svelte-13c2l22"),o(k,"id","developer"),o(k,"class","svelte-13c2l22"),o(_,"id","genres"),o(_,"class","svelte-13c2l22"),o(E,"class","svelte-13c2l22"),o(T,"class","svelte-13c2l22"),o(a,"id","words"),o(a,"class","svelte-13c2l22"),o(e,"id","main-container"),o(e,"class","svelte-13c2l22")},m(I,q){j(I,e,q),u(e,n),u(e,i),u(e,r),u(e,s),u(e,a),u(a,m),u(m,f),u(a,g),u(a,k),u(k,p),u(a,y),u(a,_),u(_,h),u(a,w),u(a,E),u(E,z),u(a,G),u(a,T),u(T,N),u(T,V)},p(I,[q]){q&1&&!at(n.src,l=I[0].coverPath)&&o(n,"src",l),q&1&&c!==(c=I[0].title+"")&&Q(f,c),q&1&&b!==(b=I[0].developer+"")&&Q(p,b),q&1&&v!==(v=I[0].genres+"")&&Q(h,v),q&4&&Q(z,I[2]),q&2&&Q(V,I[1])},i:O,o:O,d(I){I&&A(e)}}}function En(t,e,n){let l,i,r;R(t,Ze,a=>n(3,r=a));let{selectedGame:s=new ue}=e;return t.$$set=a=>{"selectedGame"in a&&n(0,s=a.selectedGame)},t.$$.update=()=>{if(t.$$.dirty&9&&(F(Ze,r=0,r),s.entries.forEach(a=>{F(Ze,r+=a.timePlayed,r)}),n(2,l=`Total Playtime: ${r} Minutes`),r>59)){let a=(r/60).toFixed(2);n(2,l=`Total Playtime: ${a} Hours`)}t.$$.dirty&1&&n(1,i=s.goals.goals.length)},n(2,l=""),[s,i,l,r]}class qn extends oe{constructor(e){super(),re(this,e,En,Cn,ee,{selectedGame:0})}}function Ct(t){let e,n,l;return{c(){e=d("input"),o(e,"type","text")},m(i,r){j(i,e,r),L(e,t[0]),n||(l=P(e,"input",t[12]),n=!0)},p(i,r){r&1&&e.value!==i[0]&&L(e,i[0])},d(i){i&&A(e),n=!1,l()}}}function Tn(t){let e,n,l,i,r,s,a,m,c,f,g,k,b,p,y,_,v,h,w,E,z,G,T,N,V,I,q,x,B,D,te,Y,C=t[5]&&Ct(t);return{c(){e=d("div"),n=d("h1"),n.textContent="Submit a New Entry",l=$(),i=d("div"),r=d("label"),r.textContent="What did you like?",s=d("input"),a=$(),m=d("div"),c=d("label"),c.textContent="What did you dislike?",f=d("input"),g=$(),k=d("div"),b=d("label"),b.textContent="Rate your session on a scale of 1-10",p=d("input"),y=$(),_=d("div"),v=H(t[1]),h=$(),w=d("div"),E=d("label"),E.textContent="Minutes Played This Session",z=$(),G=d("input"),T=$(),N=d("div"),V=d("label"),V.textContent="Add Goal?",I=$(),q=d("input"),x=$(),C&&C.c(),B=$(),D=d("button"),D.textContent="Submit",pe(n,"margin-top","0"),o(r,"for","notes"),o(s,"type","text"),o(s,"id","notes"),o(i,"class","svelte-oycut1"),o(c,"for","notes"),o(f,"type","text"),o(f,"id","notes"),o(m,"class","svelte-oycut1"),o(b,"for","rating"),o(p,"type","range"),o(p,"max","10"),o(p,"min","1"),o(p,"id","rating"),o(_,"class","svelte-oycut1"),o(k,"id","rating-container"),o(k,"class","svelte-oycut1"),o(E,"for","time-played"),o(G,"type","number"),o(G,"id","time-played"),o(G,"min","1"),o(w,"id","time-played-container"),o(w,"class","svelte-oycut1"),o(V,"for",""),o(q,"type","checkbox"),o(q,"name","add-goal-check"),o(q,"id","add-goal-check"),o(N,"class","svelte-oycut1"),o(D,"id","submit-button"),o(D,"class","svelte-oycut1"),o(e,"id","main-container"),o(e,"class","svelte-oycut1")},m(S,K){j(S,e,K),u(e,n),u(e,l),u(e,i),u(i,r),u(i,s),L(s,t[3]),u(e,a),u(e,m),u(m,c),u(m,f),L(f,t[4]),u(e,g),u(e,k),u(k,b),u(k,p),L(p,t[1]),u(k,y),u(k,_),u(_,v),u(e,h),u(e,w),u(w,E),u(w,z),u(w,G),L(G,t[2]),u(e,T),u(e,N),u(N,V),u(N,I),u(N,q),L(q,t[5]),u(N,x),C&&C.m(N,null),u(e,B),u(e,D),te||(Y=[P(s,"input",t[7]),P(f,"input",t[8]),P(p,"change",t[9]),P(p,"input",t[9]),P(G,"input",t[10]),P(q,"change",t[11]),P(D,"click",t[13])],te=!0)},p(S,[K]){K&8&&s.value!==S[3]&&L(s,S[3]),K&16&&f.value!==S[4]&&L(f,S[4]),K&2&&L(p,S[1]),K&2&&Q(v,S[1]),K&4&&Te(G.value)!==S[2]&&L(G,S[2]),K&32&&L(q,S[5]),S[5]?C?C.p(S,K):(C=Ct(S),C.c(),C.m(N,null)):C&&(C.d(1),C=null)},i:O,o:O,d(S){S&&A(e),C&&C.d(),te=!1,se(Y)}}}function Sn(t,e,n){let l,i,r,s;R(t,Se,E=>n(14,i=E)),R(t,be,E=>n(15,r=E)),R(t,ie,E=>n(16,s=E));let a="",m=1,c=0,f="",g="";function k(){const E=new Date;let z=`${E.getMonth()}/${E.getDate()}/${E.getFullYear()}`;F(ie,s[r].entries=[...s[r].entries,new de(s[r].entries.length,z,c,m,f,g)],s),l&&a!=""&&s[r].goals.addGoal(new tt(s[r].goals.goals.length,a,!1)),console.log(s[r]),F(Se,i=!0,i)}function b(){f=this.value,n(3,f)}function p(){g=this.value,n(4,g)}function y(){m=Te(this.value),n(1,m)}function _(){c=Te(this.value),n(2,c)}function v(){l=this.value,n(5,l)}function h(){a=this.value,n(0,a)}const w=()=>k();return n(5,l=!1),[a,m,c,f,g,l,k,b,p,y,_,v,h,w]}class In extends oe{constructor(e){super(),re(this,e,Sn,Tn,ee,{})}}function Et(t,{delay:e=0,duration:n=400,easing:l=Tt}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:r=>`opacity: ${r*i}`}}function Pn(t){let e,n,l,i,r,s,a,m,c,f,g,k,b,p,y,_,v,h,w,E,z,G,T,N,V,I,q,x;return{c(){e=d("div"),n=d("h1"),n.textContent="Edit an Entry",l=$(),i=d("div"),r=d("label"),r.textContent="What did you like?",s=d("input"),a=$(),m=d("div"),c=d("label"),c.textContent="What did you dislike?",f=d("input"),g=$(),k=d("div"),b=d("label"),b.textContent="Rate your session on a scale of 1-10",p=d("input"),y=$(),_=d("div"),v=H(t[0]),h=$(),w=d("div"),E=d("label"),E.textContent="Minutes Played This Session",z=$(),G=d("input"),T=$(),N=d("button"),N.textContent="Save",V=$(),I=d("button"),I.textContent="Cancel",pe(n,"margin-top","0"),o(r,"for","notes"),o(s,"type","text"),o(s,"id","notes"),o(i,"class","svelte-1xp4mw7"),o(c,"for","notes"),o(f,"type","text"),o(f,"id","notes"),o(m,"class","svelte-1xp4mw7"),o(b,"for","rating"),o(p,"type","range"),o(p,"max","10"),o(p,"min","1"),o(p,"id","rating"),o(_,"class","svelte-1xp4mw7"),o(k,"id","rating-container"),o(k,"class","svelte-1xp4mw7"),o(E,"for","time-played"),o(G,"type","number"),o(G,"id","time-played"),o(G,"min","1"),o(w,"id","time-played-container"),o(w,"class","svelte-1xp4mw7"),o(N,"id","submit-button"),o(N,"class","svelte-1xp4mw7"),o(I,"id","submit-button"),o(I,"class","svelte-1xp4mw7"),o(e,"id","main-container"),o(e,"class","svelte-1xp4mw7")},m(B,D){j(B,e,D),u(e,n),u(e,l),u(e,i),u(i,r),u(i,s),L(s,t[2]),u(e,a),u(e,m),u(m,c),u(m,f),L(f,t[3]),u(e,g),u(e,k),u(k,b),u(k,p),L(p,t[0]),u(k,y),u(k,_),u(_,v),u(e,h),u(e,w),u(w,E),u(w,z),u(w,G),L(G,t[1]),u(e,T),u(e,N),u(e,V),u(e,I),q||(x=[P(s,"input",t[6]),P(f,"input",t[7]),P(p,"change",t[8]),P(p,"input",t[8]),P(G,"input",t[9]),P(N,"click",t[10]),P(I,"click",t[11])],q=!0)},p(B,[D]){D&4&&s.value!==B[2]&&L(s,B[2]),D&8&&f.value!==B[3]&&L(f,B[3]),D&1&&L(p,B[0]),D&1&&Q(v,B[0]),D&2&&Te(G.value)!==B[1]&&L(G,B[1])},i:O,o:O,d(B){B&&A(e),q=!1,se(x)}}}function An(t,e,n){let l,i,r;R(t,ve,v=>n(12,l=v)),R(t,qe,v=>n(4,i=v)),R(t,Se,v=>n(13,r=v));let s=l.rating,a=l.playtime,m=l.like,c=l.dislike;function f(){F(Se,r=!0,r),F(qe,i=!1,i),F(ve,l.like=m,l),F(ve,l.dislike=c,l),F(ve,l.ratingValue=s,l),F(ve,l.playtime=a,l)}function g(){m=this.value,n(2,m)}function k(){c=this.value,n(3,c)}function b(){s=Te(this.value),n(0,s)}function p(){a=Te(this.value),n(1,a)}return[s,a,m,c,i,f,g,k,b,p,()=>f(),()=>F(qe,i=!1,i)]}class On extends oe{constructor(e){super(),re(this,e,An,Pn,ee,{})}}function Nn(t){let e,n;return e=new dn({}),{c(){ce(e.$$.fragment)},m(l,i){ne(e,l,i),n=!0},p:O,i(l){n||(X(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){le(e,l)}}}function Dn(t){let e,n,l;function i(s){t[5](s)}let r={};return t[1][t[2]]!==void 0&&(r.selectedGame=t[1][t[2]]),e=new qn({props:r}),Xe.push(()=>Dt(e,"selectedGame",i)),{c(){ce(e.$$.fragment)},m(s,a){ne(e,s,a),l=!0},p(s,a){const m={};!n&&a&6&&(n=!0,m.selectedGame=s[1][s[2]],Ot(()=>n=!1)),e.$set(m)},i(s){l||(X(e.$$.fragment,s),l=!0)},o(s){W(e.$$.fragment,s),l=!1},d(s){le(e,s)}}}function Mn(t){let e,n;return e=new On({}),{c(){ce(e.$$.fragment)},m(l,i){ne(e,l,i),n=!0},i(l){n||(X(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){le(e,l)}}}function Ln(t){let e,n;return e=new In({}),{c(){ce(e.$$.fragment)},m(l,i){ne(e,l,i),n=!0},i(l){n||(X(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){le(e,l)}}}function qt(t){let e,n,l,i,r;return{c(){e=d("div"),e.innerHTML='<div>Submitted!</div> <svg height="20" width="20"><circle r="10" cx="10" cy="10" fill="green"></circle><text x="50%" y="50%" text-anchor="middle">✔</text></svg>',o(e,"id","submitted-container")},m(s,a){j(s,e,a),l=!0,i||(r=P(e,"introend",t[6]),i=!0)},p:O,i(s){l||(s&&De(()=>{l&&(n||(n=mt(e,Et,{duration:1e3},!0)),n.run(1))}),l=!0)},o(s){s&&(n||(n=mt(e,Et,{duration:1e3},!1)),n.run(0)),l=!1},d(s){s&&A(e),s&&n&&n.end(),i=!1,r()}}}function jn(t){let e,n,l,i,r,s,a,m,c,f,g,k,b,p,y,_,v,h,w,E,z,G,T,N,V;l=new Gn({}),r=new un({});const I=[Dn,Nn],q=[];function x(C,S){return C[0]?1:0}f=x(t),g=q[f]=I[f](t),p=new hn({}),h=new vn({});const B=[Ln,Mn],D=[];function te(C,S){return C[3]?1:0}G=te(t),T=D[G]=B[G](t);let Y=t[4]&&qt(t);return{c(){e=d("div"),n=d("div"),ce(l.$$.fragment),i=$(),ce(r.$$.fragment),s=$(),a=d("hr"),m=$(),c=d("div"),g.c(),k=$(),b=d("div"),ce(p.$$.fragment),y=$(),_=d("hr"),v=$(),ce(h.$$.fragment),w=$(),E=d("hr"),z=$(),T.c(),N=$(),Y&&Y.c(),o(n,"id","game-carousel"),o(n,"class","svelte-1o7a6mu"),o(a,"class","svelte-1o7a6mu"),o(c,"id","information"),o(c,"class","svelte-1o7a6mu"),o(e,"id","left-container"),o(e,"class","svelte-1o7a6mu"),o(_,"id","right-container-hr"),o(_,"class","svelte-1o7a6mu"),o(E,"id","right-container-hr"),o(E,"class","svelte-1o7a6mu"),o(b,"id","right-container"),o(b,"class","svelte-1o7a6mu")},m(C,S){j(C,e,S),u(e,n),ne(l,n,null),u(n,i),ne(r,n,null),u(e,s),u(e,a),u(e,m),u(e,c),q[f].m(c,null),j(C,k,S),j(C,b,S),ne(p,b,null),u(b,y),u(b,_),u(b,v),ne(h,b,null),u(b,w),u(b,E),u(b,z),D[G].m(b,null),u(b,N),Y&&Y.m(b,null),V=!0},p(C,[S]){let K=f;f=x(C),f===K?q[f].p(C,S):(Oe(),W(q[K],1,1,()=>{q[K]=null}),Ne(),g=q[f],g?g.p(C,S):(g=q[f]=I[f](C),g.c()),X(g,1),g.m(c,null));let fe=G;G=te(C),G!==fe&&(Oe(),W(D[fe],1,1,()=>{D[fe]=null}),Ne(),T=D[G],T||(T=D[G]=B[G](C),T.c()),X(T,1),T.m(b,N)),C[4]?Y?(Y.p(C,S),S&16&&X(Y,1)):(Y=qt(C),Y.c(),X(Y,1),Y.m(b,null)):Y&&(Oe(),W(Y,1,1,()=>{Y=null}),Ne())},i(C){V||(X(l.$$.fragment,C),X(r.$$.fragment,C),X(g),X(p.$$.fragment,C),X(h.$$.fragment,C),X(T),X(Y),V=!0)},o(C){W(l.$$.fragment,C),W(r.$$.fragment,C),W(g),W(p.$$.fragment,C),W(h.$$.fragment,C),W(T),W(Y),V=!1},d(C){C&&(A(e),A(k),A(b)),le(l),le(r),q[f].d(),le(p),le(h),D[G].d(),Y&&Y.d()}}}function zn(t,e,n){let l,i,r,s,a;R(t,Ee,f=>n(0,l=f)),R(t,ie,f=>n(1,i=f)),R(t,be,f=>n(2,r=f)),R(t,qe,f=>n(3,s=f)),R(t,Se,f=>n(4,a=f));function m(f){t.$$.not_equal(i[r],f)&&(i[r]=f,ie.set(i))}return[l,i,r,s,a,m,()=>F(Se,a=!1,a)]}class Rn extends oe{constructor(e){super(),re(this,e,zn,jn,ee,{})}}new Rn({target:document.getElementById("app")});
