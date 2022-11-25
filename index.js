const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
];

cards(dataAraay);

function cards(dataAraay) {
    const holder = document.getElementById("cardHolder");

    var card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('onclick', 'activer(this)');

    for(i of dataAraay){
        card.innerHTML = `
            <span id="index">${i.userId}</span>
            <img id="logo" src="${i.userImage}" alt="logo">
            <h2>${i.userName}</h2>
            <h3>${i.userLastName}</h3>
            <h4>${i.userAge} : years old</h4>
            <p>addresses: ${i.userAddresses}</p>
    `;

    holder.appendChild(card.cloneNode(true));
    }
};

function activer(e){
    e.classList.toggle('active');
}