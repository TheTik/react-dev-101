import React, {useEffect} from 'react'

const WebAppFooter = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="footer-content">
        <span className="bigger-120">
          <span className="blue bolder">Ace</span>
          Application &copy; 2013-2014
        </span>

        &nbsp; &nbsp;
        <span className="action-buttons">
          <a href="#">
            <i className="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
          </a>

          <a href="#">
            <i className="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
          </a>

          <a href="#">
            <i className="ace-icon fa fa-rss-square orange bigger-150"></i>
          </a>
        </span>
      </div>
    </>
  )
}

export default WebAppFooter