import{_ as n,u as h,j as e,M as x,T as m,a as d,B as p}from"./app-Ckmw_dlB.js";const g="_gradientDivider_1xoxy_11",S="_heroStrapline1_1xoxy_20",w="_heroStrapline_1xoxy_20",u="_heroStraplineContainer_1xoxy_29",y="_animate_1xoxy_40",C="_tags_1xoxy_50",j="_topSection_1xoxy_51",v="_mainContainer_1xoxy_76",I="_atThirdStrand_1xoxy_84",E="_heroStrapline2_1xoxy_87",D="_showcaseOverview_1xoxy_88",b="_showcaseContent01_1xoxy_100",O="_showcaseImage02Icon_1xoxy_110",P="_heroStrapline4_1xoxy_118",T="_heroStrapline5_1xoxy_119",L="_showcaseContent02_1xoxy_135",N="_mortgageCalculatorEmpower_1xoxy_145",f="_mortgageCalculatorEmpowerC_1xoxy_148",$="_heroStrapline9_1xoxy_154",A="_showcaseImage03Icon_1xoxy_163",R="_bottomSection_1xoxy_171",V="_showcase01_1xoxy_172",t={gradientDivider:g,heroStrapline1:S,heroStrapline:w,heroStraplineContainer:u,animate:y,"slide-in-bottom":"_slide-in-bottom_1xoxy_1",tags:C,topSection:j,mainContainer:v,atThirdStrand:I,heroStrapline2:E,showcaseOverview:D,showcaseContent01:b,showcaseImage02Icon:O,heroStrapline4:P,heroStrapline5:T,showcaseContent02:L,mortgageCalculatorEmpower:N,mortgageCalculatorEmpowerC:f,heroStrapline9:$,showcaseImage03Icon:A,bottomSection:R,showcase01:V},k=()=>{const{title:r,description:c,headerImage:a,blurb:s,tags:i,sections:_}=h();return e.jsx(x,{strapLineData:{title:r,description:c},headerImage:a,children:e.jsxs("div",{className:t.mainContainer,children:[e.jsx("div",{className:t.tags,children:i==null?void 0:i.map((o,l)=>e.jsx(m,{...o},`tag-${l}`))}),s&&e.jsx(d,{...s}),_&&_.map((o,l)=>e.jsxs("div",{className:t.showcaseContent02,children:[e.jsxs("div",{className:t.showcaseContent02,children:[o.title&&e.jsx("b",{className:t.heroStrapline4,children:o.title}),o.description&&e.jsx("div",{className:t.heroStrapline5,children:o.description})]}),o.image&&e.jsx("img",{className:t.showcaseImage02Icon,alt:"",src:o.image},`section-img-${l}`)]},`section-${l}`)),e.jsx(p,{})]})})},B=k,F=B,J="src/pages/case-studies/[caseStudy].tsx";async function W({params:r}){const c=await n(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),a=r.caseStudy,_=`${`${process.cwd()}/case-studies/`}${a}.json`;return JSON.parse(c.readFileSync(_,"utf-8"))}function q(){return Object.keys(Object.assign({"/case-studies/all-links.json":()=>n(()=>import("./all-links-DJpoVi4q.js"),[]),"/case-studies/kitsumon.json":()=>n(()=>import("./kitsumon-DWBXxbW7.js"),[]),"/case-studies/mortgage-advisor.json":()=>n(()=>import("./mortgage-advisor-C8FCKaRc.js"),[]),"/case-studies/woof-avenue.json":()=>n(()=>import("./woof-avenue-BIrSRKd6.js"),[])})).map(a=>{var s;return"/case-studies/"+((s=a.match(/\/case-studies\/(.*)\.json$/))==null?void 0:s[1])})}export{F as Component,B as component,J as entry,q as getStaticPaths,W as loader};