(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{166:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(41),r=s(156),i=s(0);var o=Object(n.connect)(({state:e,item:t})=>{const s=e.source.author[t.author],n=new Date(t.date);return Object(i.jsxs)("article",{children:[Object(i.jsx)(c.a,{link:t.link,children:Object(i.jsx)(a,{dangerouslySetInnerHTML:{__html:t.title.rendered}})}),Object(i.jsxs)("div",{children:[s&&Object(i.jsx)(l,{link:s.link,children:Object(i.jsxs)(d,{children:["By ",Object(i.jsx)("b",{children:s.name})]})}),Object(i.jsxs)(j,{children:[" ","on ",Object(i.jsx)("b",{children:n.toDateString()})]})]}),e.theme.featured.showOnList&&Object(i.jsx)(r.a,{id:t.featured_media}),t.excerpt&&Object(i.jsx)(b,{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}})]})});const a=Object(n.styled)("h1",{target:"e1p5zhim4"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),d=Object(n.styled)("span",{target:"e1p5zhim3"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),l=Object(n.styled)(c.a,{target:"e1p5zhim2"})({name:"1k93czn",styles:"padding:15px 0"}),j=Object(n.styled)("span",{target:"e1p5zhim1"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),b=Object(n.styled)("div",{target:"e1p5zhim0"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"});var h=s(2);var O=Object(n.connect)(({state:e,actions:t})=>{const{next:s,previous:n}=e.source.get(e.router.link);return Object(h.useEffect)(()=>{s&&t.source.fetch(s)},[]),Object(i.jsxs)("div",{children:[s&&Object(i.jsx)(c.a,{link:s,children:Object(i.jsx)(x,{children:"← Older posts"})}),n&&s&&" - ",n&&Object(i.jsx)(c.a,{link:n,children:Object(i.jsx)(x,{children:"Newer posts →"})})]})});const x=Object(n.styled)("em",{target:"esft81u0"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(n.connect)(({state:e})=>{const t=e.source.get(e.router.link);return Object(i.jsxs)(m,{children:[t.isTaxonomy&&Object(i.jsxs)(g,{children:[t.taxonomy,":"," ",Object(i.jsx)("b",{children:Object(n.decode)(e.source[t.taxonomy][t.id].name)})]}),t.isAuthor&&Object(i.jsxs)(g,{children:["Author: ",Object(i.jsx)("b",{children:Object(n.decode)(e.source.author[t.id].name)})]}),t.items.map(({type:t,id:s})=>{const n=e.source[t][s];return Object(i.jsx)(o,{item:n},n.id)}),Object(i.jsx)(O,{})]})});const m=Object(n.styled)("section",{target:"exiu6z11"})({name:"1uk7fhg",styles:"width:800px;margin:0;padding:24px;list-style:none"}),g=Object(n.styled)("h3",{target:"exiu6z10"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"})}}]);