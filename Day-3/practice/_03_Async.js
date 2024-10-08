async function fetchData() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Fetching data...");
            resolve({name: "priya", id: 29});
        }, 1000);
    })
}

async function getData(data) {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
getData();

