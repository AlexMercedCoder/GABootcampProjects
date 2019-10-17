


//added the defer keyword to my script tag, to avoid script pre-loading problems


///////////////////////////////////////
//PROGRAM NAME:
//PROGRAM BY
///////////////////////////////////////


//GLOBAL DATA SETS

let boro = "";
let recordLimit = 0;
let url = 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=BRONX&$limit=10'




// CLASSES





//FUNCTIONS DEFINITIONS

const populateInfo = (event) => {

    $('main').empty();
    boro = $(event.target).text();
    console.log(boro);
    recordLimit = $('#number').val();
    console.log(recordLimit);
    url = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${boro}&$limit=${recordLimit}`;
    axios.get(url)
        .then((data)=>{
            console.log(data.data);
            data.data.map((i) => {
                console.log(i);
                rBoro = i.borough;
                rDescriptor = i.descriptor;
                rAgency = i.agency;
                rComplaintType = i.complaint_type;
                rStatus = i.status;
                $record = $('<div>').addClass('record');
                $record.html(
                    `<span>Borough:</span> ${rBoro}<br><br>
                    <span>Agency:</span> ${rAgency}<br><br>
                    <span>Descriptor:</span> ${rDescriptor}<br><br>
                    <span>Complaint Type:</span> ${rComplaintType}<br><br>
                    <span>Status:</span> <span class = "status">${rStatus}</span><br><br>
                    <button class="toggle"> Close/Open Matter</button>`

                );
                $('main').append($record);

            })

            $('.toggle').on('click',toggle)
        });


}


const toggle = (event) =>{

    $status = $(event.target).siblings('.status');
    if ($status.text() === "Closed"){
        $status.text('Open');
    }else{
        $status.text('Closed');
    }

}

//DOM VARIABLES





//EVENT LISTENERS

$('button').on('click',populateInfo);




//THE PROGRAM

axios.get(url)
.then((data)=>{console.log(data.data[0].city);});
