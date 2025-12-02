const myCount = document.getElementById("count")

for (let i = 0; i < 101; i++) {


    if (i % 3 === 0 && i % 5 === 0 && i != 0) {

        myCount.innerHTML +=`<li> fizzbuzz </li>`;

    }

    else if (i % 3 === 0 && i != 0) {

        myCount.innerHTML +=`<li> fizz </li>`;

    }

    else if (i % 5 === 0 && i != 0) {

        myCount.innerHTML +=`<li> buzz </li>`;

    }

    else if (i != 0) {

        myCount.innerHTML +=`<li> ${i} </li>`;

    }

}