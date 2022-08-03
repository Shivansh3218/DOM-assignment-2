// 4 lists created to store the data of entries made by user    
    var list1=[];
    var list2=[];
    var list3=[];
    var list4=[];
    let n=1;
    let x=0;

    function AddRow(){
 var addRow=document.getElementById("show")
 var newRow=addRow.insertRow(n);
 
 list1[x]=document.getElementById("fname").value;
 list2[x]=document.getElementById("email").value;
 list3[x]=document.getElementById("phone").value;
 
 var cell1=newRow.insertCell(0)
 var cell2=newRow.insertCell(1)
 var cell3=newRow.insertCell(2)
 var cell4=newRow.insertCell(3)

 cell1.innerHTML=list1[x];
 cell2.innerHTML=list2[x];
 cell3.innerHTML=list3[x];
 cell4.innerHTML= '<input type="submit" name="remove" id="remove" value="Remove" onclick="removed()">';

 n++
 x++
    }
    //For removing data after pushinng the add button
    
    let inputs =document.querySelectorAll("input")
    let button3 = document.querySelector("#button")
    button3.addEventListener("click",()=>{
        inputs.forEach(input=>input.value = "")
    })



    let buttons=document.getElementById("remove");
        buttons.addEventListener("click",removed);
        function removed(){
            document.getElementById("show").deleteRow(1)
        }