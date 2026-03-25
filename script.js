import Plotly from 'plotly.js';

function makePortraits(numPortraits){
    for(i=2; i < numPortraits +1; i++){
        var portrait = document.getElementById('1');
        var clonePortrait = portrait.cloneNode(true);

        clonePortrait.id = i;

        var container = document.getElementById("container")
        container.appendChild(clonePortrait);
    }
}

function fillPortraits(){
    const csv = JSON.parse(sessionStorage.getItem('array'));
    makePortraits(csv.length)
    for(i=0; i < csv.length; i++){
        console.log(csv[i].ID)
        portrait = document.getElementById(csv[i].ID)

        


        portrait.querySelector('#name').innerHTML = csv[i].name
        portrait.querySelector('#year').innerHTML = csv[i].year
        portrait.querySelector('#graph').innerHTML = makeGraph(csv, i)
        portrait.querySelector('#advisees').innerHTML = csv[i].advisees
        portrait.querySelector('#undergrad').innerHTML = csv[i].undergrad
        portrait.querySelector('#grad').innerHTML = csv[i].grad
        portrait.querySelector('#committee').innerHTML = csv[i].committee
        portrait.querySelector('#postdoc').innerHTML = csv[i].postdoc
        portrait.querySelector('#faculty').innerHTML = csv[i].faculty
        portrait.querySelector('#space').innerHTML = csv[i].space
        portrait.querySelector('#expenditures').innerHTML = csv[i].expenditures
        portrait.querySelector('#papers').innerHTML = csv[i].papers
        portrait.querySelector('#issued').innerHTML = csv[i].issued
        portrait.querySelector('#seminars').innerHTML = csv[i].seminars
        portrait.querySelector('#license').innerHTML = csv[i].license
        portrait.querySelector('#conference').innerHTML = csv[i].conference
        portrait.querySelector('#company').innerHTML = csv[i].company
        portrait.querySelector('#software').innerHTML = csv[i].software 
        portrait.querySelector('#product').innerHTML = csv[i].product
        portrait.querySelector('#provisional').innerHTML = csv[i].provisional
        portrait.querySelector('#other').innerHTML = csv[i].other
        portrait.querySelector('#department').innerHTML = csv[i].department
        portrait.querySelector('#somseas').innerHTML = csv[i].somseas
        portrait.querySelector('#university').innerHTML = csv[i].university
        portrait.querySelector('#national').innerHTML = csv[i].national
    }
}

function printDiv() {
    var printContents = document.getElementById("container").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
