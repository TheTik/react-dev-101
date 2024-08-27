
How to use ACE html template in react.
1) Copy all files from "ACE\assets" folder to "public\assets"
2) Create HTMLTemplate component
   - Components/HTMLTemplate/Template/Default.jsx
   - Components/HTMLTemplate/Template/Footer.jsx
   - Components/HTMLTemplate/Template/Header.jsx
   - Components/HTMLTemplate/Template/Home.jsx
   - Components/HTMLTemplate/Template/Menu.jsx
   - Components/HTMLTemplate/Template/Setting.jsx

rafce all files...

3)
    Implement StudentProps componet at App.jsx
    ...
    import Home from './Components/HTMLTemplate/Template/Home'
    ...
      <Home />
    ...

4) Create UI for demo [AppDevPatent]
5) Create Route into "main.jsx"
//################################################################################################# 
// ACE HTML Template
//################################################################################################# 
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

//import AppDevPatent from './Components/HTMLTemplate/AppDevPatent/Index.jsx'

import Default from './Components/HTMLTemplate/Template/Default.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Default />
      },
      // {
      //   path: "/AppDevPatent",
      //   element: <AppDevPatent />
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //   <React.StrictMode>
  <RouterProvider router={router} />
  //   </React.StrictMode>
);


6) Edit "index.html"  
---------------------------------------------------------------------------------------------------
From 
---------------------------------------------------------------------------------------------------
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite + React</title>
</head>

<body>

  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>

</body>

</html>
---------------------------------------------------------------------------------------------------
To
---------------------------------------------------------------------------------------------------
<!doctype html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta charset="utf-8" />
  <title>Welcome - Ace Admin</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

  <!--[if !IE]> -->
  <link rel="stylesheet" href="./assets/css/pace.css" />

  <script data-pace-options='{ "ajax": true, "document": true, "eventLag": false, "elements": false }'
    src="./assets/js/pace.js"></script>

  <!-- <![endif]-->

  <!-- bootstrap & fontawesome -->
  <link rel="stylesheet" href="./assets/css/bootstrap.css" />
  <link rel="stylesheet" href="./assets/css/font-awesome.css" />

  <!-- text fonts -->
  <link rel="stylesheet" href="./assets/css/ace-fonts.css" />

  <!-- ace styles -->
  <link rel="stylesheet" href="./assets/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />

  <!--[if lte IE 9]>
			<link rel="stylesheet" href="./assets/css/ace-part2.css" class="ace-main-stylesheet" />
		<![endif]-->

  <!--[if lte IE 9]>
		  <link rel="stylesheet" href="./assets/css/ace-ie.css" />
		<![endif]-->

  <!-- ace settings handler -->
  <script src="./assets/js/ace-extra.js"></script>

  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

  <!--[if lte IE 8]>
		<script src="./assets/js/html5shiv.js"></script>
		<script src="./assets/js/respond.js"></script>
		<![endif]-->

    <link rel="stylesheet" href="./assets/integration/css/integration.css" />

</head>

<body class="no-skin">

  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>

  <!-- basic scripts -->

  <!--[if !IE]> -->
  <script type="text/javascript">
    window.jQuery || document.write("<script src='./assets/js/jquery.js'>" + "<" + "/script>");
  </script>

  <!-- <![endif]-->

  <!--[if IE]>
    <script type="text/javascript">
      window.jQuery || document.write("<script src='./assets/js/jquery1x.js'>"+"<"+"/script>");
    </script>
  <![endif]-->

  <script type="text/javascript">
    if ('ontouchstart' in document.documentElement) document.write("<script src='./assets/js/jquery.mobile.custom.js'>" + "<" + "/script>");
  </script>
  <script src="./assets/js/bootstrap.js"></script>

  <!-- page specific plugin scripts -->

  <!--[if lte IE 8]>
		  <script src="../assets/js/excanvas.js"></script>
		<![endif]-->
  <script src="./assets/js/jquery-ui.custom.js"></script>
  <script src="./assets/js/jquery.ui.touch-punch.js"></script>
  <script src="./assets/js/jquery.easypiechart.js"></script>
  <script src="./assets/js/jquery.sparkline.js"></script>
  <script src="./assets/js/flot/jquery.flot.js"></script>
  <script src="./assets/js/flot/jquery.flot.pie.js"></script>
  <script src="./assets/js/flot/jquery.flot.resize.js"></script>

  <!-- ace scripts -->
  <script src="./assets/js/ace/elements.scroller.js"></script>
  <script src="./assets/js/ace/elements.colorpicker.js"></script>
  <script src="./assets/js/ace/elements.fileinput.js"></script>
  <script src="./assets/js/ace/elements.typeahead.js"></script>
  <script src="./assets/js/ace/elements.wysiwyg.js"></script>
  <script src="./assets/js/ace/elements.spinner.js"></script>
  <script src="./assets/js/ace/elements.treeview.js"></script>
  <script src="./assets/js/ace/elements.wizard.js"></script>
  <script src="./assets/js/ace/elements.aside.js"></script>
  <script src="./assets/js/ace/ace.js"></script>
  <script src="./assets/js/ace/ace.ajax-content.js"></script>
  <script src="./assets/js/ace/ace.touch-drag.js"></script>
  <script src="./assets/js/ace/ace.sidebar.js"></script>
  <script src="./assets/js/ace/ace.sidebar-scroll-1.js"></script>
  <script src="./assets/js/ace/ace.submenu-hover.js"></script>
  <script src="./assets/js/ace/ace.widget-box.js"></script>
  <script src="./assets/js/ace/ace.settings.js"></script>
  <script src="./assets/js/ace/ace.settings-rtl.js"></script>
  <script src="./assets/js/ace/ace.settings-skin.js"></script>
  <script src="./assets/js/ace/ace.widget-on-reload.js"></script>
  <script src="./assets/js/ace/ace.searchbox-autocomplete.js"></script>

  <script src="./assets/integration/js/ace.integration.js"></script>
  <script src="./assets/integration/js/setting.js"></script>
</body>

</html>

<script type="text/javascript">
  $.noConflict();
  jQuery(document).ready(function ($) {
    // try { ace.settings.check('navbar', 'fixed') } catch (e) { console.log('navbar', 'fixed', e); }
    // try { ace.settings.check('main-container', 'fixed') } catch (e) { console.log('main-container', 'fixed', e); }
    // try { ace.settings.check('sidebar', 'fixed') } catch (e) { console.log('sidebar', 'fixed', e); }
    // try { ace.settings.check('sidebar', 'collapsed') } catch (e) { console.log('sidebar', 'collapsed', e); }
    // try { ace.settings.check('breadcrumbs', 'fixed') } catch (e) { console.log('breadcrumbs', 'fixed', e); }
  });

</script>

7) Edit file "src/Components/HTMLTemplate/Template/Home.jsx"
8) อธิบาย ace.js
9) อธิบายการเปลี่ยน class เป็น className
10) อธิบายการเปลี่ยน style เป็น style={{}}

