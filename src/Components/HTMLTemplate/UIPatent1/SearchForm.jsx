import React from 'react'

import FilterForm from './FilterForm'
import DataTable from '../../DataTable'

const SearchForm = () => {

    return (
        <>
            <div>

                {/* <!-- #section:custom/widget-box --> */}
                <div className="widget-box transparent">
                    <div className="widget-header widget-header-flat">

                        {/* <!--
                        <h4 className="widget-title lighter">
                            <i className="fa fa-filter"></i> N/A
                        </h4>
                        --> */}

                        {/* <!-- #section:custom/widget-box.toolbar --> */}
                        <div className="widget-toolbar">
                            <div className="widget-menu">
                                <a href="#" data-action="fullscreen" className="orange2">
                                    <i className="ace-icon fa fa-expand"></i>
                                </a>

                                {/* <a href="#" data-action="close" className="red2" ></a> */}
                                <a href="#" className="red2" >
                                    <i className="ace-icon fa fa-minus"></i>
                                </a>

                                <a href="#" data-action="collapse">
                                    <i className="ace-icon fa fa-chevron-up"></i>
                                </a>
                            </div>
                        </div>
                        <div className="btn-group pull-right" style={{ paddingTop: "5px" }} >
                            <div style={{ paddingRight: "5px" }} >

                                <button className="btn btn-sm btn-primary btn-white btn-round" style={{ margin: "1px" }} >
                                    <i className="ace-icon fa fa-search bigger-110 blue"></i>
                                    Search
                                </button>

                                <button id="btnDelete" name="" className="btn btn-sm btn-danger btn-white btn-round" style={{ margin: "1px" }} >
                                    <i className="ace-icon fa fa-trash-o bigger-110 danger"></i>
                                    Delete
                                </button>

                                <button id="btnDiscard" name="" className="btn btn-sm btn-grey btn-white btn-round" style={{ margin: "1px" }} >
                                    <i className="ace-icon fa fa-undo bigger-110 orange"></i>
                                    Discard
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="widget-body" style={{ display: "block" }} >
                        <div className="widget-main">

                            <FilterForm></FilterForm>

                            <div className="space-12"></div>

                            <div className="row">
                                <div className="col-xs-12">

                                    <div className="row">
                                        <div className="col-xs-12">

                                            <div className="">

                                                <DataTable/>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="space-6"></div>
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}

                        </div>
                        {/* <!-- /.widget-main --> */}
                    </div>
                    {/* <!-- /.widget-body --> */}

                </div>
                {/* <!-- /.widget-box --> */}

            </div >
        </>
    )
}

export default SearchForm