//copy the script to console get links

//get objects with class name entr-title
let listFinal = []
let listTemp = document.getElementsByClassName('entry-title')

//add links to array listFinal
for(i=0;i<listTemp.length;i++)
{
    if(listTemp[i].firstChild.hasAttribute('href'))
{
    listFinal.push(listTemp[i].firstChild.getAttribute('href'))
}
}

//print link in console and on page for easier copying to clipboard
listFinal.forEach(function(link) {
    let newItem = document.createElement('div')    
    let textnode = document.createTextNode(link)
    newItem.appendChild(textnode)             
    let printList = document.getElementById('page')
    printList.insertBefore(newItem, printList.childNodes[0])
    console.log(link)
})
