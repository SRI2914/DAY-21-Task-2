//function that returns ISRO Probes data
async function getISROprobesData(){
    try {
        const spacecraftsData= fetch('https://isro.vercel.app/api/spacecrafts'); //using fetch to retrieve data

        //returning probes data
         return spacecraftsData.then(response=>response.json()).then(data=>data).catch(error=>{
            console.log(error)
            return error;
         })

    } catch (error) {
        console.log(error);
    }
}

//function to display probes data
async function displayIsroProbesData(){
    const spacecraftsData=await getISROprobesData(); //await is used to get the json data but not promise

    //accessing the div element where data is to be displayed
    let displaySpacecraftsDiv = document.querySelector(".display-data");
    displaySpacecraftsDiv.innerHTML="";

    //displaying the character data on webpage
    spacecraftsData.spacecrafts.forEach(spacecraft=>{
        displaySpacecraftsDiv.innerHTML+=`
        <div class="spacecraft-card">
            <h4> Name : ${spacecraft.name}</h4>
        </div>
    `
    })
}