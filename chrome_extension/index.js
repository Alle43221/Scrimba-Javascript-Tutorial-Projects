let ar=[];

//////////////////////////////////////

const new_text=document.getElementById("input-el");  //input element

const List=document.getElementById('list');

const button=document.getElementById('input-btn');
button.addEventListener("click", save_lead);

const deleteB=document.getElementById("delete-btn");
deleteB.addEventListener('dblclick', del);

const tabB=document.getElementById("tab-btn");
tabB.addEventListener('click', add);

////////////////////////////////////////

//localStorage.clear();

renderList();

function add(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        ar.push(tabs[0].url);
        localStorage.setItem("myData", JSON.stringify(ar));
        renderList();

    });
    ar.push(activeTabId);
    localStorage.setItem("myData", JSON.stringify(ar));
    renderList();
}


function del(){
    localStorage.clear();
    renderList();
}

function save_lead(){
    ar.push(new_text.value);
    new_text.value='';
    localStorage.setItem("myData", JSON.stringify(ar));
    renderList();
}

function renderList(){
    ar=JSON.parse(localStorage.getItem('myData'));
    if(ar==null)
    {
        localStorage.setItem("myData", JSON.stringify(ar));
        ar=[];
        List.innerHTML='';
    }
    else
    {
        let A='';
        for(let i=0; i<ar.length; i++){
            A+='<li>'+  '<a href=\"' + ar[i] + '\">' +ar[i] +  ''  +  '</li>';
        }
        List.innerHTML=A;
    }

}
