"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42],{94936:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var t=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(44996),s=["components"],l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},d=void 0,m={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"This guide will walk you through setting up Mariana Trench on your machine and get you to find your first remote code execution vulnerability in a small sample app.",source:"@site/documentation/getting_started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Customize Sources and Sinks",permalink:"/docs/customize-sources-and-sinks"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installing Mariana Trench",id:"installing-mariana-trench",children:[],level:2},{value:"Running Mariana Trench",id:"running-mariana-trench",children:[],level:2},{value:"Post Processing",id:"post-processing",children:[],level:2},{value:"Exploring Results",id:"exploring-results",children:[],level:2},{value:"Configuring Mariana Trench",id:"configuring-mariana-trench",children:[],level:2}],c={toc:u};function p(e){var n=e.components,a=(0,i.Z)(e,s);return(0,r.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This guide will walk you through setting up Mariana Trench on your machine and get you to find your first remote code execution vulnerability in a small sample app."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"Mariana Trench requires a recent version of ",(0,r.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python"),". On MacOS you can get a current version through ",(0,r.mdx)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ brew install python3\n")),(0,r.mdx)("p",null,"On a Debian flavored Linux (Ubuntu, Mint, Debian), you can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"apt-get"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get install python3 python3-pip python3-venv\n")),(0,r.mdx)("p",null,"This guide also assumes you have the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android SDK")," installed and an environment variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"$ANDROID_SDK")," pointed to the location of the SDK."),(0,r.mdx)("p",null,"For the rest of this guide, we assume that you are working inside of a ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"virtual environment"),". You can set this up with"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python3 -m venv ~/.venvs/mariana-trench\n$ source ~/.venvs/mariana-trench/bin/activate\n(mariana-trench)$\n")),(0,r.mdx)("p",null,"The name of the virtual environment in front of your shell prompt indicates that the virtual environment is active."),(0,r.mdx)("h2",{id:"installing-mariana-trench"},"Installing Mariana Trench"),(0,r.mdx)("p",null,"Inside your virtual environment installing Mariana Trench is as easy as running"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"(mariana-trench)$ pip install mariana-trench\n")),(0,r.mdx)("h2",{id:"running-mariana-trench"},"Running Mariana Trench"),(0,r.mdx)("p",null,"We'll use a small app that is part of our documentation. You can get it by running"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"(mariana-trench)$ git clone https://github.com/facebook/mariana-trench\n(mariana-trench)$ cd mariana-trench/documentation/sample-app\n")),(0,r.mdx)("p",null,"We are now ready to run the analysis"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"(mariana-trench)$ mariana-trench \\\n  --system-jar-configuration-path=$ANDROID_SDK/platforms/android-30/android.jar\n  --apk-path=sample-app-debug.apk \\\n  --source-root-directory=app/src/main/java\n# ...\nINFO Analyzed 68886 models in 4.04s. Found 4 issues!\n# ...\n")),(0,r.mdx)("p",null,"The analysis has found 4 issues in our sample app. The output of the analyis is a set of specifications for each method of the application."),(0,r.mdx)("h2",{id:"post-processing"},"Post Processing"),(0,r.mdx)("p",null,"The specifications themselves are not meant to be read by humans. We need an additional processing step in order to make the results more presentable. We do this with ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/sapp"},"SAPP")," PyPi installed for us:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"(mariana-trench)$ sapp --tool=mariana-trench analyze .\n(mariana-trench)$ sapp --database-name=sapp.db server --source-directory=app/src/main/java\n# ...\n2021-05-12 12:27:22,867 [INFO]  * Running on http://localhost:5000/ (Press CTRL+C to quit)\n")),(0,r.mdx)("p",null,"The last line of the output tells us that SAPP started a local webserver that lets us look at the results. Open the link and you will see the 4 issues found by the analyis."),(0,r.mdx)("h2",{id:"exploring-results"},"Exploring Results"),(0,r.mdx)("p",null,"Let's focus on the remote code execution issue found in the sample app. You can identify it by its issue code ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," (for all remote code executions) and the callable ",(0,r.mdx)("inlineCode",{parentName:"p"},"void MainActivit.onCreate(Bundle)"),". With only 4 issues to see it's easy to identify the issue manually but once more rules run, the filter functionality at the top right of the page comes in handy."),(0,r.mdx)("img",{alt:"Single Issue Display",src:(0,o.default)("img/issue.png")}),(0,r.mdx)("p",null,"The issue tells you that Mariana Trench found a remote code execution in ",(0,r.mdx)("inlineCode",{parentName:"p"},"MainActivit.onCreate")," where the data is coming from ",(0,r.mdx)("inlineCode",{parentName:"p"},"Activity.getIntent")," one call away, and flows into the constructor of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ProcessBuilder"),' 3 calls away. Click on "Traces" in the top right corner of the issue to see an example trace.'),(0,r.mdx)("p",null,"The trace surfaced by Mariana Trench consists of three parts."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("em",{parentName:"p"},"source trace")," represents where the data is coming from. In our example, the trace is very short: ",(0,r.mdx)("inlineCode",{parentName:"p"},"Activity.getIntent")," is called in ",(0,r.mdx)("inlineCode",{parentName:"p"},"MainActivity.onCreate")," directly."),(0,r.mdx)("img",{alt:"Trace Source",src:(0,o.default)("img/trace_source.png")}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("em",{parentName:"p"},"trace root")," represents where the source trace meets the sink trace. In our example this is the activitie's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onCreate")," method."),(0,r.mdx)("img",{alt:"Trace Root",src:(0,o.default)("img/trace_root.png")}),(0,r.mdx)("p",null,"The final part of the trace is the ",(0,r.mdx)("em",{parentName:"p"},"sink trace"),": This is where the data from the source flows down into a sink. In our example from ",(0,r.mdx)("inlineCode",{parentName:"p"},"onCreate"),", to ",(0,r.mdx)("inlineCode",{parentName:"p"},"onClick"),", to ",(0,r.mdx)("inlineCode",{parentName:"p"},"execute"),", and finally into the constructor of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ProcessBuilder"),"."),(0,r.mdx)("img",{alt:"Trace Source",src:(0,o.default)("img/trace_sink.png")}),(0,r.mdx)("h2",{id:"configuring-mariana-trench"},"Configuring Mariana Trench"),(0,r.mdx)("p",null,'You might be asking yourself, "how does the tool know what is user controlled data, and what is a sink?". This guide is meant to quickly get you started on a small app. We did not cover how to configure Mariana Trench. You can read more about that in the ',(0,r.mdx)("a",{parentName:"p",href:"/docs/configuration"},"Configuration section"),"."))}p.isMDXComponent=!0}}]);