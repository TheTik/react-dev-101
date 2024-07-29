import React, { useEffect } from 'react'
import $ from "jquery";
window.jQuery = $;

const Setting = () => {

    useEffect(() => {

    }, []);

    function handleClickSettingsBtn(e) {
        e.preventDefault();

        $(this).toggleClass('open');
        $('#ace-settings-box').toggleClass('open');
    };

    return (
        <>
            {/* <!-- #section:settings.box --> */}
            <div className="ace-settings-container" id="ace-settings-container">
                <div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn" onClick={handleClickSettingsBtn} >
                    <i className="ace-icon fa fa-cog bigger-130"></i>
                </div>

                <div className="ace-settings-box clearfix" id="ace-settings-box">
                    <div className="pull-left width-50">
                        {/* <!-- #section:settings.skins --> */}
                        <div className="ace-settings-item">
                            <div className="pull-left">
                                <select id="skin-colorpicker" className="hide">
                                    <option data-skin="no-skin" value="#438EB9">#438EB9</option>
                                    <option data-skin="skin-1" value="#222A2D">#222A2D</option>
                                    <option data-skin="skin-2" value="#C6487E">#C6487E</option>
                                    <option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
                                </select>
                            </div>
                            <span>&nbsp; Choose Skin</span>
                        </div>

                        {/* <!-- /section:settings.skins --> */}

                        {/* <!-- #section:settings.navbar --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-navbar" />
                            <label className="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
                        </div>

                        {/* <!-- /section:settings.navbar --> */}

                        {/* <!-- #section:settings.sidebar --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-sidebar" />
                            <label className="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
                        </div>

                        {/* <!-- /section:settings.sidebar --> */}

                        {/* <!-- #section:settings.breadcrumbs --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
                            <label className="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
                        </div>

                        {/* <!-- /section:settings.breadcrumbs --> */}

                        {/* <!-- #section:settings.rtl --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl" />
                            <label className="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
                        </div>

                        {/* <!-- /section:settings.rtl --> */}

                        {/* <!-- #section:settings.container --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-add-container" />
                            <label className="lbl" for="ace-settings-add-container">
                                Inside
                                <b>.container</b>
                            </label>
                        </div>

                        {/* <!-- /section:settings.container --> */}
                    </div>
                    {/* <!-- /.pull-left --> */}

                    <div className="pull-left width-50">
                        {/* <!-- #section:basics/sidebar.options --> */}
                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-hover" />
                            <label className="lbl" for="ace-settings-hover"> Submenu on Hover</label>
                        </div>

                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-compact" />
                            <label className="lbl" for="ace-settings-compact"> Compact Sidebar</label>
                        </div>

                        <div className="ace-settings-item">
                            <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-highlight" />
                            <label className="lbl" for="ace-settings-highlight"> Alt. Active Item</label>
                        </div>

                        {/* <!-- /section:basics/sidebar.options --> */}
                    </div>
                    {/* <!-- /.pull-left --> */}
                </div>
                {/* <!-- /.ace-settings-box --> */}
            </div>
            {/* <!-- /.ace-settings-container --> */}
        </>
    )
}

export default Setting