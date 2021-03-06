(() => {

    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {

        debugger;
        console.log(data);

        // handleData
        // here's where you would call the function that puts the pieces on the page

        handleDataSet();
        }
    )
    .catch((err) => {
        console.log(err);
    })

    function handleDataSet(data) {
        panelSection = document.querySelector('.panel-section'),
        panelTemplate = document.querySelector('#panel-template').content;

    // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

    for (let _panel in myData) {
        let panelSection = panelTemplate.cloneNode(true),
            panelText = panel.querySelector('.classData').children;

        let panel = document.querySelector("#panel-template"),
            courseID = panel.content.querySelector(".text-primary")

        let copy = courseID;
            copy.innerHTML = "_" + data.coursecode;

        panelText[1].innerHTML = myData.coursename;
        panelText[2].innerHTML = myData.coursecode;
        panelText[3].innerHTML = myData.profname;
        panelText[4].innerHTML = myData.classtime;

        // add this new user to the view
        panelSection.appendChild(panelText);

    }

    console.log(data);
}

})();