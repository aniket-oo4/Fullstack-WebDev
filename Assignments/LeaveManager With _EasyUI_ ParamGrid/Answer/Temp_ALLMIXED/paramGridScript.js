
var myToken,token;
$(document).ajaxComplete(()=>
{
  document.cookie=token;
})

myToken=document.cookie.split(";")[0];
console.log(myToken);

async function getToken() {
  const tokenUrl = "http://localhost:53842/api/TokenGenerator/";
  const payload = `{"username":"aniket","password":"password","role":"aniket"}`;

  try {
    var  response= await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    if (!response.ok) {
      throw new Error("Failed to get token");
    }

     token = await response.json();
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
}
loadDocument();
 function loadDocument() {
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
    obj.dataModel = { data: demoData };

    obj.selectionModel = { type: 'row' }; //,mode:'single'
    obj.rowSelect = function (evt, ui) {
         myrowData=ui.addList[0].rowData;
      
    }// rowSelect event
obj.groupModel={on:true}
    obj.toolbar = {
      items: [
        {
          type: "button",
          icon: "ui-icon-disk",
          label: "Export to Excel",
          listener: exportToExcel,
        },
        {
          type: "button",
          icon: "ui-icon-disk",
          label: "Add Application",
          listener: addEasy,
        },
        {
          type: "button",
          icon: "ui-icon-disk",
          label: "Update Selected",
          listener: UpdateEasy,//update
        },
        {
          type: "button",
          icon: "ui-icon-disk",
          label: "Remove Selected",
          listener: removeEasy, //remove
        }

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

    function fetchData(page, pageSize) {
      // var start = page * pageSize;
      // // debugger;
      // var end = start + pageSize;
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
   
      return data;
    }
    var totalRecords;
    var page = 1; // Current page
    var pageSize = 10; // Number of records per page
    function setupInfiniteScroll() {

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

          var newData;
          if (obj.dataModel.data.length < totalRecords) {
            newData = fetchData(page, pageSize);
          } else {
            newData = [];
          }
          // console.log(newData);
          if (newData.length > 0) {
            console.log(obj.dataModel.data.length, "total:", totalRecords);
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


    var apiBaseUrl = 'http://localhost:53842/api/LeaveApi';

//--AddEAsy 
function addEasy() {
  // Show update modal
  $("#btnAdd").show();
  $("#btnUpdate").hide();
  $('#dlg').dialog('open').dialog('center').dialog('setTitle', 'Add Application');
  $('#fm').form('clear');

  $('#btnAdd').unbind('click'); //unbind () removes specific event from that element 
  $('#btnAdd').click (addApplication);
  $('#_easyui_textbox_input1').removeAttr('disabled');
  $('#_easyui_textbox_input2').removeAttr('disabled');
  $('#_easyui_textbox_input3').removeAttr('disabled');
}

function  addApplication() {

  // event.preventDefault();
  const newApplication = {
    empId: $('#_easyui_textbox_input1').val(),
    employeeName: $('#_easyui_textbox_input2').val(),
    leaveType: $('#_easyui_textbox_input4').val(),
    leaveDateFrom: $('#_easyui_textbox_input5').val(),
    leaveDateTo: $('#_easyui_textbox_input6').val(),
    remark: $('#_easyui_textbox_input3').val(),
    status: "pending"
  };
  //ADD Call
  debugger;
  $.ajax({
    type: "POST",
    headers: {
      Authorization: "Bearer " + myToken
    },
    url: `${apiBaseUrl}`,
    datatype: "json",
    data: newApplication,
    success: function (leave) {
      if (leave.IsSuccess === false) {
        alert(leave.ErrorList[0]);           
        console.log(leave);
       }
      else {           
        console.log(leave);
        $('#dlg').dialog('close');
        $.toast({
          text: 'Application Added  Successfully.',
          showHideTransition: 'slide',
          position: 'top-right',
          icon: 'success',
          bgColor: 'green'
        });                
          // let mydata=fetchData(0,10);
          // $("#grid_json").options('dataModel.data',mydata);
          //   page = 1;
          //   $("#grid_json").pqGrid("refreshDataAndView");
          obj.dataModel.data = fetchData(0, 10);
          console.log(obj.dataModel.data.length);
          page = 1;//set page start to Default;      
          // Refresh the grid to apply the changes
          $("#grid_json").pqGrid("refreshDataAndView");
 
      }
    } //success                                   
  });//Add ajax                                                
} 
//-----------


    //--function for delete
    async function remove() {
      var ids = this.SelectRow().getSelection().map(function (rowList) {
        return rowList.rowData.leaveId;
      })
      if (ids.length > 1) {
        alert("'only one  row is allowed to update'");
      }
      else if (ids.length < 1) {
        alert("'select Atleast one '");
      }
      else {
        const applicationId = ids;
        const confirmDeleteModal = new bootstrap.Modal($('#deleteModal')[0]);
        confirmDeleteModal.show();
        $('#confirmDelete')[0].onclick = function () {
          //delete Call
          $.ajax({
            type: "DELETE",
            headers: {
              Authorization: "Bearer " + myToken
            },
            url: `${apiBaseUrl}/${applicationId}`,
            datatype: "json",
            success: function (response) {
              if (response.IsSuccess == false)
                alert(response.ErrorList[0]);
              else {
                $.toast({
                  text: 'Application Deleted Successfully.',
                  showHideTransition: 'slide',
                  position: 'top-right',
                  icon: 'success',
                  bgColor: 'red'
                });
                confirmDeleteModal.hide();
                Handlers();
                obj.dataModel.data = fetchData(0, 10);
                console.log(obj.dataModel.data.length);
                page = 1;//set page start to Default;

                // Refresh the grid to apply the changes
                $("#grid_json").pqGrid("refreshDataAndView");
              }
            }
          });  //delete ajax                 
        };
      }
    }//remove()

   //remove  Easy
   async function removeEasy() {
    var row = this.SelectRow().getSelection();

    var ids = this.SelectRow().getSelection().map(function (rowList) {
      return rowList.rowData.leaveId;
    });
    if (ids.length > 1) {
      alert("'only one  row is allowed to update'");
    }
    else if (ids.length < 1) {
      alert("'select Atleast one '");
    }
    else {
      if (row) {
        $.messager.confirm('Confirm', 'Are you sure you want to remove  this Application ?', function (r) {
          console.log(r); // r is result of confirt function
          if (r) {
            const applicationId = ids;
              //delete Call
              $.ajax({
                type: "DELETE",
                headers: {
                  Authorization: "Bearer " + myToken
                },
                url: `${apiBaseUrl}/${applicationId}`,
                datatype: "json",
                success: function (response) {
                  if (response.IsSuccess == false)
                    alert(response.ErrorList[0]);
                  else {
                    $.toast({
                      text: 'Application Deleted Successfully.',
                      showHideTransition: 'slide',
                      position: 'top-right',
                      icon: 'success',
                      bgColor: 'red'
                    });
                    obj.dataModel.data = fetchData(0, 10);
                    console.log(obj.dataModel.data.length);
                    page = 1;//set page start to Default;      
                    // Refresh the grid to apply the changes
                    $("#grid_json").pqGrid("refreshDataAndView");
                  }
                }
              });  //delete ajax                         
          } 
        });//confirm()
      }
    }//else



  } //remove easy()



    //--function for update
    async function update() {
      console.log(this.SelectRow().getSelection());  //this.referes to grid
      var ids = this.SelectRow().getSelection().map(function (rowList) {
        return rowList.rowData.leaveId;
      })
      if (ids.length > 1) {
        alert("'only one  row is allowed to update'");
      }
      else if (ids.length < 1) {
        alert("'select Atleast one '");
      }
      else {
        const applicationId = ids;
        $.ajax({
          type: "GET",
          headers: { Authorization: "Bearer " + myToken },
          url: `${apiBaseUrl}/${applicationId}`,
          datatype: "json",
          success: function (application) {
            console.log(application.Data.empId);
            $('#updateEmployeeID').val(application.Data.empId);
            $('#updateEmployeeName').val(application.Data.empName);
            $('#updateLeaveType').val(application.Data.leaveType);
            // date conversion to set 
            var dt = new Date(application.Data.leaveDateFrom);
            var day = ("0" + dt.getDate()).slice(-2);
            var month = ("0" + (dt.getMonth() + 1)).slice(-2);
            var date = dt.getFullYear() + "-" + month + "-" + day;
            $('#updateStartDate').val(date);

            dt = new Date(application.Data.leaveDateTo);
            day = ("0" + dt.getDate()).slice(-2);
            month = ("0" + (dt.getMonth() + 1)).slice(-2);
            date = dt.getFullYear() + "-" + month + "-" + day;
            $('#updateEndDate').val(date);

            $('#updateReason').val(application.Data.remark);

            // Show update modal
            const updateModal = new bootstrap.Modal($('#updateModal')[0]);
            updateModal.show();


  
            // update btnclick
            $('#updateApplicationForm')[0].onsubmit = function (event) {
              event.preventDefault();
              const updatedApplication = {
                employeeName: $('#updateEmployeeName').val(),
                leaveId: application.Data.leaveId,
                empId: $('#updateEmployeeID').val(),
                leaveType: $('#updateLeaveType').val(),
                leaveDateFrom: $('#updateStartDate').val(),
                leaveDateTo: $('#updateEndDate').val(),
                remark: $('#updateReason').val(),
                status: "pending"
              };
              //update Call
              $.ajax({
                type: "PUT",
                headers: {
                  Authorization: "Bearer " + myToken
                },
                url: `${apiBaseUrl}/${applicationId}`,
                datatype: "json",
                data: updatedApplication,
                success: function (application) {
                  if (application.IsSuccess == false) { alert(application.ErrorList[0]); }
                  else {
                    $.toast({
                      text: 'Application updated Successfully.',
                      showHideTransition: 'slide',
                      position: 'top-right',
                      icon: 'success',
                      bgColor: 'green'
                    });
                    updateModal.hide();
                    Handlers();
                    obj.dataModel.data = fetchData(0, 10);
                    console.log(obj.dataModel.data.length);
                    page = 1;
                    $("#grid_json").pqGrid("refreshDataAndView");
                  }
                } //success                                   
              });//update ajax                                                
            };//updateBtnclick
          }//success
        }); //fetch update data call
      }//else
    }//update()


    //functions For EasyUi widgets :

    function UpdateEasy(event) {
      $('#btnAdd').hide()
      $("#btnUpdate").show();
      
      event.preventDefault();
      var ids=[];
       ids= this.SelectRow().getSelection().map(function (rowList) {
      return rowList.rowData.leaveId;
    })
    console.log(ids);
    if (ids.length > 1) {
      alert("'only one  row is allowed to update'");
    }
    else if (ids.length < 1) {
      alert("'select Atleast one '");
    }
    else {
      $('#fm').form('clear');
      $('#_easyui_textbox_input1').val(myrowData.empId);
      $('#_easyui_textbox_input2').val(myrowData.empName);
      $('#_easyui_textbox_input4').val(myrowData.leaveType);
      $('#_easyui_textbox_input5').val(ConvertDate(myrowData.leaveDateFrom));// date conversion to set values
      $('#_easyui_textbox_input6').val(ConvertDate(myrowData.leaveDateTo));
      $('#_easyui_textbox_input3').val(myrowData.remark);
       
      $('#_easyui_textbox_input1').attr('disabled',"disabled");
      $('#_easyui_textbox_input2').attr('disabled',"disabled");
      $('#_easyui_textbox_input3').attr('disabled',"disabled");

      // Show update modal
      $('#dlg').dialog('open').dialog('center').dialog('setTitle', 'Edit User');
      //  $('#fm').form('load', row);
      $('#btnUpdate').unbind('click');
      $('#btnUpdate').click (function (event){
        // event.preventDefault();

        console.log(event);
         myUpdate(myrowData.leaveId);
       });

     

    }//update Easy()
  }
function  myUpdate(leaveId) {
    const updatedApplication = {
      empId: $('#_easyui_textbox_input1').val(),
      employeeName: $('#_easyui_textbox_input2').val(),
      leaveId: leaveId,
      leaveType: $('#_easyui_textbox_input4').val(),
      leaveDateFrom: $('#_easyui_textbox_input5').val(),
      leaveDateTo: $('#_easyui_textbox_input6').val(),
      remark: $('#_easyui_textbox_input3').val(),
      status: "pending"
    };
    //update Call
    debugger;
    $.ajax({
      type: "PUT",
      headers: {
        Authorization: "Bearer " + myToken
      },
      url: `${apiBaseUrl}/${leaveId}`,
      datatype: "json",
      data: updatedApplication,
      success: function (leave) {
        if (leave.IsSuccess === false) {
          alert(leave.ErrorList[0]);           
          console.log(leave);
         }
        else {           
          console.log(leave);
          $('#dlg').dialog('close'); // close the dialog
          $.toast({
            text: 'Application updated Successfully.',
            showHideTransition: 'slide',
            position: 'top-right',
            icon: 'success',
            bgColor: 'green'
          });
            obj.dataModel.data = fetchData(0, 10);
            console.log(obj.dataModel.data.length);
            page = 1;//set page start to Default;      
            $("#grid_json").pqGrid("refreshDataAndView");// Refresh the grid to apply the changes
        }
      } //success                                   
    });//update ajax                                                
  } 



   //get token closed
}; //document load


//date conversion
function ConvertDate(test){
  var dt = new Date(test);
        var day = ("0" + dt.getDate()).slice(-2);
        var month = ("0" + (dt.getMonth() + 1)).slice(-2);
        var date = dt.getFullYear() + "-" + month + "-" + day;
  return date;

}

 