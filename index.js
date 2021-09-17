function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify({
            name: userName, 
            email: userEmail, 
        })
     })

        .then(function (response) {
            return response.json();
        })
        .then(data => renderId(data))
        .catch(function (error) {
           const elem = document.createElement('div');
           elem.innerHTML = error.message; 
           document.body.append(elem); 
        })
}
    const renderId = data => {
        document.body.innerHTML = data.id;
    }