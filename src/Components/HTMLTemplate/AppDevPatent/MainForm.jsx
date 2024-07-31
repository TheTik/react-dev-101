import React from 'react'

const MainForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-xs-12">
                    <div className="row" style={{ height:"00px"}} >

                        {/* <!-- right col --> */}
                        <div className="col-sm-6">


                            <div className="row">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="col-sm-2 control-label myLabel">Text 1</label>

                                        <div className="col-sm-10">
                                            <div className="clearfix">
                                                <input type="text" className="form-control input-sm valid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="col-sm-2 control-label myLabel">Text 2</label>

                                        <div className="col-sm-10">
                                            <div className="clearfix">
                                                <input type="text" className="form-control input-sm valid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="col-sm-2 control-label myLabel">Text 3</label>

                                        <div className="col-sm-10">
                                            <div className="clearfix">
                                                <input type="text" className="form-control input-sm valid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="col-sm-2 control-label myLabel">Text 4</label>

                                        <div className="col-sm-10">
                                            <div className="clearfix">
                                                <input type="text" className="form-control input-sm valid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="col-sm-2 control-label myLabel">Text 5</label>

                                        <div className="col-sm-10">
                                            <div className="clearfix" style={{ paddingTop:"5px" }} >
                                                <label>
                                                    <input type="checkbox" name="" className="ace ace-switch ace-switch-4 btn-rotate" data-bind="checked: EditIsActive" />
                                                    <span className="lbl"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- left col --> */}
                        <div className="col-sm-6">

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainForm