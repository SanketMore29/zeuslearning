
const mainBody:any = document.querySelector(".mainbody");
var markup = `
   
<div class="header">
  <div class="row h12">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="assets/icons/logo%20used%20in%20header.svg" alt="logo"
        /></a>
        <div class="d-flex flex-row order-2 order-lg-3 icons1">
          <ul class="navbar-nav flex-row ms-auto">
            <li class="nav-item">
              <a class="nav-link al" href="#"
                ><img src="assets/icons/alerts.svg" alt=""
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link ann" href="#"
                ><img src="assets/icons/announcements.svg" alt=""
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><img src="assets/icons/account_circle.svg" alt=""
              /></a>
            </li>
            <li class="nav-item">
              <a>
                <div class="hamburgermenu order-3">
                  <img src="assets/icons/hamburger-menu.svg" alt="">
              </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="navbar-1"
          id="navbarNav"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link melement" href="#">DASHBOARD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link melement" href="#">CONTENT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link melement" href="#">USERS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link melement" href="#">REPORTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link melement" href="#">ADMIN</a>
            </li>
          </ul>
        </div>
        <!-- <div class="hamburgermenu order-3">
            <img src="assets/icons/hamburger-menu.svg" alt="">
            
        </div> -->
      </div>
    </nav>
  </div>
  <div class="subnav">
    <button class="accordion">Dashboard</button>
    <button class="accordion">Content</button>
    <div class="panel">
      Course Catalog
    </div>
    <button class="accordion">Users</button>
    <button class="accordion">Reports</button>
    <button class="accordion">Admin</button>
  </div>
  <div class="announcenav">
    <div class="anns">
      <div class="allann">
       <!-- Annnouncements -->
      </div>
      <div class="annbuttons">
        <button>Show All</button>
        <button>Create new</button>
      </div>
    </div>
  </div>
  <div class="alertnav">
  <div class="anns">
  <div class="allann1">
  <!-- Alerts -->
  </div>
  <div class="annbuttons">
    <button>Show All</button>
  </div>
</div>
   
  </div>
</div>
  
  <!-- Main area  -->
  <div class="mainarea container">
  <div class="row container text-center candc justify-content-center">
    <div class="col" style="border-bottom: 4px solid #222222">
      <img src="assets/icons/courses.svg" alt="Courses" />
      <strong>4</strong> Courses
    </div>
    <div class="col">
      <img src="assets/icons/classes.svg" alt="" />
      <strong>4</strong> Classes
    </div>
  </div>
  <div class="row d-flex flex-row">
    <div class="col show1">Showing 4 of 4 courses</div>
    <div class="col sort1 d-flex ms-auto text-end justify-content-end">
      <div class="show1">Sort by:</div>
      <select name="cname" >
        <option value="">Course Name</option>
      </select>
    </div>
  </div>
  <hr />
  <div class="container-fluid">
    
    <div class="row">
      <div class="col cards col-sm-12 col-md col-12">
        <div class="imgmask">
          <img src="assets/images/imageMask.png" alt="">
        </div>
        <div class="alldata">
          <div class="staricon">
            <img src="assets/icons/favourite.svg" alt="">
          </div>
          <div class="row ">Acceleration</div>
          <div class="row"> <p class="show1 p-0 my-1">Physics | Grade 7+2</p> </div>
          <div class="row"> <p class="show1"> <strong> 4 </strong> Units <strong>18</strong> lessons <strong>24</strong> Topics</p> </div>
          <div class="row"> 
          <select name="tname"  class="selectincourse">
            <option value="" >Mr Frank's Class B</option>
          </select>
        </div>
          <div class="row"><p class="show1">50 Students | 21-Jan-2020 -  21-Aug-2020</p></div>
        </div>
        <div class="foot">
          <hr>
          <div class="row d-flex m-auto justify-content-center text-center">
            <div class="col">
              <img src="assets/icons/preview.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/manage%20course.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/grade%20submissions.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/reports.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="col cards col-sm-12 col-md col-12">
        <div class="imgmask">
          <img src="assets/images/imageMask-1.png" alt="">
        </div>
        <div class="alldata">
          <div class="staricon">
            <img src="assets/icons/favourite.svg" alt="">
          </div>
          <div class="row ">Displacement,Velocity and Speed</div>
          <div class="row"> <p class="show1 p-0 my-1">Physics 2 | Grade 6+3</p> </div>
          <div class="row"> <p class="show1"> <strong> 2 </strong> Units <strong>15</strong> lessons <strong>20</strong> Topics</p> </div>
          <div class="row"> 
            <select name="tname"  class="selectincourse">
              <option value="No class" disabled selected>No class</option>
            </select>
        </div>
          <div class="row"></div>
        </div>
        <div class="foot">
          <hr>
          <div class="row d-flex m-auto justify-content-center text-center">
            <div class="col">
              <img src="assets/icons/preview.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/manage%20course.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/grade%20submissions.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/reports.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col cards col-sm-12 col-md col-12">
        <div class="imgmask">
          <img src="assets/images/imageMask-3.png" alt="">
        </div>
        <div class="alldata">
          <div class="staricon">
            <img src="assets/icons/favourite.svg" alt="">
          </div>
          <div class="row ">Introduction to Biology:Micro orrganisms and how they affec...</div>
          <div class="row"> <p class="show1">Biology | Grade 4+1</p> </div>
          <div class="row"> <p class="show1"> <strong> 5 </strong> Units <strong>16</strong> lessons <strong>22</strong> Topics</p> </div>
          <div class="row"> 
            <select name="tname"  class="selectincourse">
              <option value="" >All classes</option>
            </select> 
          </div>
          <div class="row"><p class="show1">300 Students</p></div>
        </div>
        <div class="foot">
          <hr>
          <div class="row d-flex m-auto justify-content-center text-center">
            <div class="col">
              <img src="assets/icons/preview.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/manage%20course.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/grade%20submissions.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/reports.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="col cards col-sm-12 col-md col-12">
        <div class="imgmask">
          <img src="assets/images/imageMask-2.png" alt="">
        </div>
        <div class="alldata" id="fourthcontainer">
          <div class="row ">Introduction to High School Mathematics</div>
          <div class="row"> <p class="show1 p-0 my-1">Mathematics | Grade 8+3</p> </div>
          <div class="row">  </div>
          <div class="row"> 
            <select name="tname"  class="selectincourse">
              <option value="" >Mr Frank's Class A</option>
            </select></div>
          <div class="row"><p class="show1">44 Students | 14-Oct-2019 -  20-Oct-2020</p></div>
        </div>
        <div class="foot">
          <hr>
          <div class="row d-flex m-auto justify-content-center text-center">
            <div class="col">
              <img src="assets/icons/preview.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/manage%20course.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/grade%20submissions.svg" alt="" />
            </div>
            <div class="col">
              <img src="assets/icons/reports.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  <!-- footer  -->
  <div class="container d-flex justify-content-center">
  About | Contact us
  </div>
  <div class="footer">
  <footer
    class="d-flex justify-content-center text-nowrap mx-0 text-center flex-flow-reverse w-100"
  >
    <div class="row">
      <div class="col my-0">
        <img
          src="assets/icons/logo%20used%20in%20footer.svg"
          alt="footer logo"
          class="footerlogo"
        />
      </div>
      <div class="col my-0 text-center">
        Copyright &copy; 2020-2021
        <strong>Zeus Systems Pvt. Ltd</strong> All rights reserved
      </div>
    </div>
  </footer>
  </div>


`;

var alertsdata:{
  "icontype":string;
  "message":string; 
  "date":string;
  "time":string;
  "course":string;
}[]=[
  {
    "icontype":'dndicon.png',
    "message":'License for Introduction to Algebra has been assigned to your school',
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":''
  },
  {
    "icontype":'greentick.png',
    "message":'Lesson 3 Practice Worksheet overdue for Amy Santiago',
    "date":'15-sep-2018 ',
    "time":'5:21 pm',
    "course":'Advanced Mathematics'
  },
  {
    "icontype":'dndicon.png',
    "message":'23 new students created',
    "date":'14-sep-2018 ',
    "time":'1:21 pm',
    "course":''
  },
  {
    "icontype":'dndicon.png',
    "message":'15 submissions ready for evaluation',
    "date":'13-sep-2018 ',
    "time":'1:15 pm',
    "course":'Basic of Algebra'
  },
  {
    "icontype":'dndicon.png',
    "message":'License for Basic Concepts in Geometry has been assigned to your... school',
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":''
  },
  {
    "icontype":'greentick.png',
    "message":'Lesson 3 Practice Worksheet overdue for Sam Diego',
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":'Advanced Mathematics'
  },
] ;
var announcementsdata:{
  "Name":string;
  "icontype":string;
  "message":string;
  "numberoffiles":number;
  "date":string;
  "time":string;
  "course":string;
}[]=[
  {
    "Name":'Wilson Kumar',
    "icontype":'greentick.png',
    "message":'No classes Will be held on 21st Nov',
    "numberoffiles":2,
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":''
  },
  {
    "Name":'Samson white',
    "icontype":'dndicon.png',
    "message":'Guest lecture on Geometry on 20th September',
    "numberoffiles":2,
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":''
  },
  {
    "Name":'Wilson Kumar',
    "icontype":'greentick.png',
    "message":'Additional course materials available on request',
    "numberoffiles":0,
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":'Mathematics 101'
  },
  {
    "Name":'Wilson Kumar',
    "icontype":'dndicon.png',
    "message":'No classes Will be held on 25th Dec',
    "numberoffiles":0,
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":''
  },
  {
    "Name":'Wilson Kumar',
    "icontype":'dndicon.png',
    "message":'Additional course materials available on request',
    "numberoffiles":0,
    "date":'15-sep-2018 ',
    "time":'7:21 pm',
    "course":'Mathematics 101'
  },
] ;


mainBody.innerHTML = markup;
//Query  select
const hammenu = document.querySelector(".hamburgermenu") as HTMLElement;
const subnav = document.querySelector(".subnav") as HTMLElement;
const ann = document.querySelector('.ann') as HTMLElement;
const annav = document.querySelector('.announcenav') as HTMLElement;
const al = document.querySelector('.al') as HTMLElement;
const alnav = document.querySelector('.alertnav') as HTMLElement;
var acc = document.getElementsByClassName("accordion");
const allann = document.querySelector('.allann') as HTMLElement;
const allann1 = document.querySelector('.allann1') as HTMLElement;

//accordion
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("act");
    var panel = this.nextElementSibling;
    setTimeout(() => {
      this.classList.toggle("act");
      if (panel.style.maxHeight === '23px' ) {
        panel.style.maxHeight = 0;
      }
    }, 5000);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Events
hammenu.addEventListener('mouseover',()=>{
  subnav.style.display = 'block';
  subnav.style.transition = "all 2s";
  alnav.style.display = 'none';
  annav.style.display = 'none';
},false);
subnav.addEventListener('mouseover',()=>{
    subnav.style.display = 'block';
},false);
subnav.addEventListener('mouseout',()=>{
    subnav.style.display = 'none';
},false);

ann.addEventListener('mouseover',()=>{
  annav.style.display = 'block';
  subnav.style.display = 'none';
  alnav.style.display = 'none';
},false);
annav.addEventListener('mouseover',()=>{
    annav.style.display = 'block';
},false);
annav.addEventListener('mouseout',()=>{
    annav.style.display = 'none';
},false);

al.addEventListener('mouseover',()=>{
  alnav.style.display = 'block';
  subnav.style.display = 'none';
  annav.style.display = 'none';
},false);
alnav.addEventListener('mouseover',()=>{
    alnav.style.display = 'block';
},false);
alnav.addEventListener('mouseout',()=>{
    alnav.style.display = 'none';
},false);

//innerHTML
var a1 = '';
announcementsdata.forEach(adata => {
  a1 += `
  <div class="anncard ${adata.icontype==='dndicon.png'? 'dndicon' : ''}" >
  <div class="headingofcard">
    <span>PA:</span> ${adata.Name} <span><img src="assets/icons/${adata.icontype}" alt="tick"></span><br>
  </div>
  <div class="dataofcard">
    <span>${adata.message}</span><br>
    ${adata.course?'<span class="course">Course: '+adata.course+'</span>' : ''}
  </div>
  <div class="footerofcard">
    ${adata.numberoffiles > 0 ? '<span><img src="assets/icons/paperclip.svg" alt="clipicon"></span>'+adata.numberoffiles+' files are attached' : ''}  &nbsp;&nbsp;&nbsp;&nbsp;<span class="datetime">${adata.date} at ${adata.time}</span>
  </div>
  </div>
  <hr>
  `;
  allann.innerHTML = a1;
});
var a2 = '';
alertsdata.forEach(adata => {
  a2 += `
  <div class="anncard ${adata.icontype==='dndicon.png'? 'dndicon' : ''}" >
  <div class="dataofcard">
    <span>${adata.message}</span><img src="assets/icons/${adata.icontype}" alt="tick"></span><br><br>
    ${adata.course?'<span class="course">Course: '+adata.course+'</span>' : ''}
  </div>
  <div class="footerofcard">
     <span class="datetime">${adata.date} at ${adata.time}</span>
  </div>
  </div>
  <hr>
  `;
  console.log(a2);
  
  allann1.innerHTML = a2;
});