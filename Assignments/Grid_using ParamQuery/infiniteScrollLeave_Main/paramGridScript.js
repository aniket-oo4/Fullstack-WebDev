
      async function getToken() {
        const tokenUrl = "http://localhost:53842/api/TokenGenerator/";
        const payload = `{"username":"aniket","password":"password","role":"aniket"}`;

        try {
          const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: payload,
          });

          if (!response.ok) {
            throw new Error("Failed to get token");
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error getting token:", error);
          return null;
        }
      }

      $(function () {
        var myToken;
        getToken().then((result) => {
          myToken = result;

          var demoData = fetchData(0, 10);
          //  ---- Grid Implementation--
          var obj = {
            numberCell: {
              resizable: true,
              title: "#",
              width: 30,
              minWidth: 30,
            },
            //   editor: {type: 'textbox'},
            title: "Employees Leave Applications",
            resizable: true,
            menuIcon: true,
            scrollModel: {
              autoFit: true,
              virtualY: true,
            },
            //  width: "80%"
          };

          //array of columns.
          obj.colModel = [
            {
              title: "Leave ID",
              width: 100,
              dataType: "integer",
              dataIndx: "leaveId",
            },
            {
              title: "Employee Name",
              width: 200,
              dataType: "string",
              dataIndx: "empName",
            },
            {
              title: "Employee ID",
              width: 170,
              dataType: "string",
              dataIndx: "empId",
            },
            {
              title: "Leave Type",
              width: 170,
              dataType: "string",
              dataIndx: "leaveType",
            },
            {
              title: "Application Date",
              width: 170,
              dataType: "date",
              dataIndx: "applicationDate",
            },
            {
              title: "Start Date",
              width: 170,
              dataType: "date",
              dataIndx: "leaveDateFrom",
            },
            {
              title: "End Date",
              width: 170,
              dataType: "date",
              dataIndx: "leaveDateTo",
            },
            {
              title: "Reason",
              width: 170,
              dataType: "string",
              dataIndx: "remark",
            },
          ];
          // obj.dataModel = { data: data };
          obj.dataModel = { data: demoData };
	  obj.groupModel={on:true}
          obj.toolbar = {
            items: [
              {
                type: "button",
                icon: "ui-icon-disk",
                label: "Export to Excel",
                listener: exportToExcel,
              },
            ],
          };

          //function for exporting data
          function exportToExcel() {
            var grid = $("#grid_json").pqGrid("option", "dataModel").data;
            var ws = XLSX.utils.json_to_sheet(grid); // Convert JSON to a sheet
            var wb = XLSX.utils.book_new(); // Create a new workbook
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Append the sheet to the workbook
            XLSX.writeFile(wb, "export.xlsx"); // Write the workbook to a file
          }
          $("#grid_json").pqGrid(obj);

          setupInfiniteScroll();

          // run API_PRactice\ApiForParamGrid\LeaveApplicationAPI\bin\LeaveApplicationAPI.dll
          var totalRecords;
          function fetchData(page, pageSize) {
            var start = page * pageSize;
            // debugger;
            var end = start + pageSize;
            var data;
            $.ajax({
              async: false, //it is needed to acces the api data outside the ajax
              type: "GET",
              headers: { Authorization: "Bearer " + myToken },
              url: `http://localhost:53842/api/LeaveApi?start=${page}&size=${pageSize}`,
              success: function (leaves) {
                // debugger;
                data = leaves.Data;
                // console.log(leaves);
                totalRecords = leaves.totalRecords;
                //  debugger;
                return data;
              },
            });

            //    debugger;
            return data;
          }

          function setupInfiniteScroll() {
            var page = 1; // Current page
            var pageSize = 10; // Number of records per page
            var loading = false;
            // Event handler for scrolling
            // $("#grid_json").on("scroll ", Bind); // onscroll event closed

            $(".pq-cont-right").scroll(Bind);
            function Bind() {
              var scrollTop = $(this).scrollTop();
              var scrollHeight = $(this)[0].scrollHeight;
              var clientHeight = $(this)[0].clientHeight;
             
              if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
                loading = true; // Set loading to true to prevent multiple requests

                // Fetch new data and append it to the grid
                console.log(obj.dataModel.data.length, "total:", totalRecords);
                var newData;
                if (obj.dataModel.data.length < totalRecords) {
                  newData = fetchData(page, pageSize);
                } else {
                  newData = [];
                }

                // console.log(newData);
                if (newData.length > 0) {
                  console.log(newData);
                  var grid = $("#grid_json").pqGrid("option");
                  var dataModel = obj.dataModel;
                  console.log(typeof dataModel);
                  // Append new data to the grid
                  dataModel.data = dataModel.data.concat(newData); //adding new data to existing

                  $("#grid_json").pqGrid(
                    "option",
                    "dataModel.data",
                    dataModel.data
                  );
                  $("#grid_json").pqGrid("refreshDataAndView");

                  page++;
                }
                loading = false;
              }
            } //BindClosed
          } //setupInfinitescroll closed
          //success closing
        }); //get token closed
      }); //document load
   