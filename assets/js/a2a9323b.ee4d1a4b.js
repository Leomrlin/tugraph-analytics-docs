"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8476],{246:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_metrics-b75b3bf8e27735c2720a943bd069ab44.png"},357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(4848),a=t(8453);const i={},r="GeaFlow Dashboard",o={id:"deploy/dashboard",title:"GeaFlow Dashboard",description:"Introduction",source:"@site/../docs-en/source/7.deploy/3.dashboard.md",sourceDirName:"7.deploy",slug:"/deploy/dashboard",permalink:"/tugraph-analytics/en/deploy/dashboard",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying Kubernetes Operator",permalink:"/tugraph-analytics/en/deploy/quick_start_operator"},next:{title:"\ud83c\udf08 G6VP Graph Visualization",permalink:"/tugraph-analytics/en/deploy/collaborate_with_g6vp"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Access The Page",id:"access-the-page",level:2},{value:"Take Minikube as An Example",id:"take-minikube-as-an-example",level:3},{value:"Features",id:"features",level:2},{value:"Overview",id:"overview",level:3},{value:"Pipeline List",id:"pipeline-list",level:3},{value:"Cycle List",id:"cycle-list",level:3},{value:"Job Component Details",id:"job-component-details",level:3},{value:"Component Runtime Details",id:"component-runtime-details",level:3},{value:"Other Functions",id:"other-functions",level:2},{value:"List Sorting and Search",id:"list-sorting-and-search",level:3},{value:"Localization",id:"localization",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"geaflow-dashboard",children:"GeaFlow Dashboard"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Geaflow-dashboard provides a job-level monitoring page for Geaflow. You can easily view the following information of the job through the dashboard:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Job health (Container and Worker activity)"}),"\n",(0,s.jsx)(n.li,{children:"Job progress (Pipeline and Cycle information)"}),"\n",(0,s.jsx)(n.li,{children:"Runtime logs of each component of the job"}),"\n",(0,s.jsx)(n.li,{children:"Process metrics for each component of the job"}),"\n",(0,s.jsx)(n.li,{children:"Flame graph of each component of the job"}),"\n",(0,s.jsx)(n.li,{children:"Thread Dump of each component of the job"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access-the-page",children:"Access The Page"}),"\n",(0,s.jsx)(n.p,{children:"When the job is running in a k8s cluster, the HTTP service can be exposed externally through the master's service and can be accessed directly through the service.\nIn the local or development environment, you can also directly map to the master pod port through the kubectl port-forward command."}),"\n",(0,s.jsx)(n.h3,{id:"take-minikube-as-an-example",children:"Take Minikube as An Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy the job to minikube. For how to deploy the job, please refer to ",(0,s.jsx)(n.a,{href:"/tugraph-analytics/en/quick_start/quick_start",children:"Quick Start"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Open minikube-dashboard and find the pod name of the master (or enter the following command in the terminal to obtain it)."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get pods\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"kubectl_get_pods.png",src:t(6396).A+"",width:"1392",height:"330"}),"\n3. Open the terminal and enter the following command to map the 8090 port in the pod container to the localhost's local port 8090.\nPlease replace ",(0,s.jsx)(n.strong,{children:"${your-master-pod-name}"})," with your own pod name."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl port-forward ${your-master-pod-name} 8090:8090\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Open the browser and visit ",(0,s.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})," to open the page."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The Overview page displays the health status of the entire job. You can check here whether the container and driver are running normally."}),"\n",(0,s.jsxs)(n.p,{children:["In addition, the Overview page will also display the Pipeline list of the job.\n",(0,s.jsx)(n.img,{alt:"dashboard_overview.png",src:t(6083).A+"",width:"1500",height:"757"})]}),"\n",(0,s.jsx)(n.h3,{id:"pipeline-list",children:"Pipeline List"}),"\n",(0,s.jsx)(n.p,{children:"You can also enter the page through the Pipeline menu in the sidebar. The page includes the name,\nstart time, and cost time of each Pipeline of the job.\nIf the cost is 0, means that the Pipeline has started execution but has not yet completed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dashboard_pipelines.png",src:t(6761).A+"",width:"1500",height:"759"})}),"\n",(0,s.jsx)(n.h3,{id:"cycle-list",children:"Cycle List"}),"\n",(0,s.jsx)(n.p,{children:"Click on the Pipeline name to enter the secondary menu and view information on all Cycle lists under the current Pipeline."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dashboard_cycles.png",src:t(6415).A+"",width:"1500",height:"758"})}),"\n",(0,s.jsx)(n.h3,{id:"job-component-details",children:"Job Component Details"}),"\n",(0,s.jsx)(n.p,{children:"You can view various information about each component of the job (including master, driver, and container).\nIt can be accessed via the menu in the sidebar."}),"\n",(0,s.jsx)(n.p,{children:"The Driver details display the basic information of all drivers. Container details display the basic information of all Containers."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"dashboard_containers.png",src:t(2514).A+"",width:"1500",height:"760"}),"\n",(0,s.jsx)(n.img,{alt:"dashboard_drivers.png",src:t(6645).A+"",width:"1500",height:"761"})]}),"\n",(0,s.jsx)(n.h3,{id:"component-runtime-details",children:"Component Runtime Details"}),"\n",(0,s.jsx)(n.p,{children:"By clicking the Master details in the left column, or by clicking the component name in the Driver/Container details, you can jump to the component's runtime page.\nIn the runtime page, you can view the following contents."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"View the process metrics of the component"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dashboard_runtime_metrics.png",src:t(246).A+"",width:"1500",height:"759"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["View real-time logs of the component. Here we take the master as an example to introduce the log files.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"master.log: Java main process log of master."}),"\n",(0,s.jsx)(n.li,{children:"master.log.1/master.log.2: Java main process log backup of master."}),"\n",(0,s.jsx)(n.li,{children:"agent.log: Agent service log of master."}),"\n",(0,s.jsx)(n.li,{children:"geaflow.log: shell startup script log after entering the container."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"dashboard_runtime_logs.png",src:t(4712).A+"",width:"1500",height:"758"}),"\n",(0,s.jsx)(n.img,{alt:"dashboard_runtime_log_content.png",src:t(2293).A+"",width:"1500",height:"759"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Perform CPU/ALLOC analysis on the process and generate flame graph."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The flame graph analysis type can be selected as CPU or ALLOC. A single analysis can last up to 60 seconds, and a maximum of 10 historical records can be retained."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"dashboard_runtime_profiler_execute.png",src:t(7838).A+"",width:"1500",height:"758"}),"\n",(0,s.jsx)(n.img,{alt:"dashboard_runtime_profiler_history.png",src:t(1563).A+"",width:"1500",height:"761"}),"\n",(0,s.jsx)(n.img,{alt:"dashboard_runtime_profiler_content.png",src:t(2932).A+"",width:"1500",height:"757"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Perform Thread Dump on the process. Keep the results of the latest dump."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"dashboard_runtime_thread_dump.png",src:t(4876).A+"",width:"1500",height:"758"}),"\n",(0,s.jsx)(n.img,{alt:"dashboard_runtime_thread_dump_execute.png",src:t(8516).A+"",width:"1500",height:"754"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"View all configurations of the process (only master owns this page)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dashboard_runtime_master_configuration.png",src:t(5104).A+"",width:"1500",height:"756"})}),"\n",(0,s.jsx)(n.h2,{id:"other-functions",children:"Other Functions"}),"\n",(0,s.jsx)(n.h3,{id:"list-sorting-and-search",children:"List Sorting and Search"}),"\n",(0,s.jsx)(n.p,{children:"Partial list columns can be sorted and searched."}),"\n",(0,s.jsx)(n.p,{children:'When searching, click the "Search" icon, enter keywords, and click the "Search" button.'}),"\n",(0,s.jsx)(n.p,{children:'When resetting, click the "Reset" button and the list will be refreshed.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dashboard_table_search.png",src:t(2957).A+"",width:"1500",height:"757"})}),"\n",(0,s.jsx)(n.h3,{id:"localization",children:"Localization"}),"\n",(0,s.jsxs)(n.p,{children:['The page supports switching between Chinese and English. Click the "Text A" icon in the upper right corner to select the language.',(0,s.jsx)(n.img,{alt:"dashboard_locale.png",src:t(6728).A+"",width:"1500",height:"758"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1563:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_profiler_history-ee197fde428da5068bf21c00958e69a1.png"},2293:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_log_content-4bb026416dc8e1d1b64d1e62caaa57f6.png"},2514:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_containers-2386be9a53c3ac096d92c783eddfaef6.png"},2932:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_profiler_content-a7f654c66d84782aa31786de4c67ed54.png"},2957:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_table_search-00f4c2661c297d5d60c3e5580ab8fc5a.png"},4712:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_logs-007b755841c597709ce7d4ac16216dec.png"},4876:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_thread_dump-161c7b3b24d49d4da01d93430bb3f1e6.png"},5104:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_master_configuration-9483a6725dbdd783a97233645db0cdba.png"},6083:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_overview-b233698d6ed8bb4bfd2ff1653541f559.png"},6396:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kubectl_get_pods-826dae084d7843b00beb77f1257f7f91.png"},6415:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_cycles-29c8f3b518c706b7f6be6edcc910238b.png"},6645:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_drivers-db954f43c9b1f2349bddac77c48a34e0.png"},6728:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_locale-79dc09f0feb1065ea7378a644a5665b6.png"},6761:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_pipelines-ff8558ada0a63c6eb91688335b83f18f.png"},7838:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_profiler_execute-492cb70f85a9faaad625274cf1635c9c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},8516:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard_runtime_thread_dump_execute-ca18aad2bcdfede784fd5eaa812923e8.png"}}]);