var mainBody = document.querySelector(".mainbody");
var markup = "\n<div class=\"header\">\n  <div class=\"row h12\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"\n          ><img src=\"assets/icons/logo%20used%20in%20header.svg\" alt=\"logo\"\n        /></a>\n        <div class=\"d-flex flex-row order-2 order-lg-3 icons1\">\n          <ul class=\"navbar-nav flex-row ms-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"\n                ><img src=\"assets/icons/alerts.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"\n                ><img src=\"assets/icons/announcements.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"\n                ><img src=\"assets/icons/account_circle.svg\" alt=\"\"\n              /></a>\n            </li>\n            <li class=\"nav-item\">\n              <a>\n                <div class=\"hamburgermenu order-3\">\n                  <img src=\"assets/icons/hamburger-menu.svg\" alt=\"\">\n              </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div\n          class=\"navbar-1\"\n          id=\"navbarNav\"\n        >\n          <ul class=\"navbar-nav ms-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">DASHBOARD</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">CONTENT</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">USERS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">REPORTS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link melement\" href=\"#\">ADMIN</a>\n            </li>\n          </ul>\n        </div>\n        <!-- <div class=\"hamburgermenu order-3\">\n            <img src=\"assets/icons/hamburger-menu.svg\" alt=\"\">\n            \n        </div> -->\n      </div>\n    </nav>\n  </div>\n  <div class=\"subnav\">\n    <button class=\"accordion\">Dashboard</button>\n    <button class=\"accordion\">Content</button>\n    <div class=\"panel\">\n      Course Catalog\n    </div>\n    <button class=\"accordion\">Users</button>\n    <button class=\"accordion\">Reports</button>\n    <button class=\"accordion\">Admin</button>\n  </div>\n</div>\n  \n  <!-- Main area  -->\n  <div class=\"mainarea container\">\n  <div class=\"row container text-center candc justify-content-center\">\n    <div class=\"col\" style=\"border-bottom: 4px solid #222222\">\n      <img src=\"assets/icons/courses.svg\" alt=\"Courses\" />\n      <strong>4</strong> Courses\n    </div>\n    <div class=\"col\">\n      <img src=\"assets/icons/classes.svg\" alt=\"\" />\n      <strong>4</strong> Classes\n    </div>\n  </div>\n  <div class=\"row d-flex flex-row\">\n    <div class=\"col show1\">Showing 4 of 4 courses</div>\n    <div class=\"col sort1 d-flex ms-auto text-end justify-content-end\">\n      <div class=\"show1\">Sort by:</div>\n      <select name=\"cname\" >\n        <option value=\"\">Course Name</option>\n      </select>\n    </div>\n  </div>\n  <hr />\n  .<div class=\"container-fluid\">\n    \n    <div class=\"row\">\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Acceleration</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Physics | Grade 7+2</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 4 </strong> Units <strong>18</strong> lessons <strong>24</strong> Topics</p> </div>\n          <div class=\"row\"> \n          <select name=\"tname\"  class=\"selectincourse\">\n            <option value=\"\" >Mr Frank's Class B</option>\n          </select>\n        </div>\n          <div class=\"row\"><p class=\"show1\">50 Students | 21-Jan-2020 -  21-Aug-2020</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-1.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Displacement,Velocity and Speed</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Physics 2 | Grade 6+3</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 2 </strong> Units <strong>15</strong> lessons <strong>20</strong> Topics</p> </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"No class\" disabled selected>No class</option>\n            </select>\n        </div>\n          <div class=\"row\"></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-3.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\">\n          <div class=\"staricon\">\n            <img src=\"assets/icons/favourite.svg\" alt=\"\">\n          </div>\n          <div class=\"row \">Introduction to Biology:Micro orrganisms and how they affec...</div>\n          <div class=\"row\"> <p class=\"show1\">Biology | Grade 4+1</p> </div>\n          <div class=\"row\"> <p class=\"show1\"> <strong> 5 </strong> Units <strong>16</strong> lessons <strong>22</strong> Topics</p> </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"\" >All classes</option>\n            </select> \n          </div>\n          <div class=\"row\"><p class=\"show1\">300 Students</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col cards col-sm-12 col-md col-12\">\n        <div class=\"imgmask\">\n          <img src=\"assets/images/imageMask-2.png\" alt=\"\">\n        </div>\n        <div class=\"alldata\" id=\"fourthcontainer\">\n          <div class=\"row \">Introduction to High School Mathematics</div>\n          <div class=\"row\"> <p class=\"show1 p-0 my-1\">Mathematics | Grade 8+3</p> </div>\n          <div class=\"row\">  </div>\n          <div class=\"row\"> \n            <select name=\"tname\"  class=\"selectincourse\">\n              <option value=\"\" >Mr Frank's Class A</option>\n            </select></div>\n          <div class=\"row\"><p class=\"show1\">44 Students | 14-Oct-2019 -  20-Oct-2020</p></div>\n        </div>\n        <div class=\"foot\">\n          <hr>\n          <div class=\"row d-flex m-auto justify-content-center text-center\">\n            <div class=\"col\">\n              <img src=\"assets/icons/preview.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/manage%20course.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/grade%20submissions.svg\" alt=\"\" />\n            </div>\n            <div class=\"col\">\n              <img src=\"assets/icons/reports.svg\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  \n  <!-- footer  -->\n  <div class=\"container d-flex justify-content-center\">\n  About | Contact us\n  </div>\n  <div class=\"footer\">\n  <footer\n    class=\"d-flex justify-content-center text-nowrap mx-0 text-center flex-flow-reverse w-100\"\n  >\n    <div class=\"row\">\n      <div class=\"col my-0\">\n        <img\n          src=\"assets/icons/logo%20used%20in%20footer.svg\"\n          alt=\"footer logo\"\n          class=\"footerlogo\"\n        />\n      </div>\n      <div class=\"col my-0 text-center\">\n        Copyright &copy; 2020-2021\n        <strong>Zeus Systems Pvt. Ltd</strong> All rights reserved\n      </div>\n    </div>\n  </footer>\n  </div>\n\n\n\n";
mainBody.innerHTML = markup;
var hammenu = document.querySelector(".hamburgermenu");
var subnav = document.querySelector(".subnav");
var acc = document.getElementsByClassName("accordion");
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
hammenu.addEventListener('mouseover', function () {
    subnav.style.display = 'block';
}, false);
subnav.addEventListener('mouseover', function () {
    subnav.style.display = 'block';
}, false);
subnav.addEventListener('mouseout', function () {
    subnav.style.display = 'none';
}, false);
//# sourceMappingURL=dash.js.map