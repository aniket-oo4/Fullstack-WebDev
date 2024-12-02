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

var tkn ;
var token = { headers: { 'Authorization': 'Bearer ' + tkn } }

document.addEventListener('DOMContentLoaded', async function () {
    tkn=  await getToken();
    token = { headers: { 'Authorization': 'Bearer ' + tkn } }
    const apiBaseUrl = 'http://localhost:53842/api/LeaveApi';

    // Add new  Leave Application
    document.getElementById('addApplicationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const newApplication = {
            // employeeName: document.getElementById('employeeName').value,
            empId: document.getElementById('employeeID').value,
            leaveType: document.getElementById('leaveType').value,
            leaveDateFrom: document.getElementById('startDate').value,
            leaveDateTo: document.getElementById('endDate').value,
            remark: document.getElementById('reason').value
        };

        fetch(`${apiBaseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tkn
            },
            body: JSON.stringify(newApplication)
        })
            .then(response => response.json())
            .then(data => {

                if (data.ErrorList.length > 0) {
                    alert(data.ErrorList[0]);
                }
                else {
                    alert(`Leave application for EmpId ${data.Data.empId} added successfully!`);
                    loadApplications();
                    resetApplication();

                }
                console.log(data);
                // Optionally, refresh the application list
                document.getElementById("refreshTable").addEventListener("click",refresh);
                function refresh(){
                    loadApplications();
                }
                // loadApplications();
            })
            .catch(error => console.error('Error adding application:', error));
    });

    // Load All Applications
    function loadApplications() {
        fetch(`${apiBaseUrl}`, token)
            .then(response => response.json())
            .then(applications => {
                const applicationsTableBody = document.querySelector('#applicationsTable tbody');
                applicationsTableBody.innerHTML = ''; // Clear existing rows
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
            })
            .catch(error => console.error('Error loading applications:', error));
    }

    // Bind  buttons (Update & Delete)
    function bindActionButtons() {
        document.querySelectorAll('.update-btn').forEach(button => {
            button.addEventListener('click', function () {
                const applicationId = this.getAttribute('data-id');
               
               
                // Fetch and fill the update form
                fetch(`${apiBaseUrl}/${applicationId}`, token)
                    .then(response => response.json())
                    .then(application => {
                        console.log(application.Data.empId);
                        document.getElementById('updateEmployeeID').value = application.Data.empId;
                        document.getElementById('updateEmployeeName').value = application.Data.empName;
                        document.getElementById('updateLeaveType').value = application.Data.leaveType;
                        // date converson to set 
                        var dt = new Date(application.Data.leaveDateFrom);
                        var day = ("0" + dt.getDate()).slice(-2);
                        var month = ("0" + (dt.getMonth() + 1)).slice(-2);
                        var date = dt.getFullYear() + "-" + month + "-" + day;
                        document.getElementById('updateStartDate').value = date;

                        dt = new Date(application.Data.leaveDateTo);
                        day = ("0" + dt.getDate()).slice(-2);
                        month = ("0" + (dt.getMonth() + 1)).slice(-2);
                        date = dt.getFullYear() + "-" + month + "-" + day;
                        document.getElementById('updateEndDate').value = date;

                        document.getElementById('updateReason').value = application.Data.remark;
                        // Populate other fields similarly
                        // document.getElementById('updateLeaveType').value = application.Data.leaveType;
                        // Show update modal
                        const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
                        updateModal.show();

                        // update Application
                        document.getElementById('updateApplicationForm').onsubmit = function (event) {
                            event.preventDefault();
                            const updatedApplication = {
                                employeeName: document.getElementById('updateEmployeeName').value,
                                // Get other updated fields
                                leaveId:application.Data.leaveId,
                                empId: document.getElementById('updateEmployeeID').value,
                                leaveType: document.getElementById('updateLeaveType').value  ,
                                leaveDateFrom:  document.getElementById('updateStartDate').value,
                                leaveDateTo: document.getElementById('updateEndDate').value ,
                                remark:  document.getElementById('updateReason').value,
                                status: "pending"   
                            };

                            fetch(`${apiBaseUrl}/${applicationId}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + tkn,

                                },
                                body: JSON.stringify(updatedApplication)
                            })
                                .then(response => response.json())
                                .then(data => {

                                    if (data.IsSuccess == false) { alert(data.ErrorList[0]); }
                                    else { alert('Application updated successfully!'); }

                                    loadApplications();
                                })
                                .catch(error => console.error('Error updating application:', error));
                        };
                    })
                    .catch(error => console.error('Error fetching application:', error));
            });
        });

        //delete application
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function () {
                const applicationId = this.getAttribute('data-id');
                const confirmDeleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
                confirmDeleteModal.show();

                document.getElementById('confirmDelete').onclick = function () {
                    fetch(`${apiBaseUrl}/${applicationId}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': 'Bearer ' + tkn
                        }

                    })
                        .then(response => {
                            console.log(response);
                            if (response.IsSuccess == false)
                                alert(response.ErrorList[0]);
                            else
                                alert('Application deleted successfully!');
                            loadApplications();
                        })
                        .catch(error => console.error('Error deleting application:', error));
                };
            });
        });
    }

    // Search Application by ID 
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const searchId = document.getElementById('searchInput').value;

        fetch(`${apiBaseUrl}/${searchId}`, token)
            .then(response => response.json())
            .then(application => {
                console.log(application);
                const searchResult = document.getElementById('searchResult');
                if (application.IsSuccess) {
                    searchResult.innerHTML = `
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
            `;
                }
                else {
                    alert(application.ErrorList);
                }
            })
            .catch(error => console.error('Error searching application:', error));
    });

    // Initial load of applications
    loadApplications();
});

//---helper methods 
    function resetApplication(){
        document.getElementById('employeeName').value="";
        document.getElementById('employeeID').value="";
document.getElementById('leaveType').value="";
document.getElementById('startDate').value=""
document.getElementById('endDate').value=""
document.getElementById('reason').value=""
   
    }

