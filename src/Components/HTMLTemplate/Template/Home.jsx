import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'

import $ from "jquery";
window.jQuery = $; 

import Header from './Header'
import Menu from './Menu'
import Setting from './Setting'
import Footer from './Footer'

function Home(props) {

  useEffect(() => {
    try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){ console.log(e); } // #section:basics/content.breadcrumbs

    try{
      window.basics();
      window.enableSidebar();

      window.enableDemoAjax();
      window.handleScrollbars();

      window.dropdownAutoPos();

      window.navbarHelpers();
      window.sidebarTooltips();

      window.scrollTopBtn();

      window.someBrowserFix();

      window.bsCollapseToggle();
      window.smallDeviceDropdowns();
    }catch(e){ console.log(e); }

  }, []);

  return (
    <>
      {/* <!-- #section:basics/navbar.layout --> */}
      <div id="navbar" className="navbar navbar-default">

        <Header></Header>

        {/* <!-- /.navbar-container --> */}
      </div>

      {/* <!-- /section:basics/navbar.layout --> */}
      <div className="main-container" id="main-container">

        <Menu></Menu>

        {/* <!-- /section:basics/sidebar --> */}
        <div className="main-content">
          <div className="main-content-inner">


            {/* <!-- #section:basics/content.breadcrumbs --> */}
            <div className="breadcrumbs" id="breadcrumbs">
              <script type="text/javascript">
                try{ace.settings.check('breadcrumbs', 'fixed')}catch(e){ }
              </script>

              <ul className="breadcrumb">
                <li>
                  <i className="ace-icon fa fa-home home-icon"></i>
                  <a href="#">Home</a>
                </li>
                <li className="active">Dashboard</li>
              </ul>
              {/* <!-- /.breadcrumb --> */}

              {/* <!-- #section:basics/content.searchbox --> */}
              <div className="nav-search" id="nav-search">
                <form className="form-search">
                  <span className="input-icon">
                    <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autocomplete="off" />
                    <i className="ace-icon fa fa-search nav-search-icon"></i>
                  </span>
                </form>
              </div>
              {/* <!-- /.nav-search --> */}

              {/* <!-- /section:basics/content.searchbox --> */}
            </div>


            {/* <!-- /section:basics/content.breadcrumbs --> */}
            <div className="page-content">

              {/* <Setting></Setting> */}

              {/* <!-- /section:settings.box --> */}
              <div className="page-header">
                <h1>
                  Dashboard
                  <small>
                    <i className="ace-icon fa fa-angle-double-right"></i>
                    overview &amp; stats
                  </small>
                </h1>
              </div>
              {/* <!-- /.page-header --> */}

              <div className="row">
                <div className="col-xs-12">

                  {/* <!-- PAGE CONTENT BEGINS --> */}                 
                  {/* <!-- Default box --> */}

                  <Outlet></Outlet>

                  {/* <!-- /.box --> */}
                  {/* <!-- PAGE CONTENT ENDS --> */}

                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.row --> */}

            </div>
            {/* <!-- /.page-content --> */}
          </div>
        </div>
        {/* <!-- /.main-content --> */}

        <div className="footer">
          <div className="footer-inner">
            {/* <!-- #section:basics/footer --> */}

            <Footer></Footer>

            {/* <!-- /section:basics/footer --> */}
          </div>
        </div>

        <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
          <i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
        </a>

      </div>
      {/* <!-- /.main-container --> */}

    </>
  )
}

export default Home