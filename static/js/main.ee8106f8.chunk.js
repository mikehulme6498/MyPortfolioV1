(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,,function(e,t){t.setBGColourClass=function(e){var t="";switch(e){case"darkblue":t="bg-primero-darkBlue";break;case"lightblue":t="bg-primero-lightBlue";break;case"orange":t="bg-primero-orange";break;default:t="bg-primero-white"}return t}},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),o=a.n(i),c=a(17),n=a.n(c),r=(a(25),a(10),a(3)),l=a(2),d=a(19);a(26);var h=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],c=function(){return o(!1)};return Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsx)(r.b,{to:"/",className:"navbar-logo",onClick:c,children:Object(s.jsx)("img",{className:"site-logo",src:"/MyPortfolioV1/Images/primero-on.png",alt:"logo2"})}),Object(s.jsx)("div",{className:"menu-icon primero-orange",onClick:function(){return o(!a)},children:Object(s.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/",className:"nav-links",onClick:c,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/AboutMe",className:"nav-links",onClick:c,children:"About Me"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/Projects",className:"nav-links",onClick:c,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/",className:"nav-links",onClick:c,children:"Contact"})})]}),Object(s.jsxs)("div",{className:"navbar-social-icons",children:[Object(s.jsx)("a",{className:"navbar-linkedIn",href:"https://www.linkedin.com/in/mike-hulme-574a5a188/",target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)("a",{className:"social-icon-link gitHub",href:"https://github.com/mikehulme6498",target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",children:Object(s.jsx)("i",{className:"fab fa-github"})})]})]})})};a(32);var j=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"As a young boy at the age of 11 I started coding on my BBC Micro computer (showing my age a bit here). I was copying from a coding book and created my first application (a car racing game). I was hooked."}),Object(s.jsx)("p",{children:"I went on to college at 13 and completed City & Guilds courses in Pascal and C. During my later teens I came away from it all. It's always been in my mind to start coding again so 2 years ago I set out to get back in the game."}),Object(s.jsxs)("p",{children:["In the last 2 years I have become ",Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Microsoft.png",alt:"Microsoft Logo",className:"microsoft-logo"})," certfied in C#, ASP.net, Html / CSS / Javascript. I have built numerous applications and am ready to shift my career into software development (where it belongs)."]})]})};var b=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(s.jsx)("img",{src:e.src,alt:"/",className:"cards__item__img"})}),Object(s.jsxs)("div",{className:"cards__item__info",children:[Object(s.jsx)("h5",{className:"cards__item__title",children:e.title}),Object(s.jsx)("div",{className:"cards__item__desc",children:e.desc}),Object(s.jsxs)("div",{className:"tech__used",children:["Tech Used: ",e.techUsed]})]})]})})})};a(33);var m=function(e){var t=a(13).setBGColourClass(e.bgColour);return Object(s.jsx)("div",{className:"cards ".concat(t),id:"projects",children:Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsxs)("div",{className:"cards__wrapper",children:[Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(b,{src:"/MyPortfolioV1/Images/DiagnosticCover5.png",title:"Automated Process Diagnostics",desc:"Converts plain text files into digital data for a total immersive diagnostics system.",label:"Web App",path:"/ProcessDiag",techUsed:"C# / ASP.Net Core MVC / Entity / Javascript"}),Object(s.jsx)(b,{src:"/MyPortfolioV1/Images/CryptoPic2.png",title:"CryptoPic",desc:"Hides Passwords / Messages in images in a undetectable way.",label:"Desktop App",path:"/diagnostics",techUsed:"C# / .Net Framework / Winforms"})]}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(b,{src:"/MyPortfolioV1/Images/test2.jpg",title:"My Portfolio",desc:"The site you are viewing now. The site that inspired you to hire me :)",label:"Web",path:"/diagnostics",techUsed:"React"}),Object(s.jsx)(b,{src:"/MyPortfolioV1/Images/test3.jpg",title:"Soduko Puzzle Solver",label:"Web App",desc:"Built as a side project when learning Javascript.",path:"/diagnostics",techUsed:"Javascript"}),Object(s.jsx)(b,{src:"/MyPortfolioV1/Images/test4.jpg",title:"Business Management Software",label:"Desktop App",desc:"Complete managemtn studio for my wifes business. Manages Sales, Inventory, Accounts & Customers.",path:"/diagnostics",techUsed:"C# / SQL / Winforms"})]})]})})})},p=(a(34),["btn--primary","btn--outline"]),g=["btn--medium","btn--large"],u=function(e){var t=e.children,a=e.type,i=e.onClick,o=e.buttonStyle,c=e.buttonSize,n=p.includes(o)?o:p[0],l=g.includes(c)?c:g[0];return Object(s.jsx)(r.b,{to:"/",className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(n," ").concat(l),onClick:i,type:a,children:t})})};a(35);var f=function(){return Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsxs)("section",{className:"footer-subscription",children:[Object(s.jsx)("p",{className:"footer-subscription-heading",children:"Contact me for the best software you have ever seen"}),Object(s.jsx)("p",{className:"footer-subscription-text",children:"You can never cancel"}),Object(s.jsx)("div",{className:"input-areas",children:Object(s.jsxs)("form",{className:"footer-email-form",children:[Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(s.jsx)(u,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(s.jsxs)("div",{className:"footer-link-wrapper",children:[Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsx)(r.b,{to:"/",children:"Linked In"}),Object(s.jsx)(r.b,{to:"/",children:"Github"})]}),Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Contact"}),Object(s.jsx)(r.b,{to:"/",children:"mike@primerosoftware.co.uk"}),Object(s.jsx)(r.b,{to:"/",children:"Testomonials"}),Object(s.jsx)(r.b,{to:"/",children:"Linked In"}),Object(s.jsx)(r.b,{to:"/",children:"Github"})]})]}),Object(s.jsx)("small",{className:"website-rights",children:"Mike 2020"})]})};var x=function(e){var t=!0===e.shiftUpForLine?"shift-up-for-line":"",i=!0===e.secondToLast?"second-to-last-section":"",o=!0===e.blankSection?"blank-section":"",c=a(13).setBGColourClass(e.bgColour);return Object(s.jsxs)("div",{className:"page-body-section ".concat(i," ").concat(t," ").concat(o," ").concat(c),children:[Object(s.jsx)("div",{className:"section-title",children:e.title}),Object(s.jsx)("div",{className:"section-text",children:e.text})]})};a(36);var O=function(){return Object(s.jsx)("div",{className:"profile-container",children:Object(s.jsxs)("div",{className:"profile-section",children:[Object(s.jsxs)("div",{className:"profile-description",children:[Object(s.jsx)("div",{className:"title",children:" Hi, I'm Mike"}),Object(s.jsxs)("div",{className:"message",children:[Object(s.jsx)("p",{children:"I am passionate about creating software that solve real world problems."}),Object(s.jsx)("p",{})]})]}),Object(s.jsx)("div",{className:"profile-pic",children:Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/profile2.jpg",alt:"profile-pic"})})]})})};a(37);var v=function(){return Object(s.jsxs)("div",{className:"skill-logo-section",children:[Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/Csharp.png",alt:"CSharp",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/netcore.png",alt:"Net Core",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/dotnetmvc.png",alt:"Dot Net Core MVC",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/Javascript.png",alt:"Javascript",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/CSS.png",alt:"CSS",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/Html.png",alt:"Html",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/SQL.jpg",alt:"SQL",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/Photoshop.png",alt:"Photoshop",className:"skill-logo"}),Object(s.jsx)("img",{src:"/MyPortfolioV1/Images/Logos/Bootstrap.png",alt:"bootstrap",className:"skill-logo"})]})};var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(x,{title:"About Me",text:Object(s.jsx)(j,{}),shiftUpForLine:!0,secondToLast:!0}),Object(s.jsx)(x,{secondToLast:!0,blankSection:!0}),Object(s.jsx)(x,{title:"Skill Set",text:Object(s.jsx)(v,{}),bgColour:"darkblue",shiftUpForLine:!0}),Object(s.jsx)(x,{secondToLast:!0,blankSection:!0,bgColour:"darkblue"}),Object(s.jsx)(x,{title:"Projects",text:Object(s.jsx)(m,{}),bgColour:"white",shiftUpForLine:!0}),Object(s.jsx)(x,{secondToLast:!0,blankSection:!0}),Object(s.jsx)(x,{title:"Projects",text:Object(s.jsx)(f,{}),bgColour:"darkblue",shiftUpForLine:!0})]})};var w=function(e){var t="right"===e.imagePosition?"image-right":"image-left",i=!0===e.shiftUpForLine?"shift-up-for-line":"",o=!0===e.secondToLast?"second-to-last-section":"",c=!0===e.imageRounded?"image-rounded":"",n=!0===e.imageLarge?"image-large":"image-normal",r=!0===e.imageShadow?"image-shadow":"",l=!0===e.imageExpandable?"image-expandable":"",d=a(13).setBGColourClass(e.bgColour);return Object(s.jsxs)("div",{className:"page-body-section with-image ".concat(t," ").concat(i," ").concat(o," ").concat(d),children:[Object(s.jsxs)("figure",{className:"section-image-caption",children:[Object(s.jsx)("img",{src:"/MyPortfolioV1"+"".concat(e.image),className:"section-image ".concat(c," ").concat(n," ").concat(r," ").concat(l),alt:e.image}),Object(s.jsxs)("figcaption",{children:["Fig - ",e.caption]})]}),Object(s.jsxs)("div",{className:"section-text-container",children:[Object(s.jsx)("div",{className:"section-title",children:e.title}),Object(s.jsx)("div",{className:"section-text",children:e.text})]})]})};a(38);var k=function(e){return Object(s.jsxs)("div",{className:"page-heading",children:[Object(s.jsx)("div",{className:"heading-title",children:e.title}),Object(s.jsx)("div",{className:"heading-text",children:e.text})]})};var N=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"Compliance checks are just a click away, showing the compliance for each week broken down day by day. It show's percentage for each day, Reowork compliance, A scoring table for each day, then a detailed breakdown for each day."}),Object(s.jsx)("p",{children:"The scoring was set by the making plant leader and is completely customisable in the settings part of the application. materials can be added and removed from the checks. Scoring parameters are just as easy to alter as specifiactions change."}),Object(s.jsx)("p",{children:"All material information such as individual temperature targets, agitator speeds are also managable in the settings tab."})]})};var C=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"There are many other features implemented in the software that are not displayed above which are listed below. The making plant now has information that has never been obtainable before. Resulting in deeper level of understanding of the process allowing for much better maintanance schedules and improvements."}),Object(s.jsxs)("ul",{className:"ul-in-paragraph",children:[Object(s.jsx)("li",{children:"Operator Log book popluates automatically instead of manual entry in Excel."}),Object(s.jsx)("li",{children:"User Authentication - Aceces to various parts are limited to specific groups of people"}),Object(s.jsx)("li",{children:"Web API included for the standalone system to upload the reports"}),Object(s.jsx)("li",{children:"Notifcations when new materials or recipes are detected and further details are requested."})]}),Object(s.jsx)("p",{children:"(Instert feedback from Jai & Harrison)"})]})};var P=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"The control charts give a very clear indication of how the process is running. The user can select which parameter they would like to look at, Then the time frame and the chart is created."}),Object(s.jsx)("p",{children:"It also displays a process capability index (CPK) value on the choosen parameter and will give feedback on what actions to take depending on the CPK score."})]})};var I=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"demo-video",children:[Object(s.jsx)("div",{className:"section-text",children:Object(s.jsx)("p",{children:"This is still a work in progress but as you can see from the demo below it is fully functional with all the features described above."})}),Object(s.jsx)("iframe",{width:"840",height:"472",src:"https://www.youtube.com/embed/yyCeRltZdXM",title:"processDemo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})};var M=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"The idea was to create software that would read through each text file and extract all the data into digital manageable data, which could be stored in a database and queried as needed."}),Object(s.jsx)("p",{children:"This would mean all the information would be retrievable in seconds. Meaning the reports could be used to there full potential. Here is a list of proposed benefits."}),Object(s.jsxs)("ul",{className:"ul-in-paragraph",children:[Object(s.jsx)("li",{children:"Batch reports broken down and easy to understand. (see result)"}),Object(s.jsx)("li",{children:"Stoppage data for engineers to plan maintenance."}),Object(s.jsx)("li",{children:"Potential quality issues highlighted."}),Object(s.jsx)("li",{children:"Material Overweigh / Underway data."}),Object(s.jsx)("li",{children:"Use data to create control charts to prevent issues before they happend."}),Object(s.jsx)("li",{children:"Compliance data for the entire plant."})]}),Object(s.jsx)("p",{children:"All of the above is not currently possible without spending 100\u2019s of hours gathering the data manually. The software will be designed so all the above is easy to obtain for any user of the software."})]})};var L=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"Material variance is the amount a material over or underweighed compared to its target. In this section of the application you can see in order the biggest gains and losses over the specified timeframe. The system has knowledge of all the materials including the cost per ton allowing to not only display the amount lost or gained in Kilograms but also the total cost to the company."}),Object(s.jsx)("p",{children:"You can click on the magnifying glass of any of the materials to go even deeper into the issue. This will show you exactly how much was lossed or gained on each process stream which include the amount and the total occurances. and displays the percentage of each stream. For example if one process stream was the cause of 80% of the problem the engineers know exactly where to look."})]})};var T=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Batch reports are now easy to find with the search features implemented. Once you find the report you want you can click on view for a very easy to read report."}),Object(s.jsx)("p",{children:"People without any knowledge of the process can insatntly see if the time and viscosity is within specification via the guages. Stoppages are highlighted with an explanation in plain English."}),Object(s.jsx)("p",{children:"The back end is also set up for operators to add reasons why a certain issue could happen. Meaning the more the system is used the more accurate the stoppage data becomes."})]})};var _=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Rosemount is an old process control system that was developed in the 1980s. Currently, for data gathering, it produces a batch report in a text file for every batch created (example on the right)."}),Object(s.jsx)("p",{children:"Currently, it takes 10 minutes to decode a single batch report. Taking into account the batches made in 2019, it will take approximately one year to go through them all making it not feasible to go through each report to extract meaningful information or trends"}),Object(s.jsx)("p",{children:"Then you have all the hours of manipulating the data in spreadsheets to generate any kind of reports."})]})};var S=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("p",{children:"The results are shown below showing some of the major features and benefits. There is also a video demo at the bottom of this page."})})};var U=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Getting batches into the system is done in two ways. 1 automatically uploads the report when they are created by the system. The other method (shown on the right) is a very simple drag and drag system."}),Object(s.jsx)("p",{children:"Users can drop upto 300 batch report into the system. It takes around 3-4 seconds to convert all of them, store them in a database and they are then available for viewing at any time. This alone is an incredible step forward from the current system."}),Object(s.jsx)("p",{children:"There is a very thorough error checking system in place to prevent unwanted data ending up in the database, such as bogus reports, incomplete reports or any other issue. If it is not a complete report or has any invalid charactors it will not convert."}),Object(s.jsx)("p",{children:"Any failed files are reported to the users with an explanation why it failed."})]})};function F(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{title:"Automated Process Diagnostics",text:"Designed to revolutionise how the production plant diagnosis the process (Add button for video and github)"}),Object(s.jsx)(w,{title:"The Problem",text:Object(s.jsx)(_,{}),imagePosition:"right",image:"/Images/ReportDemo.png",caption:"This is an example of one report (hover or click to expand)",imageShadow:!0,imageExpandable:!0,shiftUpForLine:!0}),Object(s.jsx)(w,{title:"The Idea",text:Object(s.jsx)(M,{}),imagePosition:"left",image:"/Images/StackedReports.png",secondToLast:!0,imageRounded:!0,caption:"The idea!"}),Object(s.jsx)(x,{title:"The Results",text:Object(s.jsx)(S,{}),bgColour:"darkblue",shiftUpForLine:!0}),Object(s.jsx)(w,{title:"Upload Batch Process",text:Object(s.jsx)(U,{}),imagePosition:"right",image:"/Gifs/UploadDemo.gif",imageLarge:!0,caption:"Uploading batches as simple as drag and drop.",bgColour:"darkblue"}),Object(s.jsx)(w,{title:"Easy report search & report views",text:Object(s.jsx)(T,{}),imagePosition:"left",image:"/Gifs/UploadDemo.gif",imageLarge:!0,caption:"Easy search & new batch report view.",bgColour:"darkblue"}),Object(s.jsx)(w,{title:"Complaince Checks",text:Object(s.jsx)(N,{}),imagePosition:"right",image:"/Gifs/UploadDemo.gif",imageLarge:!0,caption:"Uploading batches as simple as drag and drop.",bgColour:"darkblue"}),Object(s.jsx)(w,{title:"Control Charts",text:Object(s.jsx)(P,{}),imagePosition:"left",image:"/Gifs/UploadDemo.gif",imageLarge:!0,caption:"Easy search & new batch report view.",bgColour:"darkblue"}),Object(s.jsx)(w,{title:"Material Variance Information",text:Object(s.jsx)(L,{}),imagePosition:"right",image:"/Gifs/UploadDemo.gif",imageLarge:!0,caption:"Uploading batches as simple as drag and drop.",bgColour:"darkblue"}),Object(s.jsx)(x,{title:"Conclusion",text:Object(s.jsx)(C,{}),bgColour:"darkblue"}),Object(s.jsx)(x,{blankSection:!0,secondToLast:!0,bgColour:"darkblue"}),Object(s.jsx)(x,{title:"Demo Video",text:Object(s.jsx)(I,{}),shiftUpForLine:!0,bgColour:"white"})]})}var A=function(){return Object(s.jsxs)(s.Fragment,{children:["Below is a list of my most recent projects. My most recent project which is the Automated Process Diagnostics app is the one I am most proud of.",Object(s.jsx)("br",{}),"The CryptoImage app is the coolest one I have made so far. Please check them out."]})};var V=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{title:"Projects",text:Object(s.jsx)(A,{})}),Object(s.jsx)(x,{title:"Projects",text:Object(s.jsx)(m,{}),shiftUpForLine:!0})]})};var D=Object(l.f)((function(e){var t=e.history;return Object(i.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null}));var B=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(D,{}),Object(s.jsx)(h,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/",exact:!0,component:y}),Object(s.jsx)(l.a,{path:"/MyPortfolioV1",component:y}),Object(s.jsx)(l.a,{path:"/Projects",component:V}),Object(s.jsx)(l.a,{path:"/AboutMe",component:j}),Object(s.jsx)(l.a,{path:"/ProcessDiag",component:F})]})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),o(e),c(e)}))};n.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),G()}],[[39,1,2]]]);
//# sourceMappingURL=main.ee8106f8.chunk.js.map