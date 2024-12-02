document.addEventListener('DOMContentLoaded', function () {
    const apiBaseUrl = 'http://localhost:53842/api/LeaveApi';

    // Add Leave Application
    document.getElementById('addLeaveForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const data = {
            name: document.getElementById('applicantName').value,
            reason: document.getElementById('leaveReason').value
        };

        axios.post(`${apiBaseUrl}/add`, data)
            .then(response => {
                alert('Application submitted successfully');
                loadApplications();
            })
            .catch(error => console.error(error));
    });

    // View All Applications
    function loadApplications() {

        let config = {
            headers: {
              'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmlrZXQiLCJyb2xlIjoiYW5pa2V0IiwiZXhwIjoiMjAyNC0wOS0wMlQxNzo0Njo0My4yODk0MTA5KzAwOjAwIn0.gqFQOHC8LZGdZJF-4-j5g_gZpSBnD1aRGNsUEbOcGbU'
            }
          }
        axios.get(`${apiBaseUrl}`,config)
            .then(response => {
                const applicationsList = document.getElementById('applicationsList');
                applicationsList.innerHTML = '';
                
                response.data.Data.forEach(app => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.textContent = `LeaveId:${app.leaveId } |Emp Name: ${app.empName} | Total Leaves :${app.totalLeaves} | Status :${app.status}`;
                    applicationsList.appendChild(listItem);
                });
            })
            .catch(error => console.error(error));
    }
    loadApplications(); // Load on page load

    // Search Application by ID
    document.getElementById('searchButton').addEventListener('click', function () {
        const id = document.getElementById('searchId').value;
        
        let config = {
            headers: {
              'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmlrZXQiLCJyb2xlIjoiYW5pa2V0IiwiZXhwIjoiMjAyNC0wOS0wMlQxNzo0Njo0My4yODk0MTA5KzAwOjAwIn0.gqFQOHC8LZGdZJF-4-j5g_gZpSBnD1aRGNsUEbOcGbU'
            }
          }
        axios.get(`${apiBaseUrl}/${id}`,config)
            .then(response => {
                const result = response.data.Data;
                document.getElementById('searchResult').innerHTML = `<strong>Name:</strong> ${result.empName} <br><strong>Total Leaves:</strong> ${result.totalLeaves}`;
            })
            .catch(error => {
                document.getElementById('searchResult').textContent = 'Application not found';
                console.error(error);
            });
    });

    // Load Application for Update/Delete
    document.getElementById('loadButton').addEventListener('click', function () {
        const id = document.getElementById('updateDeleteId').value;
                
        let config = {
            headers: {
              'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmlrZXQiLCJyb2xlIjoiYW5pa2V0IiwiZXhwIjoiMjAyNC0wOS0wMlQxNzo0Njo0My4yODk0MTA5KzAwOjAwIn0.gqFQOHC8LZGdZJF-4-j5g_gZpSBnD1aRGNsUEbOcGbU'
            }
          }
        axios.get(`${apiBaseUrl}/${id}`,config)
            .then(response => {
                const result = response.data.Data;
                document.getElementById('updateName').value = result.empName;
                document.getElementById('updateReason').value = result.status;
                document.getElementById('updateDeleteForm').classList.remove('d-none');
            })
            .catch(error => console.error(error));
    });

    // Update Application
    document.getElementById('updateButton').addEventListener('click', function () {
        const id = document.getElementById('updateDeleteId').value;
        const data = {
            name: document.getElementById('updateName').value,
            reason: document.getElementById('updateReason').value
        };

        axios.put(`${apiBaseUrl}/update/${id}`, data)
            .then(response => {
                alert('Application updated successfully');
                loadApplications();
            })
            .catch(error => console.error(error));
    });

    // Delete Application
    document.getElementById('deleteButton').addEventListener('click', function () {
        const id = document.getElementById('updateDeleteId').value;
        
        let config = {
            headers: {
              'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmlrZXQiLCJyb2xlIjoiYW5pa2V0IiwiZXhwIjoiMjAyNC0wOS0wMlQxNzo0Njo0My4yODk0MTA5KzAwOjAwIn0.gqFQOHC8LZGdZJF-4-j5g_gZpSBnD1aRGNsUEbOcGbU'
            }
          }
        axios.delete(`${apiBaseUrl}/${id}`,config)
            .then(response => {
                alert('Application deleted successfully');
                loadApplications();
                document.getElementById('updateDeleteForm').classList.add('d-none');
            })
            .catch(error => console.error(error));
    });
});
