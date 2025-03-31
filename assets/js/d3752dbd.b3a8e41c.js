"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7864],{2715:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/helm_install_operator-afd901fafc46cbcc9a043e3baf60a40c.png"},2723:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/operator_dashboard-cc184c6fbebb34889e5fa44b4acc9219.png"},4434:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var r=o(4848),a=o(8453);const l={},s="Deploying Kubernetes Operator",t={id:"deploy/quick_start_operator",title:"Deploying Kubernetes Operator",description:"Prepare",source:"@site/../docs-en/source/7.deploy/2.quick_start_operator.md",sourceDirName:"7.deploy",slug:"/deploy/quick_start_operator",permalink:"/tugraph-analytics/en/deploy/quick_start_operator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Cluster Deployment",permalink:"/tugraph-analytics/en/deploy/install_guide"},next:{title:"GeaFlow Dashboard",permalink:"/tugraph-analytics/en/deploy/dashboard"}},i={},d=[{value:"Prepare",id:"prepare",level:2},{value:"Install Geaflow Kubernetes Operator",id:"install-geaflow-kubernetes-operator",level:2},{value:"Submit Geaflow Job by Geaflow Kubernetes Operator",id:"submit-geaflow-job-by-geaflow-kubernetes-operator",level:2},{value:"Submit HLA Jobs",id:"submit-hla-jobs",level:3},{value:"Submit DSL Job",id:"submit-dsl-job",level:3},{value:"Query Job Status",id:"query-job-status",level:3},{value:"Query by dashboard page of geaflow-kubernetes-operator",id:"query-by-dashboard-page-of-geaflow-kubernetes-operator",level:4},{value:"Query by Command",id:"query-by-command",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deploying-kubernetes-operator",children:"Deploying Kubernetes Operator"})}),"\n",(0,r.jsx)(n.h2,{id:"prepare",children:"Prepare"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download and install Docker and Minikube. Refer to the documentation: ",(0,r.jsx)(n.a,{href:"/tugraph-analytics/en/deploy/install_minikube",children:"Installing Minikube"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pull GeaFlow Image"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to pull the remote geaflow image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker pull tugraph/geaflow:0.6\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the pull fails due to network problems, you can also run the following command to directly build the local image\n(before building the image, start the docker container):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/TuGraph-family/tugraph-analytics.git geaflow\ncd geaflow/\nbash ./build.sh --module=geaflow\n"})}),"\n",(0,r.jsx)(n.p,{children:"The entire compilation process may take some time, please be patient. After the image compilation is successful, use\nthe following command to view the image."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the remotely pulled image is: ",(0,r.jsx)(n.strong,{children:"tugraph/geaflow:0.6"}),"\n. The name of the local image is ",(0,r.jsx)(n.strong,{children:"geaflow:0.1"}),". You only need to select one method to build the image."]}),"\n",(0,r.jsx)(n.h2,{id:"install-geaflow-kubernetes-operator",children:"Install Geaflow Kubernetes Operator"}),"\n",(0,r.jsx)(n.p,{children:"Below is an introduction on installation of Geaflow Kubernetes Operator\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download the code of GeaFlow\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/TuGraph-family/tugraph-analytics.git geaflow\ncd geaflow/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Build the image of Geaflow Kubernetes Operator"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker pull tugraph/geaflow-kubernetes-operator:0.6\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the pull fails due to network problems, you can also run the following command to directly build the local image\n(before building the image, start the docker container):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd geaflow/geaflow-kubernetes-operator/\nbash ./build-operator.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Geaflow-kubernetes-operator need JDK11 or above version to\nbuild. The entire compilation process may take some time, please be patient. After the image compilation is successful, use\nthe following command to view the image."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the remotely pulled image is: ",(0,r.jsx)(n.strong,{children:"tugraph/geaflow-kubernetes-operator:0.6"}),"\n. The name of the local image is ",(0,r.jsx)(n.strong,{children:"geaflow-kubernetes-operator:0.1"}),". You only need to select one\nmethod to build the image."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Confirm and modify the image name in helm"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Open the file /helm/geaflow-kubernetes-operator/values.yaml.\nIf you need to modify the image name, you could change ",(0,r.jsx)(n.strong,{children:"image.repository"})," and ",(0,r.jsx)(n.strong,{children:"image.\ntag"})," to use the correct image."]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Install Geaflow Kubernetes Operator by Helm"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd geaflow/geaflow-kubernetes-operator/\nhelm install geaflow-kubernetes-operator helm/geaflow-kubernetes-operator\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:o(2715).A+"",width:"1500",height:"269"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Check whether the pod is running normally in the minikube dashboard\n",(0,r.jsx)(n.img,{alt:"img.png",src:o(4626).A+"",width:"1500",height:"758"})]}),"\n",(0,r.jsx)(n.li,{children:"Proxy GeaFlow-Operator-Dashboard to the local port through port-forward (default port is 8089)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Please replace ",(0,r.jsx)(n.strong,{children:"${operator-pod-name}"})," with the actual operator pod name."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl port-forward ${operator-pod-name} 8089:8089\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:o(7486).A+"",width:"1290",height:"358"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"Visit localhost:8089 with your browser to open the operator cluster page."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:o(2723).A+"",width:"1500",height:"818"})}),"\n",(0,r.jsx)(n.h2,{id:"submit-geaflow-job-by-geaflow-kubernetes-operator",children:"Submit Geaflow Job by Geaflow Kubernetes Operator"}),"\n",(0,r.jsx)(n.p,{children:"After geaflow-kubernetes-operator is successfully deployed and run, you can write the job's yaml file and submit the job.\nFirst, we write a yaml file of geaflow's built-in sample job."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: geaflow.antgroup.com/v1\nkind: GeaflowJob\nmetadata:\n  # Job name\n  name: geaflow-example\nspec:\n  # Job image name\n  image: geaflow:0.1\n  # Image pull policy of the job pods\n  imagePullPolicy: IfNotPresent\n  # Kubernetes service account of the job\n  serviceAccount: geaflow\n  # Java main class of the job\n  entryClass: com.antgroup.geaflow.example.graph.statical.compute.khop.KHop\n  clientSpec:\n    # Resource params of client pod\n    resource:\n      cpuCores: 1\n      memoryMb: 1000\n      jvmOptions: -Xmx800m,-Xms800m,-Xmn300m\n  masterSpec:\n    # Resource params of master pod\n    resource:\n      cpuCores: 1\n      memoryMb: 1000\n      jvmOptions: -Xmx800m,-Xms800m,-Xmn300m\n  driverSpec:\n    # Resource params of driver pod\n    resource:\n      cpuCores: 1\n      memoryMb: 1000\n      jvmOptions: -Xmx800m,-Xms800m,-Xmn300m\n    # Driver number\n    driverNum: 1\n  containerSpec:\n    # Resource params of container pod\n    resource:\n      cpuCores: 1\n      memoryMb: 1000\n      jvmOptions: -Xmx800m,-Xms800m,-Xmn300m\n    # Container number\n    containerNum: 1\n    # Worker number per container pod\n    workerNumPerContainer: 4\n  userSpec:\n    # Metric params of job\n    metricConfig:\n      geaflow.metric.reporters: slf4j\n      geaflow.metric.stats.type: memory\n    # State config of job\n    stateConfig:\n      geaflow.file.persistent.type: LOCAL\n      geaflow.store.redis.host: host.minikube.internal\n      geaflow.store.redis.port: "6379"\n    # Additional user defined params\n    additionalArgs:\n      geaflow.system.state.backend.type: MEMORY\n'})}),"\n",(0,r.jsx)(n.p,{children:"The Geaflow job relies on the redis component. You can quickly start a redis container through docker and map the port to localhost."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker pull redis:latest\ndocker run -p 6379:6379 --name geaflow_redis redis:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you have already deployed a redis component, you can replace the following parameters in example.yaml with the existing redis host and port number."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n   userSpec:\n     stateConfig:\n       geaflow.store.redis.host: ${your.redis.host}\n       geaflow.store.redis.port: ${your.redis.port}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then run the following command to submit the job:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd geaflow/geaflow-kubernetes-operator/example\nkubectl apply example_hla.yml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"submit-hla-jobs",children:"Submit HLA Jobs"}),"\n",(0,r.jsx)(n.p,{children:"When submitting HLA jobs, you need to pay extra attention to the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"entryClass is required."}),"\n",(0,r.jsx)(n.li,{children:"udfJars is optional. If you need, please fill in the url address of your own file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  # Required\n  entryClass: com.example.MyEntryClass\n  # Optional\n  udfJars:\n    - name: myUdf.jar\n      url: http://localhost:8888/download/myUdf.jar\n"})}),"\n",(0,r.jsx)(n.h3,{id:"submit-dsl-job",children:"Submit DSL Job"}),"\n",(0,r.jsx)(n.p,{children:"When submitting DSL jobs, you need to pay extra attention to the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do not fill in entryClass, leave it blank."}),"\n",(0,r.jsx)(n.li,{children:"gqlFile is required, please fill in the name and url address of your file."}),"\n",(0,r.jsx)(n.li,{children:"udfJars is optional. If available, please fill in the url address of your own file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  # Do not fill in entryClass\n  # entryClass: com.example.MyEntryClass\n  # Required\n  gqlFile:\n    # Name must be correct\n    name: myGql.gql\n    url: http://localhost:8888/download/myGql.gql\n  # Optional\n  udfJars:\n    - name: myUdf.jar\n      url: http://localhost:8888/download/myUdf.jar\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Regarding more parameters of DSL jobs and HLA jobs, we have prepared two demo jobs in the\nproject directory ",(0,r.jsx)(n.strong,{children:"geaflow-kubernetes-operator/example"})," directory for your reference. Please\nrefer to the sample files in the project respectively:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"example/example-dsl.yml"}),"\n",(0,r.jsx)(n.li,{children:"example/example-hla.yml"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"query-job-status",children:"Query Job Status"}),"\n",(0,r.jsx)(n.h4,{id:"query-by-dashboard-page-of-geaflow-kubernetes-operator",children:"Query by dashboard page of geaflow-kubernetes-operator"}),"\n",(0,r.jsxs)(n.p,{children:["Visit ",(0,r.jsx)(n.a,{href:"http://localhost:8089",children:"http://localhost:8089"}),", you can open the cluster overview page to view the list and details of\nall geaflow job CRs in the cluster.\n",(0,r.jsx)(n.img,{alt:"img.png",src:o(4957).A+"",width:"1500",height:"783"})]}),"\n",(0,r.jsx)(n.h4,{id:"query-by-command",children:"Query by Command"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to view the status of CR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get geaflowjob geaflow-example\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4626:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/view_operator_pod-3b486c663d770e0f12c491d7676164c7.png"},4957:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/operator_dashboard_jobs-8a9aa816066c3e5942f0619ff91876de.png"},7486:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/port_forward_operator-41593c5c5299bfda063818a90fbd75a2.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>t});var r=o(6540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);