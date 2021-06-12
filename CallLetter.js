var data = {
    "users": [{
            "id": 100,
            "name": "Meiyazhagan",
            "mail": "kmeiyazhagan14@gmail.com",
            "passout": 2021
        },
        {
            "id": 101,
            "name": "Navin Balaji",
            "mail": "naveenbalaji1199@gmail.com",
            "passout": 2000
        },
        {
            "id": 102,
            "name": "Vinoth",
            "mail": "vinothboopathi45@gmail.com",
            "passout": 2024
        }
    ]
}

var createTable = () => {
    var table = document.createElement('table')
    table.setAttribute('class', 'table table-bordered')
    table.setAttribute('id', 'dataTable')
        //Table Head
    var thead = document.createElement('thead')
    thead.setAttribute('class', 'table-dark')
    var thtr = document.createElement('tr')
    var th1 = document.createElement('th'),
        th2 = document.createElement('th'),
        th3 = document.createElement('th'),
        th4 = document.createElement('th'),
        th5 = document.createElement('th'),
        th6 = document.createElement('th')
    th1.setAttribute('scope', 'col')
    th2.setAttribute('scope', 'col')
    th3.setAttribute('scope', 'col')
    th4.setAttribute('scope', 'col')
    th5.setAttribute('scope', 'col')
    th6.setAttribute('scope', 'col')
    var thtext1 = document.createTextNode('No'),
        thtext2 = document.createTextNode('Name'),
        thtext3 = document.createTextNode('Mail'),
        thtext4 = document.createTextNode('Passout'),
        thtext5 = document.createTextNode('Profile'),
        thtext6 = document.createTextNode('Send')

    th1.appendChild(thtext1)
    th2.appendChild(thtext2)
    th3.appendChild(thtext3)
    th4.appendChild(thtext4)
    th5.appendChild(thtext5)
    th6.appendChild(thtext6)

    thtr.appendChild(th1)
    thtr.appendChild(th2)
    thtr.appendChild(th3)
    thtr.appendChild(th4)
    thtr.appendChild(th5)
    thtr.appendChild(th6)

    thead.appendChild(thtr)
    table.appendChild(thead)
        //Table Body
    for (var i = 0; i < data.users.length; i++) {
        var tr = document.createElement('tr')
        tr.setAttribute('id', data.users[i].id)

        var td1 = document.createElement('td'),
            td2 = document.createElement('td'),
            td3 = document.createElement('td'),
            td4 = document.createElement('td'),
            td5 = document.createElement('td'),
            td6 = document.createElement('td')

        var text1 = document.createTextNode(i + 1),
            text2 = document.createTextNode(data.users[i].name),
            text3 = document.createTextNode(data.users[i].mail),
            text4 = document.createTextNode(data.users[i].passout)

        var viewProfileButton = document.createElement("button")
        viewProfileButton.setAttribute("class", "btn btn-sm btn-info")
        viewProfileButton.addEventListener("click", () => { console.log("Do Nothing") })
        viewProfileButton.innerHTML = "View"

        var sendMailButton = document.createElement("button")
        sendMailButton.setAttribute("class", "btn btn-sm btn-success")
        sendMailButton.setAttribute("onclick", `SendCallLetter('${data.users[i].name}','${data.users[i].mail}')`)
        sendMailButton.innerHTML = "Send"

        td1.appendChild(text1)
        td2.appendChild(text2)
        td3.appendChild(text3)
        td4.appendChild(text4)
        td5.append(viewProfileButton)
        td6.append(sendMailButton)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)

        table.appendChild(tr);
    }
    document.getElementById('root').append(table)
}

var SendCallLetter = (getName, getMail) => {
    var data = {
        "name": getName,
        "email": getMail
    }
    console.log(data)
    fetch('https://cbmailer.herokuapp.com/SendCallLetter', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; Charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}