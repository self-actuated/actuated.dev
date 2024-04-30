(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3260)}])},3260:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var s,n,i=a(5893),l=a(1664),r=a.n(l),o=a(7294),d=a(2984),c=a(2351),m=a(3784),u=a(9946),x=a(1363),h=a(4103),g=a(6567),p=a(4157),f=a(5466),b=a(3781),y=((s=y||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),w=((n=w||{})[n.ToggleDisclosure=0]="ToggleDisclosure",n[n.CloseDisclosure=1]="CloseDisclosure",n[n.SetButtonId=2]="SetButtonId",n[n.SetPanelId=3]="SetPanelId",n[n.LinkPanel=4]="LinkPanel",n[n.UnlinkPanel=5]="UnlinkPanel",n);let v={0:e=>({...e,disclosureState:(0,d.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},j=(0,o.createContext)(null);function N(e){let t=(0,o.useContext)(j);if(null===t){let a=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,N),a}return t}j.displayName="DisclosureContext";let k=(0,o.createContext)(null);k.displayName="DisclosureAPIContext";let S=(0,o.createContext)(null);function A(e,t){return(0,d.E)(t.type,v,e,t)}S.displayName="DisclosurePanelContext";let C=o.Fragment,I=(0,c.yV)(function(e,t){let{defaultOpen:a=!1,...s}=e,n=(0,o.useRef)(null),i=(0,m.T)(t,(0,m.h)(e=>{n.current=e},void 0===e.as||e.as===o.Fragment)),l=(0,o.useRef)(null),r=(0,o.useRef)(null),u=(0,o.useReducer)(A,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:r,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:x,buttonId:h},p]=u,y=(0,b.z)(e=>{p({type:1});let t=(0,f.r)(n);if(!t||!h)return;let a=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(h):t.getElementById(h);null==a||a.focus()}),w=(0,o.useMemo)(()=>({close:y}),[y]),v=(0,o.useMemo)(()=>({open:0===x,close:y}),[x,y]);return o.createElement(j.Provider,{value:u},o.createElement(k.Provider,{value:w},o.createElement(g.up,{value:(0,d.E)(x,{0:g.ZM.Open,1:g.ZM.Closed})},(0,c.sY)({ourProps:{ref:i},theirProps:s,slot:v,defaultTag:C,name:"Disclosure"}))))}),E=(0,c.yV)(function(e,t){let a=(0,u.M)(),{id:s=`headlessui-disclosure-button-${a}`,...n}=e,[i,l]=N("Disclosure.Button"),r=(0,o.useContext)(S),d=null!==r&&r===i.panelId,g=(0,o.useRef)(null),f=(0,m.T)(g,t,d?null:i.buttonRef);(0,o.useEffect)(()=>{if(!d)return l({type:2,buttonId:s}),()=>{l({type:2,buttonId:null})}},[s,l,d]);let y=(0,b.z)(e=>{var t;if(d){if(1===i.disclosureState)return;switch(e.key){case x.R.Space:case x.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=i.buttonRef.current)||t.focus()}}else switch(e.key){case x.R.Space:case x.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),w=(0,b.z)(e=>{e.key===x.R.Space&&e.preventDefault()}),v=(0,b.z)(t=>{var a;(0,h.P)(t.currentTarget)||e.disabled||(d?(l({type:0}),null==(a=i.buttonRef.current)||a.focus()):l({type:0}))}),j=(0,o.useMemo)(()=>({open:0===i.disclosureState}),[i]),k=(0,p.f)(e,g),A=d?{ref:f,type:k,onKeyDown:y,onClick:v}:{ref:f,id:s,type:k,"aria-expanded":e.disabled?void 0:0===i.disclosureState,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:y,onKeyUp:w,onClick:v};return(0,c.sY)({ourProps:A,theirProps:n,slot:j,defaultTag:"button",name:"Disclosure.Button"})}),D=c.AN.RenderStrategy|c.AN.Static,M=Object.assign(I,{Button:E,Panel:(0,c.yV)(function(e,t){let a=(0,u.M)(),{id:s=`headlessui-disclosure-panel-${a}`,...n}=e,[i,l]=N("Disclosure.Panel"),{close:r}=function e(t){let a=(0,o.useContext)(k);if(null===a){let s=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,e),s}return a}("Disclosure.Panel"),d=(0,m.T)(t,i.panelRef,e=>{l({type:e?4:5})});(0,o.useEffect)(()=>(l({type:3,panelId:s}),()=>{l({type:3,panelId:null})}),[s,l]);let x=(0,g.oJ)(),h=null!==x?x===g.ZM.Open:0===i.disclosureState,p=(0,o.useMemo)(()=>({open:0===i.disclosureState,close:r}),[i,r]);return o.createElement(S.Provider,{value:i.panelId},(0,c.sY)({ourProps:{ref:d,id:s},theirProps:n,slot:p,defaultTag:"div",features:D,visible:h,name:"Disclosure.Panel"}))})}),H=o.forwardRef(function({title:e,titleId:t,...a},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});var P=[{question:"What is Firecracker? Why is it better than a container?",answer:"Generally, any use of containers for CI means bypassing security, so that any job can take over a host or the cluster. Actuated uses Firecracker, an open-source project built by AWS to fully isolate every job with an immutable microVM.",link:"https://www.youtube.com/watch?v=CYCsa5e2vqg",action:"Watch our Firecracker webinar"},{question:"Can we talk to you before signing up for a plan?",answer:"Just fill out the form for a call with our founder. If you think our solution is a good fit, you can be up and running on the same day.",link:"https://docs.google.com/forms/d/e/1FAIpQLScA12IGyVFrZtSAp2Oj24OdaSMloqARSwoxx3AZbQbs0wpGww/viewform",action:"Schedule a call"},{question:"How much does it cost? What is the right plan for our team?",answer:"We are offering unmetered billing with a flat-rate monthly subscription. You can use as many minutes as you like."},{question:"What kind of support do you offer?",answer:"For the pilot, every customer is invited to a Slack channel for collaboration and support. We have operational experience with GitHub Actions, Docker and Kubernetes and we're making time to help you tune your builds up to get the most out of them."},{question:"What kinds of servers do I need?",answer:"You can use your own physical servers, nested virtualisation with cloud VMs or rent instances paid by the hour.",link:"https://docs.actuated.dev/provision-server/",action:"Explore server options"},{question:"Doesn't GitHub already offer faster runners?",answer:"GitHub are in a beta phase for larger runners for their Team and Enterprises plans, these have an increased cost vs. standard runners and there is no Arm support. With actuated you get much faster speeds at a flat rate cost, with usage insights across your team and organisation."},{question:"What are the differences vs. Actions Runtime Controller?",answer:"actions-runtime-controller compromises the security of a Kubernetes cluster by using privileged containers or by mounting the Docker socket - both mean that code in a CI job can take over the host - or potentially the cluster.",link:"https://actuated.dev/blog/blazing-fast-ci-with-microvms"},{question:"How much faster is an Arm build than using hosted runners?",answer:"In our testing of the open source Parca project, we got the build time down from 33 minutes to 1 minute 26s simply by changing to an Arm runner instead of using QEMU. For Network Service Mesh, Dasch Swiss and Calyptia - their builds couldn't complete within 6 hours, all complete in 4-20 minutes with actuated.",link:"/blog/native-arm64-for-github-actions",action:"Read a case study"},{question:"How do I launch jobs in parallel?",answer:"Have a look at the examples in our docs for matrix builds. Each job within the workflow will be launched in a separate, parallel VM.",link:"https://docs.actuated.dev/"},{question:"How mature is actuated?",answer:"Actuated is built on battle tested technology that's run in production at huge scale by Amazon Web Services (AWS) and GitHub. Our solution has launched over 25k VMs for customers already, without issue."},{question:"Is GitLab supported?",answer:"We have a tech preview for self-hosted GitLab.",link:"https://actuated.dev/blog/secure-microvm-ci-gitlab",action:"Read the announcement"},{question:"Where can I find detailed information about actuated?",answer:"We cover most common questions in much more detail over in the FAQ in the docs.",link:"https://docs.actuated.dev/faq",action:"FAQ"}];function R(){return(0,i.jsx)("div",{className:"bg-gray-50",children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"mx-auto max-w-3xl divide-y-2 divide-gray-200",children:[(0,i.jsx)("h2",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Frequently asked questions"}),(0,i.jsx)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-200",children:P.map(function(e){return(0,i.jsx)(M,{as:"div",className:"pt-6",children:function(t){var a=t.open;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("dt",{className:"text-lg",children:(0,i.jsxs)(M.Button,{className:"flex w-full items-start justify-between text-left text-gray-400",children:[(0,i.jsx)("span",{className:"font-medium text-gray-900",children:e.question}),(0,i.jsx)("span",{className:"ml-6 flex h-7 items-center",children:(0,i.jsx)(H,{className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}(a?"-rotate-180":"rotate-0","h-6 w-6 transform"),"aria-hidden":"true"})})]})}),(0,i.jsx)(M.Panel,{as:"dd",className:"mt-2 pr-12",children:(0,i.jsxs)("p",{className:"text-base text-gray-500",children:[e.answer," ",e.link?(0,i.jsx)("a",{href:e.link,className:"text-blue-500 underline",children:e.action?e.action:"Learn more"}):""," "]})})]})}},e.question)})})]})})})}var G=a(5995),T=a(8097),W=a(3707);let O=o.forwardRef(function({title:e,titleId:t,...a},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{fillRule:"evenodd",d:"M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z",clipRule:"evenodd"}))}),L=o.forwardRef(function({title:e,titleId:t,...a},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M4.464 3.162A2 2 0 016.28 2h7.44a2 2 0 011.816 1.162l1.154 2.5c.067.145.115.291.145.438A3.508 3.508 0 0016 6H4c-.288 0-.568.035-.835.1.03-.147.078-.293.145-.438l1.154-2.5z"}),o.createElement("path",{fillRule:"evenodd",d:"M2 9.5a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V9.5zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V9.5a.75.75 0 00-.75-.75h-.01zM2 15a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z",clipRule:"evenodd"}))});function B(){return(0,i.jsxs)("div",{id:"solutions",className:"bg-white py-5 sm:py-5 lg:py-5",children:[(0,i.jsxs)("div",{className:"mx-auto mt-10 max-w-xl px-4 lg:max-w-7xl lg:px-6",children:[(0,i.jsx)("p",{className:"mt-6 mx-10 text-2xl font-semibold leading-8 tracking-tight text-gray-900",children:"Increase speed, security and efficiency."}),(0,i.jsxs)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:["Learn what friction actuated solves and how it compares to other solutions: ",(0,i.jsx)("a",{className:"text-blue-500 underline",href:"/blog/blazing-fast-ci-with-microvms",children:"Read the announcement"})]})]}),(0,i.jsx)("div",{className:"mx-auto mt-16 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-6xl",children:(0,i.jsxs)("dl",{className:"grid mx-5 md:mx-auto lg:mx-5 xl:mx-auto 2xl:mx-auto max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",children:[(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(G.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Secure CI that feels like hosted."]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsx)("p",{className:"mb-2",children:"Every job runs in an immutable microVM, just like hosted runners, but on your own servers."}),(0,i.jsxs)("p",{className:"mb-2",children:["That means you can run ",(0,i.jsx)("code",{children:"sudo"}),", Docker and Kubernetes directly, just like you do during development, there's no need for Docker-in-Docker (DIND), Kaniko or complex user-namespaces."]}),(0,i.jsx)("p",{className:"mb-2",children:"What about management and scheduling? Provision a server with a minimal Operating System, then install the agent. We'll do the rest."})]})]}),(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(W.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Arm / M1 from Dev to Production."]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsx)("p",{className:"mb-2",children:"Apple Silicon is a new favourite for developer workstations. Did you know that when your team run Docker, they're using an Arm VM?"}),(0,i.jsx)("p",{children:"With actuated, those same builds can be performed on Arm servers during CI, and even deployed to production on more efficient Ampere or AWS Graviton servers."})]})]}),(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(L,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Run directly within your datacenter."]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsx)("p",{className:"mb-2",children:"If you work with large container images or datasets, then you'll benefit from having your CI run with direct local network access to your internal network."}),(0,i.jsx)("p",{className:"mb-2",children:"This is not possible with hosted runners, and this is crucial for one of our customers who can regularly saturate a 10GbE link during GitHub Actions runs."}),(0,i.jsx)("p",{className:"mb-2",children:"In contrast, VPNs are complex to manage, capped on speed, and incur costly egress charges."})]})]}),(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(T.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Debug live over SSH"]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsxs)("p",{className:"mb-2",children:['We heard from many teams that they missed CircleCI\'s "debug this job" button, ',(0,i.jsx)("a",{href:"https://docs.actuated.dev/tasks/debug-ssh/",className:"text-blue-500 underline",children:"so we built it for you."})]}),(0,i.jsx)("p",{children:"We realise you won't debug your jobs on a regular basis, but when you are stuck, and have to wait 15-20 minutes to get to the line you've changed in a job, debugging with a terminal can save you hours."}),(0,i.jsx)("p",{className:"mt-2",children:(0,i.jsx)("i",{children:'"How cool!!! you don\'t know how many hours I have lost on GitHub Actions without this." - Ivan Subotic, Swiss National Data and Service Center (DaSCH)'})})]})]})]})}),(0,i.jsxs)("div",{className:"mx-auto mt-10 max-w-xl px-4 lg:max-w-7xl lg:px-6",children:[(0,i.jsx)("p",{className:"mt-6 mx-10 text-2xl font-semibold leading-8 tracking-tight text-gray-900",children:"Lower your costs, and keep them there."}),(0,i.jsx)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:"Actuated is billed by the maximum amount of concurrent jobs you can run, so no matter how many build minutes your team requires, the charge will not increase with usage."}),(0,i.jsx)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:"In a recent interview, a lead SRE at UK-based scale-up told us that their bill had increased 5x over the past 6 months. They are now paying 5000 GBP / month and we worked out that we could make their builds faster and at least halve their costs."})]}),(0,i.jsx)("div",{className:"mx-auto mt-16 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-6xl",children:(0,i.jsxs)("dl",{className:"grid mx-5 md:mx-auto lg:mx-5 xl:mx-auto 2xl:mx-auto max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",children:[(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(O,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Lower management costs."]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsx)("p",{className:"mb-2",children:"Whenever your team has to manage self-hosted runners, or explain non-standard tools like Kaniko to developers, you're losing money."}),(0,i.jsx)("p",{className:"mb-2",children:"With actuated, you bring your own servers, install our agent, and we do the rest. Our VM image is built with automation and kept up to date, so you don't have to manage packages."})]})]}),(0,i.jsxs)("div",{className:"relative pl-16",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900 text-lg",children:[(0,i.jsx)("div",{className:"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",children:(0,i.jsx)(O,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),"Predictable billing."]}),(0,i.jsxs)("dd",{className:"mt-2 text-base leading-7 text-gray-600",children:[(0,i.jsx)("p",{className:"mb-2",children:"Most small teams we interviewed were spending at least 1000-1500 USD / mo for slower hosted runners."}),(0,i.jsx)("p",{className:"mb-2",children:'That cost would multiply if moved to GitHub\'s "bigger runners" and increas with usage. But with actuated the cost is flat-rate, no matter how many minutes you use.'})]})]})]})}),(0,i.jsxs)("div",{className:"mx-auto mt-10 max-w-xl px-4 lg:max-w-7xl lg:px-6",children:[(0,i.jsx)("p",{className:"mt-6 mx-10 text-2xl font-semibold leading-8 tracking-tight text-gray-900",children:"Get insights into your organisation"}),(0,i.jsx)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:"When you have more than a few teammates and a dozen repositories, it's near impossible to get insights into patterns of usage."}),(0,i.jsx)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:"Inspired by Google Analytics, Actuated contrasts usage for the current period vs the previous period - for the whole organisation, each repository and each developer."}),(0,i.jsx)("img",{className:"rounded-lg shadow-lg object-cover object-center mt-4 mx-10 ",src:"https://docs.actuated.dev/images/dashboard/org-usage.png",alt:"Organisational level insights"}),(0,i.jsx)("p",{className:"text-base text-gray-500 mt-10 mt-4 mx-10",children:(0,i.jsx)("a",{href:"https://docs.actuated.dev/dashboard/",className:"text-blue-500 underline",children:"Learn about the actuated dashboard"})})]})]})}function F(){return(0,i.jsx)("div",{className:"bg-white",children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4",children:[(0,i.jsx)("div",{className:"px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20",children:(0,i.jsxs)("div",{className:"lg:self-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-white sm:text-4xl",children:(0,i.jsx)("span",{className:"block",children:"Ready to go faster?"})}),(0,i.jsx)("p",{className:"mt-4 text-lg leading-6 text-indigo-200",children:"You can try out actuated on a monthly basis, with no commitment beyond that."}),(0,i.jsx)("a",{href:"/pricing",className:"mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50",children:"Make your builds faster today"})]})}),(0,i.jsx)("div",{className:"aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1",children:(0,i.jsx)("img",{className:"translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",src:"/images/k3sup.png",alt:"Matrix build with k3sup"})})]})})})}var q=[{body:"Our team loves actuated. It gave us a 3x speed increase on a Go repo that we build throughout the day. Alex and team are really responsive, and we're already happy customers of OpenFaaS and Inlets.",author:{name:"Shaked Askayo",handle:"CTO, Kubiya.ai",imageUrl:"/images/shaked-askayo.jpg"}},{body:"We just switched from Actions Runtime Controller to Actuated. It only took 30s create 5x isolated VMs, run the jobs and tear them down again inside our on-prem environment (no Docker socket mounting shenanigans)! Pretty impressive stuff.",author:{name:"Addison van den Hoeven",handle:"DevOps Lead, Riskfuel",imageUrl:"/images/addison.jpg"}},{body:"From my time at Mirantis, I learned how slow and unreliable Docker In Docker can be. Compared to GitHub's 16 core runners, actuated is 2-3x faster for us.",author:{name:"Sergei Lukianov",handle:"Founding Engineer, Githedgehog",imageUrl:"/images/sergei.jpg"}},{body:"This is great, perfect for jobs that take forever on normal GitHub runners. I love what Alex is doing here.",author:{name:"Richard Case",handle:"Principal Engineer, SUSE",imageUrl:"/images/richardcase.jpg"}},{body:"We needed to build public repos on Arm runners, but QEMU couldn't finish in 6 hours, so we had to turn the build off. Actuated now builds the same code in 4 minutes.",author:{name:"Patrick Stephens",handle:"Tech Lead of Infrastructure, Calyptia/Fluent Bit.",imageUrl:"/images/patrick-stephens.jpg"}},{body:"We needed to build Arm containers for our customers to deploy to Graviton instances on AWS EC2. Hosted runners with QEMU failed to finish within the 6 hour limit. With actuated it takes 20 minutes - and thanks to Firecracker, each build is safely isolated for our open source repositories.",author:{name:"Ivan Subotic",handle:"Head of Engineering, Swiss National Data and Service Center for the Humanities",imageUrl:"/images/ivan-subotic.jpg"}},{body:"One of our Julia builds was taking 5 hours of compute time to complete, and was costing us over 1500USD / mo. Alex's team got us a 3x improvement on speed and lowered our costs at the same time. Actuated is working great for us.",author:{name:"Justin Gray, Ph.D.",handle:"CTO & Co-founder at Toolpath",imageUrl:"/images/justin-gray.png"}}];function z(){return(0,i.jsx)("div",{className:"bg-white py-10 sm:py-15",children:(0,i.jsxs)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[(0,i.jsx)("div",{className:"mx-auto max-w-xl text-center",children:(0,i.jsx)("p",{className:"mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"These are the results you've been waiting for"})}),(0,i.jsx)("div",{className:"mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none",children:(0,i.jsx)("div",{className:"-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2",children:q.map(function(e){return(0,i.jsx)("div",{className:"pt-8 sm:inline-block sm:w-full sm:px-4",children:(0,i.jsxs)("figure",{className:"rounded-2xl bg-gray-50 p-8 text-base leading-6",children:[(0,i.jsx)("blockquote",{className:"text-gray-900",children:(0,i.jsx)("p",{children:"“".concat(e.body,"”")})}),(0,i.jsxs)("figcaption",{className:"mt-6 flex items-center gap-x-4",children:[(0,i.jsx)("img",{className:"h-10 w-10 rounded-full bg-gray-50",src:e.author.imageUrl,alt:""}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-semibold text-gray-900",children:e.author.name}),(0,i.jsx)("div",{className:"text-gray-600",children:"".concat(e.author.handle)})]})]})]})},e.author.handle)})})})]})})}function U(){return(0,i.jsx)("section",{className:"bg-indigo-800",children:(0,i.jsxs)("div",{className:"mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8",children:[(0,i.jsxs)("div",{className:"py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16",children:[(0,i.jsx)("div",{className:"md:flex-shrink-0",children:(0,i.jsx)("img",{className:"h-12",src:"/images/waffle-labs.png",alt:"Tuple"})}),(0,i.jsxs)("blockquote",{className:"mt-6 md:flex md:flex-grow md:flex-col",children:[(0,i.jsxs)("div",{className:"relative text-lg font-medium text-white md:flex-grow",children:[(0,i.jsx)("svg",{className:"absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600",fill:"currentColor",viewBox:"0 0 32 32","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"})}),(0,i.jsx)("p",{className:"relative",children:"After one week actuated has been a huge improvement! Even our relatively fast Go build seems to be running 30%+ faster and being able to commit to several repos and only wait 10 minutes instead of an hour has been transformative."})]}),(0,i.jsx)("footer",{className:"mt-8",children:(0,i.jsxs)("div",{className:"flex items-start",children:[(0,i.jsx)("div",{className:"inline-flex flex-shrink-0 rounded-full border-2 border-white",children:(0,i.jsx)("img",{className:"h-12 w-12 rounded-full",src:"/images/steven-byrnes.jpg",alt:""})}),(0,i.jsxs)("div",{className:"ml-4",children:[(0,i.jsx)("div",{className:"text-base font-medium text-white",children:"Steven Byrnes"}),(0,i.jsx)("div",{className:"text-base font-medium text-indigo-200",children:"VP Engineering, Waffle Labs"})]})]})})]})]}),(0,i.jsxs)("div",{className:"py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16",children:[(0,i.jsx)("div",{className:"md:flex-shrink-0",children:(0,i.jsx)("img",{className:"h-12",src:"/images/settlemint.png",alt:"SettleMint"})}),(0,i.jsxs)("blockquote",{className:"mt-6 md:flex md:flex-grow md:flex-col",children:[(0,i.jsxs)("div",{className:"relative text-lg font-medium text-white md:flex-grow",children:[(0,i.jsx)("svg",{className:"absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600",fill:"currentColor",viewBox:"0 0 32 32","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"})}),(0,i.jsx)("p",{className:"relative",children:"Finally our self-hosted GitHub Actions Runners are on fire \uD83D\uDD25. Thanks to Alex for all the help onboarding our monorepo with NX, Docker, x86 and Arm on bare-metal."}),(0,i.jsx)("p",{className:"relative mt-2",children:"Our worst case build/deploy went down from 1h to 20-30mins, for a repo with 200k lines-of-code."})]}),(0,i.jsx)("footer",{className:"mt-8",children:(0,i.jsxs)("div",{className:"flex items-start",children:[(0,i.jsx)("div",{className:"inline-flex flex-shrink-0 rounded-full border-2 border-white",children:(0,i.jsx)("img",{className:"h-12 w-12 rounded-full",src:"/images/roderik-van-der-veer.jpg",alt:""})}),(0,i.jsxs)("div",{className:"ml-4",children:[(0,i.jsx)("div",{className:"text-base font-medium text-white",children:"Roderik van der Veer"}),(0,i.jsx)("div",{className:"text-base font-medium text-indigo-200",children:"Founder & CTO at SettleMint"})]})]})})]})]})]})})}function V(){return(0,i.jsx)("section",{className:"overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24",children:(0,i.jsxs)("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,i.jsxs)("svg",{className:"absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2",width:404,height:404,fill:"none",viewBox:"0 0 404 404",role:"img","aria-labelledby":"svg-workcation",children:[(0,i.jsx)("title",{id:"svg-workcation",children:"Workcation"}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:"ad119f34-7694-4c31-947f-5c9d249b21f3",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:(0,i.jsx)("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),(0,i.jsx)("rect",{width:404,height:404,fill:"url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"})]}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("svg",{className:"mx-auto h-8",fill:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),(0,i.jsxs)("blockquote",{className:"mt-10",children:[(0,i.jsxs)("div",{className:"mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900",children:[(0,i.jsx)("p",{children:"“It's cheaper - and less frustrating for your developers — to pay more for better hardware to keep your team on track."}),(0,i.jsx)("p",{children:"The upfront cost for more CPU power pays off over time. And your developers will thank you.”"}),(0,i.jsx)("p",{children:"\xa0"}),(0,i.jsxs)("p",{className:"text-sm",children:["Read the article: ",(0,i.jsx)("a",{className:"hover:underline",href:"https://github.blog/2022-12-08-experiment-the-hidden-costs-of-waiting-on-slow-build-times/",children:"The hidden costs of waiting on slow build times (GitHub.com)"})]})]}),(0,i.jsx)("footer",{className:"mt-8",children:(0,i.jsxs)("div",{className:"md:flex md:items-center md:justify-center",children:[(0,i.jsx)("div",{className:"md:flex-shrink-0",children:(0,i.jsx)("img",{className:"mx-auto h-10 w-10 rounded-full",src:"https://avatars.githubusercontent.com/u/9995618?v=4&s=200",alt:""})}),(0,i.jsxs)("div",{className:"mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center",children:[(0,i.jsx)("div",{className:"text-base font-medium text-gray-900",children:"Natalie Somersall"}),(0,i.jsx)("svg",{className:"mx-1 hidden h-5 w-5 text-indigo-600 md:block",fill:"currentColor",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{d:"M11 0h3L9 20H6l5-20z"})}),(0,i.jsx)("div",{className:"text-base font-medium text-gray-500",children:"GitHub Staff"})]})]})})]})]})]})})}var _=[{title:"How to make GitHub Actions 22x faster with bare-metal Arm",href:"/blog/native-arm64-for-github-actions",description:"GitHub doesn't provide hosted Arm runners, so how can you use native Arm runners safely & securely?",date:"January 17, 2023"},{title:"How to add a Software Bill of Materials (SBOM) to your containers",href:"/blog/sbom-in-github-actions",description:"Learn how to add a Software Bill of Materials (SBOM) to your containers with GitHub Actions in a few easy steps.",date:"January 25, 2023"},{title:"Make your builds run faster with Caching for GitHub Actions.",href:"/blog/caching-in-github-actions",description:"Learn how we made a Golang project build 4x faster using GitHub's built-in caching mechanism.",date:"February 10, 2023"}];function K(){return(0,i.jsx)("div",{className:"bg-white px-6 lg:px-8 lg:pt-8 lg:pb-10",children:(0,i.jsxs)("div",{className:"mx-auto mt-2 max-w-xl px-4 lg:max-w-7xl lg:px-6",children:[(0,i.jsx)("p",{className:"mt-2 mx-10 text-2xl font-semibold leading-8 tracking-tight text-gray-900",children:"Improve your builds with our tips & tricks"}),(0,i.jsx)("p",{className:"mt-4 mx-10 text-base leading-7 text-gray-600 text-justify",children:"Learn how to improve the speed and efficiency your GitHub Actions with our examples and best practices."}),(0,i.jsx)("div",{className:"mx-10 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12",children:_.map(function(e){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("a",{href:e.href,className:"mt-4 block",children:[(0,i.jsx)("p",{className:"text-xl font-semibold text-gray-900",children:e.title}),(0,i.jsx)("p",{className:"mt-3 text-base text-gray-500",children:e.description})]}),(0,i.jsx)("div",{className:"mt-6 flex items-center",children:(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("div",{className:"flex space-x-1 text-sm text-gray-500",children:[(0,i.jsx)("span",{children:e.date}),(0,i.jsx)("span",{"aria-hidden":"true",children:"\xb7"})]})})})]},e.title)})})]})})}function Y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"}),(0,i.jsx)("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"relative shadow-xl sm:overflow-hidden sm:rounded-2xl",children:[(0,i.jsxs)("div",{className:"absolute inset-0",children:[(0,i.jsx)("img",{className:"h-full w-full object-cover",src:"https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",alt:"The team working collaborating on a project"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-indigo-700 mix-blend-multiply"})]}),(0,i.jsxs)("div",{className:"relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",children:[(0,i.jsxs)("h1",{className:"text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",children:[(0,i.jsx)("span",{className:"block text-white",children:"Fast and secure GitHub Actions"}),(0,i.jsx)("span",{className:"block text-indigo-200",children:"on your own infrastructure."})]}),(0,i.jsx)("p",{className:"mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl",children:"Standard hosted runners are slow and expensive, larger runners cost even more."}),(0,i.jsx)("p",{className:"mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl",children:"Actuated runs on your own infrastructure with a predictable cost, low management and secure isolation with Firecracker."}),(0,i.jsx)("div",{className:"mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center",children:(0,i.jsxs)("div",{className:"space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0",children:[(0,i.jsx)(r(),{href:"/pricing",className:"flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8",children:"Get started"}),(0,i.jsx)(r(),{href:"https://www.youtube.com/watch?v=2o28iUC-J1w",className:"flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8",children:"Live demo"})]})})]})]})})]}),(0,i.jsx)("div",{className:"bg-gray-100",children:(0,i.jsxs)("div",{className:"mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8",children:[(0,i.jsx)("p",{className:"text-center text-base font-semibold text-gray-500 ",children:"Trusted by a growing number of companies"}),(0,i.jsxs)("div",{className:"mt-6 justify-center grid grid-cols-12 gap-8 md:grid-cols-12 lg:grid-cols-12 content-evenly",children:[(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/balena-logo.png",alt:"Balena.io"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/calyptia.png",alt:"Calyptia - Observability, simplified"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/cncf.png",alt:"Cloud Native Computing Foundation (CNCF)"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/openfaas_light.png",alt:"OpenFaaS Ltd"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/kubiya-actuated.png",alt:"Kubiya.ai"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/thg-logo.png",alt:"The Hut Group"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/toolpath.png",alt:"Toolpath"})}),(0,i.jsx)("div",{className:"col-span-12 flex justify-center md:col-span-3 lg:col-span-3",children:(0,i.jsx)("img",{className:"h-12",src:"./images/waffle-labs.png",alt:"Waffle Labs"})})]})]})})]}),(0,i.jsx)(U,{}),(0,i.jsx)(B,{}),(0,i.jsx)(K,{}),(0,i.jsx)(z,{}),(0,i.jsx)(R,{}),(0,i.jsx)(V,{}),(0,i.jsx)(F,{})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);