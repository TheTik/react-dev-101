import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";

import 'datatables.net-dt/css/dataTables.dataTables.css';

import 'datatables.net-responsive-dt';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

export function ReactDataTables({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);
  const {data, columns, pageLength, lengthMenu, processing, serverSide} = props;

  useEffect(() => {
    
    //const dt = new DataTables(tableRef.current!, props);
    //const dt = new DataTables(tableRef.current!, {...props});

    const dt = new DataTables(tableRef.current!, {
      data: data,
      columns: columns,
      pageLength: pageLength,
      lengthMenu: lengthMenu,   
      
      //infoEmpty: 'Data not found...',   
      //ajax: {
      //  url: "Home/GetEmployeeList",
      //  type: "POST",
      //},
      processing: processing,   
      serverSide: serverSide,

      responsive: true,    
      columnDefs: [                   
                    { orderable: false, targets: [0,1] },
                    { responsivePriority: 0, targets: 0 },
                    { responsivePriority: 1, targets: 1 }
                 ]
     });
     
     dt.on('page.dt', function(e, settings) {
       var currentPage = settings._iDisplayStart / settings._iDisplayLength + 1;
       console.log('Current page:', currentPage);
     });
 
    return () => {
      dt.destroy();
    };
  }, []);

  return <>
          <table ref={tableRef} className="table table-striped table-bordered table-hover display nowrap" style={{width:"100%"}}></table>
        </>;
}

export default ReactDataTables;