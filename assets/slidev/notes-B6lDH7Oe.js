import{g as T,h as E,i as U,j as D}from"../modules/unplugin-icons-BD7Fk_YE.js";import{d as H,t as y,W as L,z as r,E as V,o as u,b as j,e as o,h as C,B as l,l as s,k as _,c as z,x as b,F as I}from"../modules/vue-BSsdF-s8.js";import{u as M,a as P,d as t,e as R,s as W,f as q}from"../index-Duz-MLHI.js";import{_ as A,C as G}from"./ClicksSlider-or9JNgcI.js";import{_ as p}from"./IconButton.vue_vue_type_script_setup_true_lang-CD6BmK3h.js";import"../modules/shiki-qrO66o78.js";const J={class:"h-full pt-2 flex flex-col"},K={class:"flex-none border-t border-main",px3:"",py2:""},O={class:"flex-none border-t border-main"},Q={class:"flex gap-1 items-center px-6 py-3"},X=o("div",{class:"flex-auto"},null,-1),Y={class:"p2 text-center"},ae=H({__name:"notes",setup(Z){M({title:`Notes - ${W}`});const{slides:w,total:d}=P(),{isFullscreen:f,toggle:S}=q,m=y(),n=L("slidev-notes-font-size",18),a=r(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),v=r(()=>w.value.find(e=>e.no===a.value));V(a,()=>{var e;(e=m.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function B(){n.value=n.value-1}const x=r(()=>{var c,i;const e=((c=t.lastUpdate)==null?void 0:c.type)==="viewer"?t.viewerClicks:t.clicks,h=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return R(y(e),void 0,h)});return(e,h)=>{var k,g;const c=U,i=D,F=T,N=E;return u(),j(I,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(d)-1)*100+1}%`})},null,4),o("div",J,[o("div",{ref_key:"scroller",ref:m,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(n)}px`})},[s(A,{note:(k=v.value)==null?void 0:k.meta.slide.note,"note-html":(g=v.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",K,[s(G,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),o("div",O,[o("div",Q,[s(p,{title:l(f)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:_(()=>[l(f)?(u(),z(c,{key:0})):(u(),z(i,{key:1}))]),_:1},8,["title","onClick"]),s(p,{title:"Increase font size",onClick:$},{default:_(()=>[s(F)]),_:1}),s(p,{title:"Decrease font size",onClick:B},{default:_(()=>[s(N)]),_:1}),X,o("div",Y,b(a.value)+" / "+b(l(d)),1)])])])],64)}}});export{ae as default};
