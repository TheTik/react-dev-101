import React from 'react'

const FilterForm = () => {
    return (
        <>

            {/* <!-- #section:custom/widget-box --> */}
            <div className="widget-box ui-sortable-handle">
                <div className="widget-header widget-header-small">
                    <h5 className="widget-title"> <i className="fa fa-filter"></i> Filter</h5>

                    {/* <!-- #section:custom/widget-box.toolbar --> */}
                    <div className="widget-toolbar">
                        <a href="#" data-action="collapse">
                            <i className="ace-icon fa fa-chevron-up"></i>
                        </a>
                    </div>

                    {/* <!-- /section:custom/widget-box.toolbar --> */}
                </div>

                <div className="widget-body">
                    <div className="widget-main">

                        <div className="row">
                            <div className="form-group">

                                <div className="auto-width-m col col-sm-12">

                                    <div className="col-sm-6" style={{ paddingLeft:"0px", paddingRight:"0px" }} >
                                        <div className="col-sm-4 myLabel2">
                                            <label className="myLabelFont">Text 1</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="clearfix">

                                                <input type="text" className="form-control input-sm valid" />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6" style={{ paddingLeft:"0px", paddingRight:"0px" }} >

                                        <div className="col-sm-4 myLabel2">
                                            <label className="myLabelFont">Text 2</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="clearfix">

                                                <input type="text" className="form-control input-sm valid" />

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <!-- /.row --> */}

                    </div>
                </div>
            </div>
            {/* <!-- /section:custom/widget-box --> */}
        </>
    )
}

export default FilterForm