(function(){"use strict";var e={43:function(e,t,n){var i,a,o=n(6971),r=n.n(o),l=n(2804),c=n.n(l),u=n(4514),d=n.n(u),m=n(82),p=n.n(m),h=n(2329),g=n.n(h),v=n(6369),f=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Nav",{staticClass:"limit-width"}),t("router-view",{staticClass:"limit-width"}),"Blog"!==e.$router.currentRoute.name?t("Footer",{staticClass:"limit-width"}):e._e()],1)},S=[],_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hi",class:e.navStyle,attrs:{id:"nav"}},[t("div",{staticClass:"nav-container"},[t("img",{staticClass:"logo",attrs:{src:n(2759)}}),t("transition",{attrs:{tag:"div",name:"pages-menu"}},[t("PagesMenu",{directives:[{name:"show",rawName:"v-show",value:e.isMenu("pages"),expression:"isMenu('pages')"}],staticClass:"menu"})],1),t("transition",{attrs:{tag:"div",name:"sections-menu"}},[t("SectionsMenu",{directives:[{name:"show",rawName:"v-show",value:e.isMenu("sections"),expression:"isMenu('sections')"}],staticClass:"menu"})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isHomeTopNav(),expression:"!isHomeTopNav()"}],staticClass:"menu-btn",on:{click:function(t){return e.setCurrMenu("switch")}}},[t("transition-group",{attrs:{tag:"div",name:"menu-btn"}},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.isMenu("pages"),expression:"isMenu('pages')"}],key:"down",staticClass:"fas",class:"fa-angle-down"}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.isMenu("sections"),expression:"isMenu('sections')"}],key:"left",staticClass:"fas",class:"fa-angle-left"})])],1)],1)])},b=[],y=function(){var e=this,t=e._self._c;return t("ul",{attrs:{id:"pages-menu"}},e._l(e.pages,(function(n,s){return t("li",{key:s,staticClass:"pages-list"},[t("router-link",{staticClass:"page-link",attrs:{"active-class":"active",to:{name:n.name}}},[e._v(" "+e._s(n.name)+" "),t("div",{staticClass:"page-bar"})])],1)})),0)},C=[],w={name:"PagesMenu",data(){return{pages:this.$router.options.routes}}},T=w,k=n(1001),P=(0,k.Z)(T,y,C,!1,null,"dc7d755a",null),A=P.exports,x=function(){var e=this,t=e._self._c;return t("ul",{attrs:{id:"sections-menu"}},e._l(e.sections,(function(n,s){return t("li",{key:s,staticClass:"sections-list"},[t("div",{staticClass:"section-link",class:e.activeIndex===s?"active":"",on:{click:function(t){return e.jump(n)}}},[e._v(" "+e._s(n.name)+" ")])])})),0)},E=[],I={name:"SectionsMenu",data(){return{activeIndex:0,sections:[]}},methods:{setSections(){this.sections=this.$router.currentRoute.meta.sections},jump(){let{id:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=document.getElementById(e);window.scrollTo({top:t.offsetTop-50,behavior:"smooth"})},onScroll(){this.sections.forEach(((e,t)=>{let n=document.getElementById(e.id);window.scrollY>=n.offsetTop-50&&(this.activeIndex=t)}))}},watch:{$route(){this.setSections()}},mounted(){this.$nextTick(this.setSections),addEventListener("scroll",this.onScroll)}},L=I,M=(0,k.Z)(L,x,E,!1,null,"26bbba56",null),G=M.exports,D={name:"Nav",components:{PagesMenu:A,SectionsMenu:G},data(){return{navStyle:"",currMenu:"pages"}},methods:{setNavStyle(){"Home"===this.$router.currentRoute.name&&window.top.scrollY<100?this.navStyle="home-top-nav":this.navStyle="regular-nav"},isHomeTopNav(){return"home-top-nav"===this.navStyle},setCurrMenu(e){this.currMenu="switch"===e?"pages"===this.currMenu?"sections":"pages":e},isMenu(e){return this.currMenu===e},onScroll(){window.top.scrollY<100?this.setCurrMenu("pages"):this.setCurrMenu("sections"),this.setNavStyle()}},watch:{$route(){this.setNavStyle(),this.setCurrMenu("pages")}},mounted(){this.$nextTick((()=>{this.setNavStyle()})),window.addEventListener("scroll",this.onScroll)}},B=D,O=(0,k.Z)(B,_,b,!1,null,"74b26bf6",null),j=O.exports,F=function(){var e=this;e._self._c;return e._m(0)},N=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"clearfix",attrs:{id:"footer"}},[t("div",{staticClass:"footer-wrapper"},[t("h1",[e._v("@2022 by Donald Lam")]),t("h1",[e._v("Supported by Vue.js")])])])}],H={name:""},R=H,U=(0,k.Z)(R,F,N,!1,null,"5935ae63",null),Z=U.exports,J={name:"App",components:{Nav:j,Footer:Z}},$=J,W=(0,k.Z)($,f,S,!1,null,null,null),K=W.exports,V=n(2562),z=n(9372),q=n(3017),X=n.n(q),Y=n(2631),Q=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("Introduction"),t("About"),t("Education"),t("Skills"),t("Timetable")],1)},ee=[],te=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"introduction"}},[t("HomeImages"),t("ShortIntro")],1)},ne=[],se=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home-images"}},[t("transition-group",{attrs:{tag:"ul",name:"images"}},e._l(e.images,(function(n,s){return t("li",{directives:[{name:"show",rawName:"v-show",value:s===e.imgIndex,expression:"index === imgIndex"}],key:s,staticClass:"image-container"},[t("div",{staticClass:"image",style:{"background-image":"url("+n+")"}})])})),0)],1)},ie=[],ae={name:"HomeImages",data(){return{imgIndex:0,images:[n(103),n(4763),n(3814),n(6452)]}},methods:{play(){setInterval((()=>{this.imgIndex=this.imgIndex<this.images.length-1?this.imgIndex+1:0}),4e3)}},mounted(){this.play()}},oe=ae,re=(0,k.Z)(oe,se,ie,!1,null,"072a938c",null),le=re.exports,ce=function(){var e=this,t=e._self._c;return t("div",{ref:"hello",attrs:{id:"short-intro"}},[t("img",{staticClass:"logo",attrs:{src:n(2759)}}),t("div",{staticClass:"container"},[t("div",{staticClass:"avatar"}),t("div",{staticClass:"content"},[t("h1",[e._v("Hello! I'm Donald.")]),t("ul",e._l(e.info,(function(n,s){return t("div",{key:s},[t("li",[e._v(e._s(n.title)+":")]),t("li",[e._v(e._s(n.content))])])})),0),t("div",{staticClass:"account"},e._l(e.account,(function(n,s){return t("a",{key:s,staticClass:"account-item",attrs:{href:n.link}},[t("i",{class:n.icon}),e._v(e._s(n.title)+" ")])})),0),t("div",{staticClass:"social-media"},e._l(e.media,(function(e,n){return t("a",{key:n,attrs:{href:e.link}},[t("i",{class:e.icon})])})),0)])])])},ue=[],de={name:"ShortIntro",data(){return{info:[{title:"Phone",content:"(+852) 9638 0916"},{title:"Date of Birth",content:"06/08/2002"},{title:"Address",content:"Lam Tin, Kowloon"}],account:[{title:"E-Mail",icon:"fas fa-envelope",link:"mailto: manholam8@gmail.com"},{title:"GitHub",icon:"fab fa-github",link:"https://github.com/DonaldLam-WN"},{title:"Music",icon:"fas fa-music",link:"https://www.youtube.com/channel/UCSOkJ-npj4-rdeP0B-hBNTQ/playlists"},{title:"Steam",icon:"fab fa-steam",link:"https://steamcommunity.com/profiles/76561198892583119"}],media:[{title:"Facebook",icon:"fab fa-instagram",link:"https://www.instagram.com/lmh_donald/"},{title:"Instagram",icon:"fab fa-facebook-square",link:"https://www.facebook.com/profile.php?id=100007801004157"},{title:"WhatSapp",icon:"fab fa-whatsapp",link:"https://wa.me/96380916"},{title:"Discord",icon:"fab fa-discord",link:"https://discordapp.com/users/775959529863118888"},{title:"Line",icon:"fab fa-line",link:"https://line.me/ti/p/OXtDRbxcBi"}]}},methods:{test(){let e="/academic",t="dse";this.$store.commit("GO_POSITION",{path:e,location:t})}}},me=de,pe=(0,k.Z)(me,ce,ue,!1,null,"73b6efe4",null),he=pe.exports,ge={name:"Introduction",components:{HomeImages:le,ShortIntro:he}},ve=ge,fe=(0,k.Z)(ve,te,ne,!1,null,"6d72a527",null),Se=fe.exports,_e=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"about"}},[t("h1",[e._v("About Me")]),e._m(0),e._m(1),t("div",{staticClass:"resume",on:{click:function(t){return e.$store.commit("GO_STATIC","cv.pdf")}}},[e._v("Resume")])])},be=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"avatar"},[t("img",{staticClass:"signature",attrs:{src:n(6388)}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-container"},[t("h3",[e._v("Keep on going never give up.")]),t("p",[e._v("I'm an undergraduate, studying computer science at the Chinese University of Hong Kong. I self-learned front-end in the last two summer semesters, and this webpage is a conclusion and exhibition of my learning result, hope you enjoy my design. I am going to learn Python and TensorFlow in the following semester, and I also want to learn Django for developing websites; I hope I have enough time, lol. I still haven't planned my development direction; I am interested in both AI and back-end, but as a priority, I hope to find an internship in front-end development in the coming year to enrich my working experience.")])])}],ye={name:"About"},Ce=ye,we=(0,k.Z)(Ce,_e,be,!1,null,"5e652096",null),Te=we.exports,ke=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"education"}},[t("h1",[e._v("Education")]),t("h2",[e._v("Knowledge, like a sea, is boundless; only through hard study can one reach the destination.")]),t("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animated fadeIn",expression:"'animated fadeIn'"}],staticClass:"timeline"},e._l(e.eduHis,(function(n,s){return t("div",{key:s,staticClass:"container"},[t("h6",[e._v(e._s(n.start))]),t("div",{staticClass:"content"},[t("h5",[e._v(e._s(n.title))]),t("table",e._l(n.msg,(function(n,s){return t("tbody",{key:s},[t("td",[e._v(e._s(n.title)+" :")]),t("td",[e._v(e._s(n.content))])])})),0),t("div",{staticClass:"read-more-btn",on:{click:function(t){return e.$store.commit("GO_POSITION",{path:"/academic",location:n.location})}}},[e._v(" Read More ")])])])})),0)])},Pe=[],Ae={name:"Education",data(){return{eduHis:[{title:"Secondary Education",start:"2014",msg:[{title:"School",content:"Kwun Tong Government Secondary School"},{title:"Electives",content:"Physic, M2"},{title:"DSE Result",content:"23 (Best 5)"}],location:"dse"},{title:"BSc. Computer Science",start:"2020",msg:[{title:"University",content:"The Chinese University of Hong Kong"},{title:"Collage",content:"Lee Woo Sing Collage"},{title:"Exp Grad.",content:"2024"},{title:"Stream",content:"ELITE Stream"},{title:"GPA",content:"3.613/4.000"}],location:"cuhk"}]}}},xe=Ae,Ee=(0,k.Z)(xe,ke,Pe,!1,null,"c73b9256",null),Ie=Ee.exports,Le=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"skills"}},[t("h1",[e._v("Technical Skills")]),t("h2",[e._v("I am good at the following technical ~")]),t("div",{staticClass:"wrapper",style:"width:"+e.wrapperWidth+"px"},e._l(e.technical,(function(n,s){return t("div",{key:s,staticClass:"container",style:"color:"+n.color},[t("h3",[e._v(e._s(n.name))]),t("Progress",{staticClass:"progress-bar",attrs:{value:e.progress[s],strokeColor:n.color,strokeWidth:10,radius:50,transitionDuration:2e3}}),t("div",{staticClass:"content"},[t("ul",{style:"top:"+(220-30*n.content.length)/2+"px"},e._l(n.content,(function(n,s){return t("li",{key:s},[e._v(e._s(n))])})),0)])],1)})),0)])},Me=[],Ge=n(3619),De={name:"Skills",components:{Progress:Ge.Z},data(){return{wrapperWidth:0,progress:[],technical:[{name:"HTML",progress:90,color:"#D66839",content:["Tags","List","Table","Form"]},{name:"CSS",progress:50,color:"#519FCC",content:["Basic","Background & Font","Layout","Float","Position"]},{name:"JavaScript",progress:70,color:"#F5BD4F",content:["Data Types","Function & Object","DOM & BOM","Regular Expression","ES5 Methods","Class & Prototype"]},{name:"ES6-11",progress:80,color:"#F5BD4F",content:["Template Literals","Destructuring Assignment","Arrow Function","Iterators & Generators","Promise","Set & Map"]},{name:"Ajax",progress:60,color:"#EE695E",content:["XML","JQuery","JSONP","CORS","Fetch"]},{name:"NodeJS",progress:80,color:"#7BA368",content:["CommonJS","npm & yarn","Node Modules","express","Interact with MongoDB"]},{name:"VueJS",progress:70,color:"#63B486",content:["Vue2","Vue-cli","Vuex","Vue Router"]},{name:"MongoDB",progress:20,color:"#5F9F56",content:["Create","Read","Update","Delete"]},{name:"C Lang.",progress:70,color:"#6A92C2",content:["File","Pointer","String","Data Structure"]},{name:"Java",progress:40,color:"#CE8440",content:["Basic","OOP"]}]}},methods:{onScoll(){let e=document.getElementById("skills");e&&window.scrollY>=e.offsetTop-100&&this.technical.forEach((e=>{this.progress.push(e.progress)}))}},mounted(){this.$nextTick((()=>{this.wrapperWidth=220*Math.ceil(this.technical.length/2)})),window.addEventListener("scroll",this.onScoll)}},Be=De,Oe=(0,k.Z)(Be,Le,Me,!1,null,"3572f1cc",null),je=Oe.exports,Fe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"timetable"}},[t("h1",[e._v("Working Timetable (2022 Autumn Semester)")]),t("table",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:"animated fadeIn",expression:"'animated fadeIn'"}]},[t("thead",[t("tr",[t("th"),e._l(e.days,(function(n,s){return t("th",{key:s},[e._v(e._s(n))])}))],2)]),t("tbody",e._l(e.period,(function(n,s){return t("tr",{key:s},[t("td",[e._v(e._s(n))]),e._l(e.days,(function(n,i){return[e.getElement("repeat",s,i)?t("td",{key:i,style:{backgroundColor:e.getElement("color",s,i)},attrs:{rowspan:e.getElement("span",s,i)}},[e._v(" "+e._s(e.getElement("courseCode",s,i))+" ")]):e._e()]}))],2)})),0)])])},Ne=[],He={name:"Timetable",data(){return{parsed:!1,timetable:[[]],courses:[{courseCode:"CSCI3130",times:[{day:"Mo",start:"1630",end:"1815",venue:"Science Centre L1"},{day:"Tu",start:"1630",end:"1715",venue:"Basic Med Sci Bldg LT"},{day:"Th",start:"1730",end:"1815",venue:"Science Centre L1"}],color:"#71C0F9"},{courseCode:"CSCI3150",times:[{day:"Tu",start:"1230",end:"1415"},{day:"We",start:"1030",end:"1115"},{day:"Th",start:"1630",end:"1715"}],color:"#D5D5D5"},{courseCode:"CSCI3160",times:[{day:"We",start:"1130",end:"1315"},{day:"Th",start:"1330",end:"1415"},{day:"Th",start:"1130",end:"1215"}],color:"#F3B03D"},{courseCode:"ESTR3108",times:[{day:"Tu",start:"1430",end:"1615"},{day:"Th",start:"0930",end:"1115"},{day:"Th",start:"1430",end:"1515"}],color:"#F19BC8"},{courseCode:"UGEB2530",times:[{day:"We",start:"1430",end:"1715"}],color:"#97F9EA"},{courseCode:"UGEC2945",times:[{day:"Mo",start:"1430",end:"1615"}],color:"#A5F66A"},{courseCode:"GEWS1000",times:[{day:"Fr",start:"1130",end:"1315"}],color:"#FDEF71"}],days:["Monday","Tuesday","Wednesday","Thursday","Friday"],period:["0830-0930","0930-1030","1030-1130","1130-1230","1230-1330","1330-1430","1430-1530","1530-1630","1630-1730","1730-1830"]}},methods:{dayToNumber(e){switch(e){case"Mo":return 1;case"Tu":return 2;case"We":return 3;case"Th":return 4;case"Fr":return 5;case"Sa":return 6;case"Su":return 7;default:return-1}},initTimetable(){let e={courseCode:"",color:"transparent",span:1};for(let t=0;t<10;t++){this.timetable[t]=[];for(let n=0;n<5;n++)this.timetable[t][n]=e}this.updateTimetable()},updateTimetable(){this.courses.forEach((e=>{let{courseCode:t,times:n,color:s}=e;n.forEach((e=>{let{day:n,start:i,end:a}=e;i=Math.floor(parseInt(i)/100),a=Math.floor(parseInt(a)/100),n=this.dayToNumber(n);let o=a-i,r={courseCode:t,color:s,span:o};this.timetable[i-8].splice(n-1,1,r);for(let t=1;t<=o-1;t++)r={courseCode:"",color:"",span:0},this.timetable[i-8+t].splice(n-1,1,r)}))})),this.parsed=!0},getElement(e,t,n){if(!this.parsed)return"";switch(e){case"courseCode":return this.timetable[t][n].courseCode;case"color":return this.timetable[t][n].color;case"span":return this.timetable[t][n].span;case"repeat":return 0!==this.timetable[t][n].span;default:return null}},getCourses(){this.initTimetable()}},mounted(){this.$nextTick(this.getCourses)}},Re=He,Ue=(0,k.Z)(Re,Fe,Ne,!1,null,"2c60a78d",null),Ze=Ue.exports,Je={name:"Home",components:{Introduction:Se,About:Te,Education:Ie,Skills:je,Timetable:Ze}},$e=Je,We=(0,k.Z)($e,Q,ee,!1,null,"27953836",null),Ke=We.exports,Ve=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"academic"}},[t("div",{staticClass:"nav-space"}),t("CUHK"),t("DSE")],1)},ze=[],qe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"cuhk"}},[t("h1",[e._v("BSc. Computer Science")]),t("h2",[e._v("The Chinese University of Hong Kong")]),e._l(e.academics,(function(e,n){return t("div",{key:n},[t("AcademicTable",{attrs:{list:e}})],1)})),t("ul",{staticClass:"course-history"},e._l(e.semesters,(function(n,s){return t("li",{key:s},[t("Semester",{staticClass:"sem",class:e.collapse[s],attrs:{"academic-records":n,index:s}})],1)})),0)],2)},Xe=[],Ye=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"academic-table"}},[t("h3",[e._v(e._s(e.list.title))]),t("table",[t("tbody",e._l(e.list.element,(function(n,s){return t("tr",{key:s},e._l(n,(function(n,s){return t("td",{key:s},[e._v(e._s(n))])})),0)})),0)])])},Qe=[],et={name:"AcademicTable",props:["list"]},tt=et,nt=(0,k.Z)(tt,Ye,Qe,!1,null,"495f9d64",null),st=nt.exports,it=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"semester"}},[t("h1",{on:{click:function(t){e.expand=!e.expand}}},[e.expand?t("i",{staticClass:"fas fa-caret-down"}):t("i",{staticClass:"fas fa-caret-right"}),e._v(" "+e._s(e.academicRecords.title)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}]},[t("AcademicTable",{attrs:{list:e.academics}}),t("table",[e._m(0),t("tbody",e._l(e.academicRecords.enrollments,(function(n,s){return t("tr",{key:s},e._l(n,(function(n,s){return t("td",{key:s},[e._v(e._s(n))])})),0)})),0),t("tfoot",[t("tr",[t("td"),t("td"),t("td",[e._v(e._s(e.totalUnits))]),t("td"),t("td",[e._v(e._s(e.totalGradePoints.toFixed(3)))])])])])],1)])},at=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("td",[e._v("Course")]),t("td",[e._v("Course Name")]),t("td",[e._v("Units")]),t("td",[e._v("Grade")]),t("td",[e._v("Grade Points")])])])}],ot={name:"Semester",components:{AcademicTable:st},props:["academicRecords"],data(){return{expand:!1,academics:{},totalUnits:0,totalGradePoints:0}},mounted(){this.academicRecords.enrollments.forEach((e=>{this.totalUnits+=e.units,this.totalGradePoints+=e.gradePoints})),this.academics={element:[["Units Earned",this.totalUnits],["Term GPA",this.academicRecords.termGPA.toFixed(3)],["Cumulative GPA",(this.academicRecords.totalGradePoints/this.academicRecords.totalUnits).toFixed(3)],["Academic Standing","Good Standing"]]}}},rt=ot,lt=(0,k.Z)(rt,it,at,!1,null,"71b26710",null),ct=lt.exports,ut={name:"CUHK",components:{AcademicTable:st,Semester:ct},data(){return{collapse:[],semesters:[{title:"2022 Summer Semester",enrollments:[{course:"UGEA2100",name:"Outline of Chinese Culture",units:2,grade:"A-",gradePoints:7.4}],totalUnits:64,totalGradePoints:231.2,termGPA:3.7},{title:"2022 Spring Semester",enrollments:[{course:"ESTR2102",name:"Data Structures",units:3,grade:"B+",gradePoints:9.9},{course:"ESTR2020",name:"Statistics for Engineers",units:2,grade:"A",gradePoints:8},{course:"CENG3420",name:"Computer Organization & Design",units:3,grade:"B+",gradePoints:9.9},{course:"CSCI3250",name:"Computers and Society",units:2,grade:"B-",gradePoints:5.4},{course:"CSCI3251",name:"Engineering Practicum",units:1,grade:"P",gradePoints:0},{course:"ELTU2014",name:"English for ERG Stds I",units:3,grade:"B+",gradePoints:9.9},{course:"UGFN1000",name:"In Dialogue With Nature",units:3,grade:"A",gradePoints:12}],totalUnits:62,totalGradePoints:223.8,termGPA:3.444},{title:"2021 Autumn Semester",enrollments:[{course:"ENGG2760",name:"Probability for Engineers",units:2,grade:"A-",gradePoints:7.4},{course:"ENGG2440",name:"Discrete Math for Engineers",units:3,grade:"A-",gradePoints:11.1},{course:"ENGG2020",name:"Digital Logic and Systems",units:3,grade:"A",gradePoints:12},{course:"CSCI1130",name:"Intro to Computing Using Java",units:3,grade:"A-",gradePoints:11.1},{course:"CHLT1200",name:"University Chinese II",units:3,grade:"B+",gradePoints:9.9},{course:"UGFH1000",name:"In Dialogue With Human",units:3,grade:"A-",gradePoints:11.1}],totalUnits:46,totalGradePoints:168.7,termGPA:3.682},{title:"2021 Spring Semester",enrollments:[{course:"ENGG1120",name:"Linear Algebra for Engineers",units:3,grade:"A",gradePoints:12},{course:"ENGG1130",name:"Multivariable Calculus for Eng",units:3,grade:"A",gradePoints:12},{course:"MATH1030",name:"Linear Algebra I",units:3,grade:"A-",gradePoints:11.1},{course:"STAT1011",name:"Introduction to Statistics",units:3,grade:"A-",gradePoints:11.1},{course:"ELTU1001",name:"Foundation Eng for Uni Studies",units:4,grade:"B+",gradePoints:13.2},{course:"PHED1027",name:"Team Handball (Men)",units:1,grade:"P",gradePoints:0}],totalUnits:29,totalGradePoints:106.1,termGPA:3.713},{title:"2020 Autumn Semester",enrollments:[{course:"MATH1510",name:"Calculus for Engineers",units:3,grade:"A",gradePoints:12},{course:"ENGG1100",name:"Problem Solving By Programming",units:3,grade:"A",gradePoints:12},{course:"PHYS1110",name:"Engineering Phy: Mech & Thermo",units:3,grade:"A-",gradePoints:11.1},{course:"CHLT1100",name:"University Chinese I",units:3,grade:"P",gradePoints:0},{course:"GEWS1011",name:"College Induction Course",units:3,grade:"B+",gradePoints:9.9},{course:"PHED1041",name:"Badminton (Men)",units:1,grade:"C-",gradePoints:1.7}],totalUnits:13,totalGradePoints:46.7,termGPA:3.592}],academics:[{title:"Academics",tableHead:["Name","Time"],element:[["Board-Based Engineering","Autumn Semestor 2020"],["BSc. Computer Science","Autumn Semestor 2021"],["ELITE Stream","Spring Semestor 2022"],["Expected Graduation Term","Spring Semestor 2024"]]},{title:"Academic Records Review",tableHead:["Records","Value"],element:[["Total Grade Points",231.2],["Total Units Taken (P/F)","64 (+5)"],["Cumulative GPA",3.613],["Major GPA",3.382]]},{title:"Academic Honors and Awards",tableHead:["Awards","Time"],element:[["Dean's List","2020 - 2021 (Year 1)"]]},{title:"Course History"}]}}},dt=ut,mt=(0,k.Z)(dt,qe,Xe,!1,null,"37bce6dc",null),pt=mt.exports,ht=function(){var e=this,t=e._self._c;return t("div",{ref:"dse",attrs:{id:"dse"}},[t("h1",[e._v("Hong Kong Diploma of Secondary Education (HKDSE)")]),t("h2",[e._v("Kwun Tong Government Secondary School")]),t("AcademicTable",{attrs:{list:e.academics}}),t("table",[e._m(0),t("tbody",e._l(e.dseResults,(function(n,s){return t("tr",{key:s},[t("td",[e._v(e._s(n[0]))]),t("td",[e._v(e._s(n[1]))])])})),0)]),t("div",{staticClass:"button",on:{click:function(t){return e.$store.commit("GO_STATIC","HKDSE_Results.pdf")}}},[e._v("Download")])],1)},gt=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("td",[e._v("Subject")]),t("td",[e._v("Level")])])])}],vt={name:"DSE",components:{AcademicTable:st},data(){return{dseResults:[["Mathematics (Compulsory and Extended)","5*"],["Mathematics (Algebra and Calculus)","5*"],["Physics","5"],["English Language","3"],["Chinese Language","3"],["Liberal Studies","3"]],academics:{element:[["Exam Year","2020"],["Best 5 Subjects","23"]]}}}},ft=vt,St=(0,k.Z)(ft,ht,gt,!1,null,"8d645b44",null),_t=St.exports,bt={name:"Academic",components:{CUHK:pt,DSE:_t},mounted(){this.$nextTick((()=>{if(!this.$route.query.location)return;let e="number"===typeof this.$route.query.location?this.$route.query.location:document.getElementById(this.$route.query.location).offsetTop;window.scrollTo({top:e-50,behavior:"smooth"})}))}},yt=bt,Ct=(0,k.Z)(yt,Ve,ze,!1,null,"973174c6",null),wt=Ct.exports,Tt=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"learning"}},[t("div",{staticClass:"nav-space"}),t("LearningTimeline"),t("LearningProject")],1)},kt=[],Pt=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"learning-timeline"}},[t("h1",[e._v("Learning Timeline")]),t("div",{staticClass:"timeline-container"},[t("el-timeline",e._l(e.items,(function(n,s){return t("div",{key:n.id},[t("LearningItem",{attrs:{item:n,index:s,itemStatus:e.itemStatus,switchStatus:e.switchStatus}})],1)})),0)],1)])},At=[],xt=function(){var e=this,t=e._self._c;return t("el-timeline-item",{class:e.active||!e.collapse?"active":"",attrs:{timestamp:e.item.timestamp,placement:"top"}},[t("el-card",{class:e.itemStatus[e.index]},[t("h1",{on:{click:e.onClick,mouseover:function(t){e.active=!0},mouseleave:function(t){e.active=!1}}},[e._v(" "+e._s(e.item.name)+" ")]),t("div",[t("h2",[e._v("Master Technique:")]),e._l(e.item.syllabus,(function(n,s){return t("p",{key:s},[e._v("- "+e._s(n))])}))],2),t("div",{staticClass:"resources-container"},[t("h2",[e._v("Resources:")]),t("div",[e.item.codeLink?t("h3",{on:{click:function(t){return e.$store.commit("GO_STATIC","resources/"+e.item.codeLink)}}},[t("i",{staticClass:"fas fa-code"}),e._v("Download Code")]):e._e(),e.item.markDown?t("h3",{on:{click:function(t){return e.$store.commit("GO_STATIC","resources/"+e.item.markDown)}}},[t("i",{staticClass:"fab fa-markdown"}),e._v("Download Notes")]):e._e(),e.item.materials?t("h3",{on:{click:function(t){return e.$store.commit("GO_STATIC","resources/"+e.item.materials)}}},[t("i",{staticClass:"fab fa-book"}),e._v("Download Materials")]):e._e()])]),e.item.blogLink?t("div",[t("h4",[e._v("Blog Articles:")]),t("a",{attrs:{href:e.item.blogLink}},[e._v(e._s(e.item.blogLink))])]):e._e()])],1)},Et=[],It={name:"LearningItem",props:["item","index","itemStatus","switchStatus"],data(){return{height:1e3,collapse:!0,active:!1,status:"collapsed"}},methods:{onClick(){this.active=!0,this.switchStatus(this.index)}}},Lt=It,Mt=(0,k.Z)(Lt,xt,Et,!1,null,"5a4730fd",null),Gt=Mt.exports,Dt={name:"LearningTimeline",components:{LearningItem:Gt},data(){return{itemStatus:[],items:[{id:"nodejs",name:"NodeJS",timestamp:"2022/6/27 - 2022/7/6, 2022/7/28 - 2022/8/5",syllabus:["npm & yarn, CommonJS, Node Modules, Express, MongoDB","Express, Express Router, Middleware, Express-cli","MongoDB, CRUD Operations"],blogLink:"https://donaldlamnl.github.io/myBlog/categories/NodeJS",codeLink:"nodejs-code.zip",markDown:"nodejs.md"},{id:"ajax",name:"AJAX",timestamp:"2022/7/27 - 2022/8/1",syllabus:["XMLRequestHttp, GET & POST Request, JQuery AJAX","Same-Origin-Policy, JSONP, CORS","Anxios, Fetch"],blogLink:"https://donaldlamnl.github.io/myBlog/categories/AJAX",codeLink:"ajax-code.zip",markDown:"ajax.md"},{id:"es6",name:"JavaScript ES6-11",timestamp:"2022/7/23 - 2022/7/26",syllabus:["Destructuring Assignment, Template String, Arrow Function","Symbol, Iterator & Generator, Promise","Map, Set, Class"],blogLink:"https://donaldlamnl.github.io/myBlog/categories/JavaScript",codeLink:"es6-code.zip",markDown:"es6.md"},{id:"jsa",name:"JavaScript Advanced",timestamp:"2022/7/9 - 2022/7/22",syllabus:["Class & Object, Constructor Function, Prototype, Extends","Functions, Closure, Recursion, Shallow & Deep Copy","Regular Expression"],blogLink:"https://donaldlamnl.github.io/myBlog/categories/JavaScript",codeLink:"jsa-code.zip",markDown:"jsa.md"},{id:"vuejs",name:"VueJS",timestamp:"2022/6/5 - 2022/6/26",syllabus:["Vue 2 Essentials, MVVM, Diff Algorithm, Components, Lifecycle","Vue-cli, props, Global Event Bus, Publish & Subscribe, Vuex, AJAX","Vue Router"],codeLink:"vuejs-code.zip",markDown:"vuejs.md"},{id:"java",name:"JavaSE",timestamp:"2020 Summer, 2021 Autumn Semestor",syllabus:["Java Basic, Function, Array, Recursion","Object-Oriented Programming, Class & Object, Constructor","Inheritance, Encapsulation, Polymorphism, Override & Overload"],codeLink:"java-code.zip"},{id:"c-lang",name:"C Lang",timestamp:"2020 Autumn Semestor, 2022 Spring Semestor",syllabus:["File i/o, Pointer, String & Array","Data Structure: Linked-List, Stack, Queue, Tree, Heap, Hash, Quick Sorting","Union-Find, Dynammic Programming, Greedy Algorithm, Text Processing"],codeLink:"c-lang-code.zip",materials:"c-lang.zip"},{id:"js",name:"JavaScript",timestamp:"2020 Summer, 2021 Autumn Semestor",syllabus:["JS Data Types & Keywords, JS APIs","Class & Object, Scope, Constructor Function, Prototype","Dom Operations, Event, Event Bubbles, Mouse & Keyboard Event","BOM, Navigator, History, Interval & Timeout"],codeLink:"js-code.zip"},{id:"css3",name:"CSS3",timestamp:"2021/5/13 - 2021/6/1",syllabus:["Layout, margin & border & padding, border-radius & shadow","Float, BFC, clearFix, Position (relative, absolute, fixed, sticky)","Font & Icon, Background, Background Image & gradient, Table Style"],codeLink:"css3-code.zip"},{id:"html5",name:"HTML5",timestamp:"2021/5/12",syllabus:["HTML Tags, Relative path, List, Table, Form"],codeLink:"html5-code.zip"}]}},methods:{switchStatus(e){let t=""===this.itemStatus[e]?"collapsed":"";this.itemStatus.forEach(((n,s)=>{e===s?this.itemStatus.splice(s,1,t):this.itemStatus.splice(s,1,"collapsed")}))}},mounted(){for(let e=0;e<this.items.length;e++)this.itemStatus.push("collapsed")}},Bt=Dt,Ot=(0,k.Z)(Bt,Pt,At,!1,null,"524841bc",null),jt=Ot.exports,Ft=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"learning-project"}},[t("el-tabs",{attrs:{type:"border-card"}},e._l(e.item,(function(e,n){return t("el-tab-pane",{key:n,attrs:{label:e.name}},[t("ProjectItem",{attrs:{item:e}})],1)})),1)],1)},Nt=[],Ht=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.item.name)+" Project")]),t("table",[t("tbody",e._l(e.item.content,(function(n,s){return t("tr",{key:s},[t("td",[e._v(e._s(n.title))]),t("td",[e._v(e._s(n.content))])])})),0)])])},Rt=[],Ut={name:"ProjectItem",props:["item"]},Zt=Ut,Jt=(0,k.Z)(Zt,Ht,Rt,!1,null,"09e1d711",null),$t=Jt.exports,Wt={name:"LearningProject",components:{ProjectItem:$t},data(){return{item:[{name:"myWeb",content:[{title:"Type",content:"Self-Learning"},{title:"Time",content:"2022(Aug) Summer Semester"},{title:"Description",content:"A conclusion and exhibition of front-end learning. In this project, I mainly used CSS3, JavaScript and VueJS frame to build a personal website from zero. This website is used to "}],resources:"",link:""},{name:"myBlog",content:[{title:"Type",content:"Self-Learning"},{title:"Time",content:"2022(Aug) Summer Semester"},{title:"Description",content:""}],resources:"",link:""}]}}},Kt=Wt,Vt=(0,k.Z)(Kt,Ft,Nt,!1,null,"e9b12c84",null),zt=Vt.exports,qt={name:"Learning",components:{LearningTimeline:jt,LearningProject:zt}},Xt=qt,Yt=(0,k.Z)(Xt,Tt,kt,!1,null,"d95e1300",null),Qt=Yt.exports,en={},tn=(0,k.Z)(en,i,a,!1,null,null,null),nn=tn.exports;const sn=new Y.Z({routes:[{name:"Home",component:Ke,path:"/home",meta:{sections:[{id:"short-intro",name:"Introduction"},{id:"about",name:"About"},{id:"education",name:"Education"},{id:"skills",name:"Skills"},{id:"timetable",name:"Timetable"}]}},{name:"Academic",component:wt,path:"/academic",meta:{sections:[{id:"cuhk",name:"CUHK"},{id:"dse",name:"DSE"}]}},{name:"Learning",component:Qt,path:"/learning",meta:{sections:[{id:"learning-timeline",name:"Learning Timeline"},{id:"learning-project",name:"Projects"}]}},{name:"Blog",component:nn,path:"/blog"}],scrollBehavior(e,t,n){return n||{x:0,y:0}}});sn.beforeEach(((e,t,n)=>{"Blog"===e.name?window.location.href="https://donaldlamnl.github.io/myBlog/":n()}));var an=sn,on=n(3822);v["default"].use(on.ZP);const rn={goStatic(e,t){e.commit("GO_STATIC",t)},goPosition(e,t){e.commit("GO_POSITION",t)}},ln={GO_STATIC(e,t){window.open("/myWeb/static/"+t)},GO_POSITION(e,t){let{path:n,location:s=0}=t;an.push({path:n,query:{location:s}})}},cn={};var un=new on.ZP.Store({actions:rn,mutations:ln,state:cn});n(3082);v["default"].use(Y.Z),v["default"].use(V.Z),v["default"].use(z.Z),v["default"].use(X()),v["default"].config.productionTip=!1,v["default"].use(g()),v["default"].use(p()),v["default"].use(d()),v["default"].use(c()),v["default"].use(r()),new v["default"]({router:an,store:un,render:e=>e(K)}).$mount("#app")},103:function(e,t,n){e.exports=n.p+"img/A01.423b8e85.webp"},4763:function(e,t,n){e.exports=n.p+"img/A02.a50fb534.webp"},3814:function(e,t,n){e.exports=n.p+"img/A03.b81b3174.webp"},6452:function(e,t,n){e.exports=n.p+"img/A04.58a25260.webp"},2759:function(e,t,n){e.exports=n.p+"img/logo_white.2637fe7d.png"},6388:function(e,t,n){e.exports=n.p+"img/signature.e92fad62.png"}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,a){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/myWeb/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(s);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},s=self["webpackChunkmyweb"]=self["webpackChunkmyweb"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var i=n.O(void 0,[998],(function(){return n(43)}));i=n.O(i)})();
//# sourceMappingURL=app.52f3a722.js.map