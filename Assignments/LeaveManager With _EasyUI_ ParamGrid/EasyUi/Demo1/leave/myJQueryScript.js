async function getToken() {
    const tokenUrl = 'http://localhost:53842/api/TokenGenerator/';
    const payload = `{"username":"aniket","password":"password","role":"aniket"}`;

    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        });

        if (!response.ok) {
            throw new Error('Failed to get token');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
}


// A $( document ).ready() block.
$(document).ready(Handlers);

// run \API_PRactice\ApiForParamGrid\LeaveApplicationAPI\bin\LeaveApplicationAPI.dll

async function Handlers() {
    
    var token = await getToken();
    auth = { headers: { 'Authorization': 'Bearer ' + token } }
    const apiBaseUrl= 'http://localhost:53842/api/LeaveApi';
loadApplications();
//GetAll
function loadApplications() {

    $.ajax({
        type: "GET",
        headers: { Authorization: "Bearer " + token },
        url: `${apiBaseUrl}`,
        datatype: "json",
        success: function (data) {
          var returnMsg = "";
          if (data.IsSuccess != true) {
            alert(data.ErrorList);          
          } else {
            var applications = data;
            const applicationsTableBody =$('#applicationsTable tbody')[0];
            // console.log(applicationsTableBody);
            applicationsTableBody.innerHTML=''; // Clear existing rows
            applications.Data.forEach((application, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${index + 1}</td>
                <td>${application.leaveId}</td>
                <td>${application.empName}</td>
                <td>${application.empId}</td>
                <td>${application.leaveType}</td>
                <td>${application.leaveDateFrom}</td>
                <td>${application.leaveDateTo}</td>
                <td>${application.status}</td>
                <td>
                    <button class="btn btn-primary btn-sm me-2 update-btn" data-id="${application.leaveId}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm delete-btn" data-id="${application.leaveId}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
                applicationsTableBody.appendChild(row);
            });

            // Bind update and delete buttons
            bindActionButtons();
          
        }
    },
  });  //load all call 
} //loadApplications func closed


//binding update and delete buttons to table
    // Bind  buttons (Update & Delete)
    function bindActionButtons() {
        // Array.from( $('.update-btn'))
        Array.from( $('.update-btn')).forEach(button => {
            button.addEventListener('click', function () {
                const applicationId = this.getAttribute('data-id');                          
                $.ajax({
                    type: "GET",
                    headers: { Authorization: "Bearer " + token },
                    url:`${apiBaseUrl}/${applicationId}`,
                    datatype: "json",
                    success: function (application) {                        
                        console.log(application.Data.empId);
                      $('#updateEmployeeID').val(application.Data.empId) ;
                        $('#updateEmployeeName').val(application.Data.empName)  ;
                        $('#updateLeaveType').val(application.Data.leaveType)  ;
                        // date conversion to set 
                        var dt = new Date(application.Data.leaveDateFrom);
                        var day = ("0" + dt.getDate()).slice(-2);
                        var month = ("0" + (dt.getMonth() + 1)).slice(-2);
                        var date = dt.getFullYear() + "-" + month + "-" + day;
                        $('#updateStartDate').val(date)  ;

                        dt = new Date(application.Data.leaveDateTo);
                        day = ("0" + dt.getDate()).slice(-2);
                        month = ("0" + (dt.getMonth() + 1)).slice(-2);
                        date = dt.getFullYear() + "-" + month + "-" + day;
                        $('#updateEndDate').val(date);

                        $('#updateReason').val(application.Data.remark)  ;
                      
                        // Show update modal
                        const updateModal = new bootstrap.Modal($('#updateModal')[0]);
                        updateModal.show();

                        // update Application
                        $('#updateApplicationForm')[0].onsubmit = function (event) {
                            event.preventDefault();
                            const updatedApplication = {
                                employeeName: $('#updateEmployeeName').val(),
                                // Get other updated fields
                                leaveId:application.Data.leaveId,
                                empId: $('#updateEmployeeID').val(),
                                leaveType: $('#updateLeaveType').val()  ,
                                leaveDateFrom:  $('#updateStartDate').val(),
                                leaveDateTo: $('#updateEndDate').val() ,
                                remark:  $('#updateReason').val(),
                                status: "pending"   
                            };                 
                           //update Call
                            $.ajax({
                                type: "PUT",
                                headers: {
                                            Authorization: "Bearer " + token 
                                    },
                                url:`${apiBaseUrl}/${applicationId}`,
                                datatype: "json",                                
                                data: updatedApplication ,
                                success: function (application) {
                                    // console.log(updatedApplication) 
                                // debugger
                                if (application.IsSuccess == false) { alert(application.ErrorList[0]); }
                                    else { 
                                        // alert('Application updated successfully!'); 
                                        $.toast({                                
                                            text: 'Application updated Successfully.',
                                            showHideTransition: 'slide',
                                            position: 'top-right',
                                            icon: 'success',
                                            bgColor :'green'
                                        });
                                        updateModal.hide();
                                        loadApplications();
                                    }                                                                     
                                } //success                                   

                            });//update Call                                                
                        };  //updateBtnclick
                   
                    }
                }); //fetch update data call
                
            });  //update eventlistner
        });  //foreach for update

        //delete application
        Array.from($('.delete-btn')).forEach(button => {
            button.addEventListener('click', function () {
                const applicationId = this.getAttribute('data-id');
                const confirmDeleteModal = new bootstrap.Modal($('#deleteModal')[0]);
                confirmDeleteModal.show();

                $('#confirmDelete')[0].onclick = function () {                  
                           //delete Call
                           $.ajax({
                            type: "DELETE",
                            headers: {
                                        Authorization: "Bearer " + token 
                            },
                            url:`${apiBaseUrl}/${applicationId}`,
                            datatype: "json",          
                            success: function (response) {
                              
                            debugger
                            console.log(response);
                            if (response.IsSuccess == false)
                                alert(response.ErrorList[0]);
                            else
                                // alert('Application deleted successfully!');
                                $.toast({                                
                                    text: 'Application Deleted Successfully.',
                                    showHideTransition: 'slide',
                                    position: 'top-right',
                                    icon: 'success',
                                    bgColor :'red'
                                });
                                confirmDeleteModal.hide();
                            loadApplications();                                                                
                            }                                   

                        });  //delete call                 
                    
                }; //delete onclick
            }); //delete btn binding 
        });//foreach for delete              
    }



   
//      // Add new  Leave Application
$('#addApplicationForm')[0].addEventListener('submit',function (event) {
    event.preventDefault();
    const newApplication = {
        // employeeName: document.getElementById('employeeName').value,
        empId: $('#employeeID').val(),
        leaveType: $('#leaveType').val(),
        leaveDateFrom: $('#startDate').val(),
        leaveDateTo: $('#endDate').val(),
        remark: $('#reason').val()
    };
                  //Post Call
                  $.ajax({
                    type: "POST",
                    headers: {
                                Authorization: "Bearer " + token 
                        },
                    url:`${apiBaseUrl}`,
                    datatype: "json",                                
                    data: newApplication ,
                    success: function (application) {
                        if (application.ErrorList.length > 0) {
                            alert(application.ErrorList[0]);
                        }
                        else {
                            alert(`Leave application for EmpId ${application.Data.empId} added successfully!`);
                            loadApplications();
                            resetApplication();
        
                        }
                        console.log(application);
                                                                                   
                    } //success                                   

                });//Post Call   
});  //Add new application closed 


// Search Application by ID 
$('#searchForm').on('submit', function (event) {
    event.preventDefault();
    const searchId =$('#searchInput').val();

    $.ajax({
        type: "GET",
        headers: {
                    Authorization: "Bearer " + token 
        },
        url:`${apiBaseUrl}/${searchId}`,
        datatype: "json",          
        success: function (application) {          
            console.log(application);
            const searchResult = $('#searchResult');
            if (application.IsSuccess) {
                searchResult.html( `
            <div class="card">
                <div class="card-body">
                    <h5>Employee Name: ${application.Data.empName}</h5>
                    <p>Employee ID: ${application.Data.empId}</p>
                    <p>Leave Type: ${application.Data.leaveType}</p>
                    <p>Start Date: ${application.Data.leaveDateFrom}</p>
                    <p>End Date: ${application.Data.leaveDateTo}</p>
                    <p>status: ${application.Data.status}</p>
                </div>
            </div>
        `);
            }
            else {
                alert(application.ErrorList);
            }                                                               
        } //search Success                                  
    }); //search ajax
}); //search by id 

//------------------

 //  refresh the application list 
 $("#refreshTable").on("click",refresh);
 function refresh(){
     loadApplications();
 }

}// Handlers();



//helper methods
//---helper methods 
function resetApplication(){
$('#employeeName')[0].value="";
$('#employeeID')[0].value="";
$('#leaveType')[0].value="";
$('#startDate')[0].value=""
$('#endDate')[0].value=""
$('#reason')[0].value=""

}


     


