var mainBody = document.querySelector(".mainbody");
var markup = "\n   \n<div class=\"header\">\n  <div class=\"row h12\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"\n          ><img src=\"assets/icons/logo%20used%20in%20header.svg\" alt=\"logo\"\n        /></a>\n        <div class=\"d-flex flex-row order-2 order-lg-3 icons1\">\n          <ul class=\"navbar-nav flex-row ms-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link al\" href=\"#\"\n                ><img src=\"assets/icons/alerts.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link ann\" href=\"#\"\n                ><img src=\"assets/icons/announcements.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"\n                ><img src=\"assets/icons/account_circle.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a>\n                <div class=\"hamburgermenu order-3\">\n                  <img src=\"assets/icons/hamburger-menu.svg\" alt=\"\">\n              </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div\n          class=\"navbar-1\"\n          id=\"navbarNav\"\n        >\n          <ul class=\"navbar-nav ms-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">DASHBOARD</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">CONTENT</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">USERS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">REPORTS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">ADMIN</a>\n            </li>\n          </ul>\n        </div>\n        <!-- <div class=\"hamburgermenu order-3\">\n            <img src=\"assets/icons/hamburger-menu.svg\" alt=\"\">\n            \n        </div> -->\n      </div>\n    </nav>\n  </div>\n  <div class=\"subnav\">\n    <button class=\"accordion\">Dashboard</button>\n    <button class=\"accordion\">Content</button>\n    <div class=\"panel\">\n      Course Catalog\n    </div>\n    <button class=\"accordion\">Users</button>\n    <button class=\"accordion\">Reports</button>\n    <button class=\"accordion\">Admin</button>\n  </div>\n  <div class=\"announcenav\">\n    <div class=\"anns\">\n      <div class=\"allann\">\n       <!-- Annnouncements -->\n      </div>\n      <div class=\"annbuttons\">\n        <button>Show All</button>\n        <button>Create new</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"alertnav\">\n  <div class=\"anns\">\n  <div class=\"allann1\">\n  <!-- Alerts -->\n  </div>\n  <div class=\"annbuttons\">\n    <button>Show All</button>\n  </div>\n</div>\n   \n  </div>\n</div>\n  \n  <!-- Main area  -->\n  <div class=\"mainarea container\">\n  <div class=\"row container text-center candc justify-content-center\">\n    <div class=\"col\" style=\"border-bottom: 4px solid #222222\">\n      <img src=\"assets/icons/courses.svg\" alt=\"Courses\" />\n      <strong>4</strong> Courses\n    </div>\n    <div class=\"col\">\n      <img src=\"assets/icons/classes.svg\" alt=\"\" />\n      <strong>4</strong> Classes\n    </div>\n  </div>\n  <div class=\"row d-flex flex-row\">\n    <div class=\"col show1\">Showing 4 of 4 courses</div>\n    <div class=\"col sort1 d-flex ms-auto text-end justify-content-end\">\n      <div class=\"show1\">Sort by:</div>\n      <select name=\"cname\" >\n        <option value=\"\">Course Name</option>\n      </select>\n    </div>\n  </div>\n  <hr />\n  <div class=\"container-fluid\">\n    \n    <div class=\"row\">\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Acceleration</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Physics | Grade 7+2</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 4 </strong> Units <strong>18</strong> lessons <strong>24</strong> Topics</p> </div>\n          <div class=\"row\"> \n          <select name=\"tname\"  class=\"selectincourse\">\n            <option value=\"\" >Mr Frank's Class B</option>\n          </select>\n        </div>\n          <div class=\"row\"><p class=\"show1\">50 Students | 21-Jan-2020 -  21-Aug-2020</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-1.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Displacement,Velocity and Speed</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Physics 2 | Grade 6+3</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 2 </strong> Units <strong>15</strong> lessons <strong>20</strong> Topics</p> </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"No class\" disabled selected>No class</option>\n            </select>\n        </div>\n          <div class=\"row\"></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-3.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Introduction to Biology:Micro orrganisms and how they affec...</div>\n          <div class=\"row\"> <p class=\"show1\">Biology | Grade 4+1</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 5 </strong> Units <strong>16</strong> lessons <strong>22</strong> Topics</p> </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"\" >All classes</option>\n            </select> \n          </div>\n          <div class=\"row\"><p class=\"show1\">300 Students</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-2.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\" id=\"fourthcontainer\">\n          <div class=\"row \">Introduction to High School Mathematics</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Mathematics | Grade 8+3</p> </div>\n          <div class=\"row\">  </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"\" >Mr Frank's Class A</option>\n            </select></div>\n          <div class=\"row\"><p class=\"show1\">44 Students | 14-Oct-2019 -  20-Oct-2020</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  \n  <!-- footer  -->\n  <div class=\"container d-flex justify-content-center\">\n  About | Contact us\n  </div>\n  <div class=\"footer\">\n  <footer\n    class=\"d-flex justify-content-center text-nowrap mx-0 text-center flex-flow-reverse w-100\"\n  >\n    <div class=\"row\">\n      <div class=\"col my-0\">\n        <img\n          src=\"assets/icons/logo%20used%20in%20footer.svg\"\n          alt=\"footer logo\"\n          class=\"footerlogo\"\n        />\n      </div>\n      <div class=\"col my-0 text-center\">\n        Copyright &copy; 2020-2021\n        <strong>Zeus Systems Pvt. Ltd</strong> All rights reserved\n      </div>\n    </div>\n  </footer>\n  </div>\n\n\n";
var alertsdata = [
    {
        "icontype": 'dndicon.png',
        "message": 'License for Introduction to Algebra has been assigned to your school',
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": ''
    },
    {
        "icontype": 'greentick.png',
        "message": 'Lesson 3 Practice Worksheet overdue for Amy Santiago',
        "date": '15-sep-2018 ',
        "time": '5:21 pm',
        "course": 'Advanced Mathematics'
    },
    {
        "icontype": 'dndicon.png',
        "message": '23 new students created',
        "date": '14-sep-2018 ',
        "time": '1:21 pm',
        "course": ''
    },
    {
        "icontype": 'dndicon.png',
        "message": '15 submissions ready for evaluation',
        "date": '13-sep-2018 ',
        "time": '1:15 pm',
        "course": 'Basic of Algebra'
    },
    {
        "icontype": 'dndicon.png',
        "message": 'License for Basic Concepts in Geometry has been assigned to your... school',
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": ''
    },
    {
        "icontype": 'greentick.png',
        "message": 'Lesson 3 Practice Worksheet overdue for Sam Diego',
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": 'Advanced Mathematics'
    },
];
var announcementsdata = [
    {
        "Name": 'Wilson Kumar',
        "icontype": 'greentick.png',
        "message": 'No classes Will be held on 21st Nov',
        "numberoffiles": 2,
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": ''
    },
    {
        "Name": 'Samson white',
        "icontype": 'dndicon.png',
        "message": 'Guest lecture on Geometry on 20th September',
        "numberoffiles": 2,
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": ''
    },
    {
        "Name": 'Wilson Kumar',
        "icontype": 'greentick.png',
        "message": 'Additional course materials available on request',
        "numberoffiles": 0,
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": 'Mathematics 101'
    },
    {
        "Name": 'Wilson Kumar',
        "icontype": 'dndicon.png',
        "message": 'No classes Will be held on 25th Dec',
        "numberoffiles": 0,
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": ''
    },
    {
        "Name": 'Wilson Kumar',
        "icontype": 'dndicon.png',
        "message": 'Additional course materials available on request',
        "numberoffiles": 0,
        "date": '15-sep-2018 ',
        "time": '7:21 pm',
        "course": 'Mathematics 101'
    },
];
mainBody.innerHTML = markup;
//Query  select
var hammenu = document.querySelector(".hamburgermenu");
var subnav = document.querySelector(".subnav");
var ann = document.querySelector('.ann');
var annav = document.querySelector('.announcenav');
var al = document.querySelector('.al');
var alnav = document.querySelector('.alertnav');
var acc = document.getElementsByClassName("accordion");
var allann = document.querySelector('.allann');
var allann1 = document.querySelector('.allann1');
//accordion
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var _this = this;
        this.classList.toggle("act");
        var panel = this.nextElementSibling;
        setTimeout(function () {
            _this.classList.toggle("act");
            if (panel.style.maxHeight === '23px') {
                panel.style.maxHeight = 0;
            }
        }, 5000);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// Events
hammenu.addEventListener('mouseover', function () {
    subnav.style.display = 'block';
    subnav.style.transition = "all 2s";
    alnav.style.display = 'none';
    annav.style.display = 'none';
}, false);
subnav.addEventListener('mouseover', function () {
    subnav.style.display = 'block';
}, false);
subnav.addEventListener('mouseout', function () {
    subnav.style.display = 'none';
}, false);
ann.addEventListener('mouseover', function () {
    annav.style.display = 'block';
    subnav.style.display = 'none';
    alnav.style.display = 'none';
}, false);
annav.addEventListener('mouseover', function () {
    annav.style.display = 'block';
}, false);
annav.addEventListener('mouseout', function () {
    annav.style.display = 'none';
}, false);
al.addEventListener('mouseover', function () {
    alnav.style.display = 'block';
    subnav.style.display = 'none';
    annav.style.display = 'none';
}, false);
alnav.addEventListener('mouseover', function () {
    alnav.style.display = 'block';
}, false);
alnav.addEventListener('mouseout', function () {
    alnav.style.display = 'none';
}, false);
//innerHTML
var a1 = '';
announcementsdata.forEach(function (adata) {
    a1 += "\n  <div class=\"anncard ".concat(adata.icontype === 'dndicon.png' ? 'dndicon' : '', "\" >\n  <div class=\"headingofcard\">\n    <span>PA:</span> ").concat(adata.Name, " <span><img src=\"assets/icons/").concat(adata.icontype, "\" alt=\"tick\"></span><br>\n  </div>\n  <div class=\"dataofcard\">\n    <span>").concat(adata.message, "</span><br>\n    ").concat(adata.course ? '<span class="course">Course: ' + adata.course + '</span>' : '', "\n  </div>\n  <div class=\"footerofcard\">\n    ").concat(adata.numberoffiles > 0 ? '<span><img src="assets/icons/paperclip.svg" alt="clipicon"></span>' + adata.numberoffiles + ' files are attached' : '', "  &nbsp;&nbsp;&nbsp;&nbsp;<span class=\"datetime\">").concat(adata.date, " at ").concat(adata.time, "</span>\n  </div>\n  </div>\n  <hr>\n  ");
    allann.innerHTML = a1;
});
var a2 = '';
alertsdata.forEach(function (adata) {
    a2 += "\n  <div class=\"anncard ".concat(adata.icontype === 'dndicon.png' ? 'dndicon' : '', "\" >\n  <div class=\"dataofcard\">\n    <span>").concat(adata.message, "</span><img src=\"assets/icons/").concat(adata.icontype, "\" alt=\"tick\"></span><br><br>\n    ").concat(adata.course ? '<span class="course">Course: ' + adata.course + '</span>' : '', "\n  </div>\n  <div class=\"footerofcard\">\n     <span class=\"datetime\">").concat(adata.date, " at ").concat(adata.time, "</span>\n  </div>\n  </div>\n  <hr>\n  ");
    console.log(a2);
    allann1.innerHTML = a2;
});
//# sourceMappingURL=dash.js.map