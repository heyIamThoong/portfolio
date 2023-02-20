import menu from "../data/ index"
import Navigo from "navigo"
const Header = () => {
  return `
  <header class="tf-header"  >
      <nav style= "background-color :	#454545 ;  " class="navbar py- navbar-dark">
        <div class="container">
          <h1><a class="navbar-brand" href="/">dev<span style="color : #FF3333">lethanhthong</span></a></h1>
          <div id="navbar">
            <ul class="nav pull-right">
            ${menu?.map((index) => ` <li  class="nav-item"><a data-navigo class="nav-link" id="nav" href="${index.link}">${index.name}</a></li>`).join("")}
            <li class="nav-item"><a data-navigo class="nav-link" id="nav" href="/admin/login">Admin</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-11">
            <h2 ">Hello,I'm 
            <br>Lê Thành Thông!</h2>
            <h4 >Một chút về tôi ! </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <p class="mt-4" style="font-weight : bold ;font-size : 18px">
          <span style="color: #00FF00 ;">Hiện tại</span>, mình đang là sinh viên kì 4 tại trường <span style="color: #FF3333 ; "> FPT Poltechnic </span>. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học.<span style="color: #00FF00 ; "> Ngoài việc học tập trên trường</span> thì mình thường xuyên học thêm trên <span style="color: #FF3333 ; ">F8 Fullstack</span> và trên các kênh <span style="color: #FF3333 ; "> Youtube </span>....</p>
            <p class="mt-4">Học vấn : FPT Polytechnic<br>Quê quán : Ninh Bình<br>Website : https://phuy.vercel.app<br>Tình trạng : Độc Thân </p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3 col-sm-12"><a class="tf-header-heading-btn a btn btn-primary btn-block mt-1" href="https://drive.google.com/file/d/1Ix8xJXO_DlvC9_DpmmZNsLaTBOSF70Yj/view">My Resume</a></div>
        </div>
        <div ><img style="width : 450px ;height : 420px; position : relative ; left :700px ; bottom : 460px ; border-radius : 75px" src="images/12345.jpeg"></div>
      </div>
    </header>`
}

export default Header