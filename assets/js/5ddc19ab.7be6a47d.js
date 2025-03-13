"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7116],{161:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/InferUDF-3352900112f57735d25911c3422b2723.zip"},868:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/publish_infer_job-670a6006675534117c1cedf09ca11590.png"},1715:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/submit_infer_job-e738160193fce775ed739365bbf711be.png"},2508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(4848),i=t(8453);const o={},a="\u8fd1\u7ebf\u63a8\u7406udf\u90e8\u7f72",c={id:"quick_start/quick_start_infer&UDF",title:"\u8fd1\u7ebf\u63a8\u7406udf\u90e8\u7f72",description:"GeaFlow\u63d0\u4f9b\u4e86\u8fd1\u7ebf\u6a21\u578b\u63a8\u7406\u80fd\u529b\uff0c\u53ea\u9700\u8981\u7528\u6237\u63d0\u4f9b\u6a21\u578b\u8c03\u7528\u7684python\u6587\u4ef6\uff0c\u4e0d\u9700\u8981\u5c06\u6a21\u578b\u8f6c\u6362\u6210onnx\u6a21\u578b\uff0c\u907f\u514d\u4e86\u6a21\u578b\u8f6c\u6362\u5e26\u6765\u7684\u6027\u80fd\u4e0b\u964d\uff0c",source:"@site/../docs-cn/source/3.quick_start/3.quick_start_infer&UDF.md",sourceDirName:"3.quick_start",slug:"/quick_start/quick_start_infer&UDF",permalink:"/tugraph-analytics/zh/quick_start/quick_start_infer&UDF",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{}},s={},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"1. \u7f16\u8bd1 GeaFlow \u6e90\u7801",id:"1-\u7f16\u8bd1-geaflow-\u6e90\u7801",level:3},{value:"2. \u542f\u52a8docker",id:"2-\u542f\u52a8docker",level:2},{value:"3. \u51c6\u5907udf",id:"3-\u51c6\u5907udf",level:2},{value:"3. \u5728console\u8fd0\u884cudf",id:"3-\u5728console\u8fd0\u884cudf",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u8fd1\u7ebf\u63a8\u7406udf\u90e8\u7f72",children:"\u8fd1\u7ebf\u63a8\u7406udf\u90e8\u7f72"})}),"\n",(0,r.jsx)(n.p,{children:"GeaFlow\u63d0\u4f9b\u4e86\u8fd1\u7ebf\u6a21\u578b\u63a8\u7406\u80fd\u529b\uff0c\u53ea\u9700\u8981\u7528\u6237\u63d0\u4f9b\u6a21\u578b\u8c03\u7528\u7684python\u6587\u4ef6\uff0c\u4e0d\u9700\u8981\u5c06\u6a21\u578b\u8f6c\u6362\u6210onnx\u6a21\u578b\uff0c\u907f\u514d\u4e86\u6a21\u578b\u8f6c\u6362\u5e26\u6765\u7684\u6027\u80fd\u4e0b\u964d\uff0c\n\u540c\u65f6\u964d\u4f4e\u4e86\u7b97\u6cd5\u5f00\u53d1\u4eba\u5458\u7684\u90e8\u7f72\u96be\u5ea6\u3002\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528GeaFlow\u5728\u8fd1\u7ebf\u8ba1\u7b97\u7684\u8fc7\u7a0b\u4e2d\u8c03\u7528AI\u6a21\u578b\u8fdb\u884c\u63a8\u7406\u5e76\u83b7\u53d6\u6a21\u578b\u63a8\u7406\u7ed3\u679c\u3002\n\u672c\u4f8b\u5b50\u4e2d\u7684AI\u6a21\u578b\u662f\u4e00\u4e2a\u5728GNN\u5e38\u7528\u7684\u6570\u636e\u96c6Cora\u4e0a\u8bad\u7ec3\u7684\u56fe\u8282\u70b9\u5206\u7c7b\u6a21\u578b\uff0cGeaFlow\u8bfb\u53d6\u8282\u70b9id\u6784\u5efavertex\uff0c\u7136\u540e\u5728\u8fd1\u7ebf\u8ba1\u7b97\u7684\u8fc7\u7a0b\u4e2d\uff0c\n\u5c06\u8282\u70b9id\u53d1\u9001\u7ed9python\u7684\u6a21\u578b\u63a8\u7406\u8fdb\u7a0b\uff0c\u8c03\u7528AI\u6a21\u578b\u63a8\u7406\u5f97\u5230\u8282\u70b9\u9884\u6d4b\u7684\u7c7b\u578b\u4ee5\u53ca\u76f8\u5e94\u7684\u6982\u7387\uff0c\u7136\u540e\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9GeaFlow\u7684java\u8fdb\u7a0b\u3002\n\u672c\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7GeaFlow\u8fdb\u884c\u6a21\u578b\u63a8\u7406\uff0c\u5728\u771f\u5b9e\u573a\u666f\u4e2d\u8fd1\u7ebf\u8ba1\u7b97\u7684\u903b\u8f91\u53ef\u80fd\u4f1a\u66f4\u52a0\u590d\u6742\uff0c\u6a21\u578b\u63a8\u7406\u53ea\u662f\u8fd1\u7ebf\u8ba1\u7b97\u7684\u4e00\u4e2a\u6b65\u9aa4\uff0c\n\u5728\u83b7\u53d6\u6a21\u578b\u7ed3\u679c\u4e4b\u540e\u53ef\u4ee5\u8fdb\u884c\u590d\u6742\u7684\u8fed\u4ee3\u8ba1\u7b97\uff0c\u751a\u81f3\u591a\u6b21\u8c03\u7528\u63a8\u7406\u6a21\u578b\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u6269\u5c55\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u7f16\u8bd1-geaflow-\u6e90\u7801",children:"1. \u7f16\u8bd1 GeaFlow \u6e90\u7801"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003",(0,r.jsx)(n.a,{href:"/tugraph-analytics/zh/quick_start/quick_start",children:"1.quick_start.md"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u542f\u52a8docker",children:"2. \u542f\u52a8docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003",(0,r.jsx)(n.a,{href:"/tugraph-analytics/zh/quick_start/quick_start_docker",children:"2.quick_start_docker.md"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u51c6\u5907udf",children:"3. \u51c6\u5907udf"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(161).A+"",children:"udf\u8d44\u6e90"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"udf\u7684\u9879\u76ee\u7ed3\u6784\u5982\u4e0b"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"udf_project_structure",src:t(6544).A+"",width:"680",height:"848"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IncrGraphInferCompute.java\u4e2d\u5b9e\u73b0\u4e86IncVertexCentricCompute\u63a5\u53e3\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package org.example;\n\nimport com.antgroup.geaflow.api.function.io.SinkFunction;\nimport com.antgroup.geaflow.api.graph.compute.IncVertexCentricCompute;\nimport com.antgroup.geaflow.api.graph.function.vc.IncVertexCentricComputeFunction;\nimport com.antgroup.geaflow.api.graph.function.vc.VertexCentricCombineFunction;\nimport com.antgroup.geaflow.api.graph.function.vc.base.IncGraphInferContext;\nimport com.antgroup.geaflow.api.pdata.stream.window.PWindowSource;\nimport com.antgroup.geaflow.api.window.impl.SizeTumblingWindow;\nimport com.antgroup.geaflow.common.config.Configuration;\nimport com.antgroup.geaflow.common.config.keys.ExecutionConfigKeys;\nimport com.antgroup.geaflow.common.config.keys.FrameworkConfigKeys;\nimport com.antgroup.geaflow.common.type.primitive.IntegerType;\nimport com.antgroup.geaflow.env.Environment;\nimport com.antgroup.geaflow.env.EnvironmentFactory;\nimport com.antgroup.geaflow.example.function.FileSink;\nimport com.antgroup.geaflow.example.function.FileSource;\nimport com.antgroup.geaflow.file.FileConfigKeys;\nimport com.antgroup.geaflow.model.graph.edge.IEdge;\nimport com.antgroup.geaflow.model.graph.edge.impl.ValueEdge;\nimport com.antgroup.geaflow.model.graph.meta.GraphMetaType;\nimport com.antgroup.geaflow.model.graph.vertex.IVertex;\nimport com.antgroup.geaflow.model.graph.vertex.impl.ValueVertex;\nimport com.antgroup.geaflow.pipeline.IPipelineResult;\nimport com.antgroup.geaflow.pipeline.Pipeline;\nimport com.antgroup.geaflow.pipeline.PipelineFactory;\nimport com.antgroup.geaflow.pipeline.task.IPipelineTaskContext;\nimport com.antgroup.geaflow.pipeline.task.PipelineTask;\nimport com.antgroup.geaflow.view.GraphViewBuilder;\nimport com.antgroup.geaflow.view.IViewDesc.BackendType;\nimport com.antgroup.geaflow.view.graph.GraphViewDesc;\nimport com.antgroup.geaflow.view.graph.PGraphView;\nimport com.antgroup.geaflow.view.graph.PIncGraphView;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.util.Arrays;\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Iterator;\nimport java.util.List;\nimport java.util.Map;\n\npublic class IncrGraphInferCompute {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(IncrGraphInferCompute.class);\n\n    // Set result dir.\n    public static final String RESULT_FILE_PATH = "/tmp/geaflow";\n    public static final String INFER_PYTHON_CLASS_NAME = "myTransFormFunction";\n\n    public static void main(String[] args) {\n        Map<String, String> config = new HashMap<>();\n        config.put(ExecutionConfigKeys.JOB_APP_NAME.getKey(), IncrGraphInferCompute.class.getSimpleName());\n        config.put(FileConfigKeys.ROOT.getKey(), "/tmp/");\n        Environment environment = EnvironmentFactory.onLocalEnvironment(args);\n        Configuration configuration = environment.getEnvironmentContext().getConfig();\n\n        configuration.putAll(config);\n        IPipelineResult result = submit(environment);\n        result.get();\n    }\n\n    public static IPipelineResult<?> submit(Environment environment) {\n        final Pipeline pipeline = PipelineFactory.buildPipeline(environment);\n        Configuration envConfig = environment.getEnvironmentContext().getConfig();\n\n        envConfig.put(FrameworkConfigKeys.INFER_ENV_ENABLE, "true");\n        envConfig.put(FrameworkConfigKeys.INFER_ENV_USER_TRANSFORM_CLASSNAME, INFER_PYTHON_CLASS_NAME);\n        envConfig.put(FrameworkConfigKeys.INFER_ENV_INIT_TIMEOUT_SEC, "1800");\n        envConfig.put(FrameworkConfigKeys.INFER_ENV_CONDA_URL, "https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh");\n        envConfig.put(FileSink.OUTPUT_DIR, RESULT_FILE_PATH);\n\n        //build graph view\n        final String graphName = "graph_view_name";\n        GraphViewDesc graphViewDesc = GraphViewBuilder.createGraphView(graphName)\n                .withShardNum(1)\n                .withBackend(BackendType.RocksDB)\n                .withSchema(new GraphMetaType(IntegerType.INSTANCE, ValueVertex.class, Integer.class,\n                        ValueEdge.class, IntegerType.class))\n                .build();\n        pipeline.withView(graphName, graphViewDesc);\n        pipeline.submit(new PipelineTask() {\n            @Override\n            public void execute(IPipelineTaskContext pipelineTaskCxt) {\n                Configuration conf = pipelineTaskCxt.getConfig();\n                PWindowSource<IVertex<Integer, List<Object>>> vertices =\n                        // extract vertex from edge file\n                        pipelineTaskCxt.buildSource(new FileSource<>("data/Cora/node_ids.txt",\n                                line -> {\n                                    String[] fields = line.split(",");\n                                    IVertex<Integer, List<Object>> vertex = new ValueVertex<>(\n                                            Integer.valueOf(fields[0]), null);\n                                    return Arrays.asList(vertex);\n                                }), SizeTumblingWindow.of(10000))\n                                .withParallelism(1);\n\n                PWindowSource<IEdge<Integer, Integer>> edges =\n                        pipelineTaskCxt.buildSource(new com.antgroup.geaflow.example.function.FileSource<>("data/Cora/node_ids.txt",\n                                line -> {\n                                    String[] fields = line.split(",");\n                                    IEdge<Integer, Integer> edge = new ValueEdge<>(Integer.valueOf(fields[0]),\n                                            Integer.valueOf(fields[0]), 1);\n                                    return Collections.singletonList(edge);\n                                }), SizeTumblingWindow.of(5000));\n\n\n                PGraphView<Integer, List<Object>, Integer> fundGraphView =\n                        pipelineTaskCxt.getGraphView(graphName);\n\n                PIncGraphView<Integer, List<Object>, Integer> incGraphView =\n                        fundGraphView.appendGraph(vertices, edges);\n                int mapParallelism = 1;\n                int sinkParallelism = 1;\n                SinkFunction<String> sink = new FileSink<>();\n                incGraphView.incrementalCompute(new IncGraphAlgorithms(1))\n                        .getVertices()\n                        .map(v -> String.format("%s,%s", v.getId(), v.getValue()))\n                        .withParallelism(mapParallelism)\n                        .sink(sink)\n                        .withParallelism(sinkParallelism);\n            }\n        });\n\n        return pipeline.execute();\n    }\n\n    public static class IncGraphAlgorithms extends IncVertexCentricCompute<Integer, List<Object>,\n            Integer, Integer> {\n\n        public IncGraphAlgorithms(long iterations) {\n            super(iterations);\n        }\n\n        @Override\n        public IncVertexCentricComputeFunction<Integer, List<Object>, Integer, Integer> getIncComputeFunction() {\n            return new InferVertexCentricComputeFunction();\n        }\n\n        @Override\n        public VertexCentricCombineFunction<Integer> getCombineFunction() {\n            return null;\n        }\n\n    }\n\n    public static class InferVertexCentricComputeFunction implements\n            IncVertexCentricComputeFunction<Integer, List<Object>, Integer, Integer> {\n\n        private IncGraphComputeContext<Integer, List<Object>, Integer, Integer> graphContext;\n        private IncGraphInferContext<List<Object>> graphInferContext;\n\n        @Override\n        public void init(IncGraphComputeContext<Integer, List<Object>, Integer, Integer> graphContext) {\n            this.graphContext = graphContext;\n            this.graphInferContext = (IncGraphInferContext<List<Object>>) graphContext;\n        }\n\n        @Override\n        public void evolve(Integer vertexId,\n                           TemporaryGraph<Integer, List<Object>, Integer> temporaryGraph) {\n            long lastVersionId = 0L;\n            IVertex<Integer, List<Object>> vertex = temporaryGraph.getVertex();\n            HistoricalGraph<Integer, List<Object>, Integer> historicalGraph = graphContext\n                    .getHistoricalGraph();\n            if (vertex == null) {\n                vertex = historicalGraph.getSnapShot(lastVersionId).vertex().get();\n            }\n\n            if (vertex != null) {\n                // Call the AI model to predict the class to which the node belongs and the corresponding probability.  \n                List<Object> result = this.graphInferContext.infer(vertexId);\n                // Sink result.\n                graphContext.collect(vertex.withValue(result));\n                LOGGER.info("node-{} max prob: {}, predict class: {}", vertexId, result.get(0), result.get(1));\n            }\n        }\n\n        @Override\n        public void compute(Integer vertexId, Iterator<Integer> messageIterator) {\n        }\n\n        @Override\n        public void finish(Integer vertexId, MutableGraph<Integer, List<Object>, Integer> mutableGraph) {\n        }\n    }\n\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["TransFormFunctionUDF.py\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86AI\u63a8\u7406\u903b\u8f91\uff08\u5bf9",(0,r.jsx)(n.a,{href:"https://linqs-data.soe.ucsc.edu/public/lbc/cora.tgz",children:"Cora\u6570\u636e\u96c6"}),"\u4e2d\u7684\u56fe\u8282\u70b9\u5206\u7c7b\uff09\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import abc\nfrom typing import Union, List\nimport torch\nimport ast\nfrom torch_geometric.datasets import Planetoid\nfrom gcn_model import GCN\n\ndef safe_int(number):\n    try:\n        return int(number)\n    except:\n        return 0\n\n\ndef safe_float(number):\n    try:\n        return float(number)\n    except:\n        return 0.0\n\n\nclass TransFormFunction(abc.ABC):\n    def __init__(self, input_size):\n        self.input_size = input_size\n\n    @abc.abstractmethod\n    def load_model(self, *args):\n        pass\n\n    @abc.abstractmethod\n    def transform_pre(self, *args) -> Union[torch.Tensor, List[torch.Tensor]]:\n        pass\n\n    @abc.abstractmethod\n    def transform_post(self, *args):\n        pass\n\n\n# User class need to inherit TransFormFunction.\nclass myTransFormFunction(TransFormFunction):\n    def __init__(self):\n        super().__init__(1)\n        print(\"init myTransFormFunction\")\n        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\n        self.dataset = Planetoid(root='./data', name='Cora')\n        self.data = self.dataset[0].to(self.device)\n        self.load_model('model.pt')\n\n    def load_model(self, model_path: str):\n        model = GCN(self.dataset.num_node_features, self.dataset.num_classes).to(self.device)\n        model.load_state_dict(torch.load(model_path))\n        model.eval()\n        out = model(self.data)\n        self.prob = torch.exp(out)\n\n    # Define model infer logic.\n    def transform_pre(self, *args):\n        node_prob = self.prob[args[0]]\n        max_prob, max_class = node_prob.max(dim=0)\n        return [max_prob.item(), max_class.item()], [max_prob.item(), max_class.item()]\n\n    def transform_post(self, res):\n        return res\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"requirements.txt\u4e2d\u8bbe\u7f6e\u6a21\u578b\u63a8\u7406\u6240\u9700\u8981\u7528\u5230\u7684python\u4f9d\u8d56\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"--index-url https://pypi.tuna.tsinghua.edu.cn/simple\ntorch\ntorchvision\ntorchaudio\ntorch-scatter\ntorch-sparse\ntorch-cluster\ntorch-spline-conv\ntorch-geometric\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"model.pt\u662f\u9700\u8981\u7528\u5230\u7684\u5df2\u7ecf\u8bad\u7ec3\u597d\u7684\u6a21\u578b\u6587\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"pom.xml\u4e2d\u9700\u8981\u5f15\u5165\u76f8\u5e94\u7684\u5f15\u64ce\u4f9d\u8d56\uff0cversion\u9700\u8981\u4fee\u6539\u4e3a\u4f60\u4f7f\u7528\u7684\u5f15\u64ce\u7684\u7248\u672c"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.example</groupId>\n    <artifactId>InferUDF</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <properties>\n        <maven.compiler.source>8</maven.compiler.source>\n        <maven.compiler.target>8</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-api</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-pdata</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-cluster</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-on-local</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-pipeline</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-infer</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-operator</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-api</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-common</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.antgroup.tugraph</groupId>\n            <artifactId>geaflow-examples</artifactId>\n            <version>0.5.0-SNAPSHOT</version>\n        </dependency>\n    </dependencies>\n</project>\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u547d\u4ee4mvn clean install\uff0c\u5728target\u76ee\u5f55\u4e0b\u53ef\u4ee5\u770b\u5230\u7f16\u8bd1\u597d\u7684udf\u5305"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u5728console\u8fd0\u884cudf",children:"3. \u5728console\u8fd0\u884cudf"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u521b\u5efa\u4f5c\u4e1a\n",(0,r.jsx)(n.img,{alt:"create_job",src:t(3571).A+"",width:"3378",height:"1702"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u53d1\u5e03\u4f5c\u4e1a\n",(0,r.jsx)(n.img,{alt:"publish_job",src:t(868).A+"",width:"3066",height:"744"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u63d0\u4ea4\u4f5c\u4e1a\n",(0,r.jsx)(n.img,{alt:"submit_job",src:t(1715).A+"",width:"3052",height:"1138"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b\u7ed3\u679c\uff0c\u7ed3\u679c\u4fdd\u5b58\u5728\u8def\u5f84/tmp/geaflow/result_0\n",(0,r.jsx)(n.img,{alt:"view_result",src:t(9142).A+"",width:"590",height:"960"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3571:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create_infer_job-a0f512aa15eba0fa62900b87dae934d0.png"},6544:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/udf_infer_project-3c93cfc55e03d73b1297ff68ae0071ce.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}},9142:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/infer_result-4b631065dce3e13f2df92cebc76fb376.png"}}]);