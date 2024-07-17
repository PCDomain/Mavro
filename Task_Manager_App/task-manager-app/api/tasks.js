axios.post('http://localhost:8000/api/tasks/', formData)
    .then(response => {
        console.log(response.data);
        // Handle success
    })
    .catch(error => {
        console.error('There was an error creating the task!', error);
        // Handle error
    });
