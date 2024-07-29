import React, { useEffect } from 'react'

import $ from "jquery";
window.jQuery = $; 

import MainForm from './MainForm'
import SearchForm from './SearchForm'

const Index = () => {

    useEffect(() => {

        try{
            window.InsideContainer();
        }catch(e){ console.log(e); }        

      }, []);

    return (
        <>
            <div className="widget-box transparent">
                <div className="widget-header widget-header-flat">
                    <h4 className="widget-title @*lighter*@">
                        <i className="menu-icon fa fa-pencil-square-o"></i>
                        Fileds
                    </h4>

                    <div className="widget-toolbar">
                        <a href="#" data-action="fullscreen" className="orange2">
                            <i className="ace-icon fa fa-expand"></i>
                        </a>

                        <a href="#" data-action="collapse">
                            <i className="ace-icon fa fa-chevron-up"></i>
                        </a>
                    </div>
                    <div className="btn-group pull-right" style={{ paddingTop: "5px" }}>
                        <div style={{ paddingRight: "5px" }} >
                            <button name="" className="btn btn-sm btn-primary btn-white btn-round" style={{ margin: "1px" }} >
                                <i className="ace-icon fa fa-search bigger-110 black"></i>
                                Search
                            </button>

                            <button name="" className="btn btn-sm btn-primary btn-white btn-round" style={{ margin: "1px" }} >
                                <i className="ace-icon glyphicon glyphicon-plus bigger-110 blue"></i>
                                Create
                            </button>

                            <button name="" className="btn btn-sm btn-success btn-white btn-round" style={{ margin: "1px" }} >
                                <i className="ace-icon fa fa-floppy-o bigger-110 green"></i>
                                Save
                            </button>

                            <button name="" className="btn btn-sm btn-grey btn-white btn-round" style={{ margin: "1px" }} >
                                <i className="ace-icon fa fa-refresh bigger-110 orange"></i>
                                Reset
                            </button>

                        </div>
                    </div>
                </div>

                <div className="" style={{ paddingTop: "5px", paddingBottom: "5px;" }} >

                    <div className="widget-body" style={{ display: "block" }} >
                        <div className="widget-main no-padding">

                            <div className="row">
                                <div className="col-xs-12">
                                    {/* <!-- PAGE CONTENT BEGINS --> */}

                                    <div className="form-horizontal">

                                        <MainForm></MainForm>

                                    </div>

                                    {/* <!-- PAGE CONTENT ENDS --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}

                        </div>
                        {/* <!-- /.widget-main --> */}
                    </div>
                    {/* <!-- /.widget-body --> */}

                </div>

            </div>
            {/* <!-- /.widget-box --> */}

            <div id="right-menu" className="modal aside" data-body-scroll="false" data-offset="true" data-placement="right" data-fixed="true" data-backdrop="true" tabindex="-1">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header no-padding">
                            <div className="table-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    <span className="white">&times;</span>
                                </button>
                                <i className="ace-icon fa fa-binoculars"></i> Search
                            </div>
                        </div>

                        <div className="modal-body" style={{ paddingTop:"0px" }} >

                            <SearchForm></SearchForm>

                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}

                    <button className="aside-trigger btn btn-info btn-app btn-xs ace-settings-btn" data-target="#right-menu" data-toggle="modal" type="button">
                        <i data-icon1="fa-plus" data-icon2="fa-minus" className="ace-icon fa fa-plus bigger-110 icon-only"></i>
                    </button>
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>

        </>
    )
}

export default Index