import React, {useEffect} from 'react'

//import '${process.env.PUBLIC_URL}/assets/css/ace.css'

import $ from "jquery";
window.jQuery = $; 

const Menu = () => {

    useEffect(() => {
        try{ace.settings.check('main-container' , 'fixed')}catch(e){ console.log(e); } // section:basics/navbar.layout
        try{ace.settings.check('sidebar' , 'fixed')}catch(e){ console.log(e); } // #section:basics/sidebar
        try{ace.settings.check('sidebar' , 'collapsed')}catch(e){ console.log(e); } // section:basics/sidebar.layout.minimize
      }, []);

    return (
        <>

            {/* <!-- #section:basics/sidebar --> margin: 2px; */}
            <div id="sidebar" className="sidebar                  responsive">


                <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                    <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large" >
                        <button className="btn btn-success" style={{margin:"2px"}} >
                            <i className="ace-icon fa fa-signal"></i>
                        </button>

                        <button className="btn btn-info" style={{margin:"2px"}}>
                            <i className="ace-icon fa fa-pencil"></i>
                        </button>

                        {/* <!-- #section:basics/sidebar.layout.shortcuts --> */}
                        <button className="btn btn-warning" style={{margin:"2px"}} >
                            <i className="ace-icon fa fa-users"></i>
                        </button>

                        <button className="btn btn-danger" style={{margin:"2px"}} >
                            <i className="ace-icon fa fa-cogs"></i>
                        </button>

                        {/* <!-- /section:basics/sidebar.layout.shortcuts --> */}
                    </div>

                    <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                        <span className="btn btn-success"></span>

                        <span className="btn btn-info"></span>

                        <span className="btn btn-warning"></span>

                        <span className="btn btn-danger"></span>
                    </div>
                </div>
                {/* <!-- /.sidebar-shortcuts --> */}

                <ul className="nav nav-list">
                    <li className="">
                        <a data-url="page/index" href="#page/index">
                            <i className="menu-icon fa fa-tachometer"></i>
                            <span className="menu-text"> Dashboard </span>
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-desktop"></i>
                            <span className="menu-text">
                                UI &amp; Elements
                            </span>

                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a data-url="page/typography" href="#page/typography">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Typography
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/elements" href="#page/elements">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Elements
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/buttons" href="#page/buttons">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Buttons &amp; Icons
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/content-slider" href="#page/content-slider">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Content Sliders
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/treeview" href="#page/treeview">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Treeview
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/nestable-list" href="#page/nestable-list">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Nestable Lists
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a href="#" className="dropdown-toggle">
                                    <i className="menu-icon fa fa-caret-right"></i>

                                    Three Level Menu
                                    <b className="arrow fa fa-angle-down"></b>
                                </a>

                                <b className="arrow"></b>

                                <ul className="submenu">
                                    <li className="">
                                        <a href="#">
                                            <i className="menu-icon fa fa-leaf green"></i>
                                            Item #1
                                        </a>

                                        <b className="arrow"></b>
                                    </li>

                                    <li className="">
                                        <a href="#" className="dropdown-toggle">
                                            <i className="menu-icon fa fa-pencil orange"></i>

                                            4th level
                                            <b className="arrow fa fa-angle-down"></b>
                                        </a>

                                        <b className="arrow"></b>

                                        <ul className="submenu">
                                            <li className="">
                                                <a href="#">
                                                    <i className="menu-icon fa fa-plus purple"></i>
                                                    Add Product
                                                </a>

                                                <b className="arrow"></b>
                                            </li>

                                            <li className="">
                                                <a href="#">
                                                    <i className="menu-icon fa fa-eye pink"></i>
                                                    View Products
                                                </a>

                                                <b className="arrow"></b>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-list"></i>
                            <span className="menu-text"> Tables </span>

                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a data-url="page/tables" href="#page/tables">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Simple &amp; Dynamic
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/jqgrid" href="#page/jqgrid">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    jqGrid plugin
                                </a>

                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-pencil-square-o"></i>
                            <span className="menu-text"> Forms </span>

                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a data-url="page/form-elements" href="#page/form-elements">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Form Elements
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/form-elements-2" href="#page/form-elements-2">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Form Elements 2
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/form-wizard" href="#page/form-wizard">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Wizard &amp; Validation
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/wysiwyg" href="#page/wysiwyg">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Wysiwyg &amp; Markdown
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/dropzone" href="#page/dropzone">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Dropzone File Upload
                                </a>

                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>

                    <li className="">
                        <a data-url="page/widgets" href="#page/widgets">
                            <i className="menu-icon fa fa-list-alt"></i>
                            <span className="menu-text"> Widgets </span>
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a data-url="page/calendar" href="#page/calendar">
                            <i className="menu-icon fa fa-calendar"></i>

                            <span className="menu-text">
                                Calendar

                                {/* <!-- #section:basics/sidebar.layout.badge --> */}
                                <span className="badge badge-transparent tooltip-error" title="2 Important Events">
                                    <i className="ace-icon fa fa-exclamation-triangle red bigger-130"></i>
                                </span>

                                {/* <!-- /section:basics/sidebar.layout.badge --> */}
                            </span>
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a data-url="page/gallery" href="#page/gallery">
                            <i className="menu-icon fa fa-picture-o"></i>
                            <span className="menu-text"> Gallery </span>
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-tag"></i>
                            <span className="menu-text"> More Pages </span>

                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a data-url="page/profile" href="#page/profile">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    User Profile
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/inbox" href="#page/inbox">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Inbox
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/pricing" href="#page/pricing">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Pricing Tables
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/invoice" href="#page/invoice">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Invoice
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/timeline" href="#page/timeline">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Timeline
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/email" href="#page/email">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Email Templates
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/login" href="../login.html">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Login &amp; Register
                                </a>

                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-file-o"></i>

                            <span className="menu-text">
                                Other Pages

                                {/* <!-- #section:basics/sidebar.layout.badge --> */}
                                <span className="badge badge-primary">5</span>

                                {/* <!-- /section:basics/sidebar.layout.badge --> */}
                            </span>

                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a data-url="page/faq" href="#page/faq">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    FAQ
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/error-404" href="#page/error-404">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Error 404
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/error-500" href="#page/error-500">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Error 500
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/grid" href="#page/grid">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Grid
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a data-url="page/blank" href="#page/blank">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Blank Page
                                </a>

                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* <!-- /.nav-list --> */}


                {/* <!-- #section:basics/sidebar.layout.minimize --> */}
                <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                    <i className="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
                </div>
                {/* <!-- /section:basics/sidebar.layout.minimize --> */}

            </div>

        </>
    )
}

export default Menu