const myCount = document.getElementById("count")

for (let i = 1; i <= 100; i++) {

    // Il programma verifica i numeri che diano resto di 0 sia se divisi per 5 che per 3 in modo da trovare
    // i numeri che sono multipli di entrambe e se lo sono stampa "fuzzbizz" al posto del numero

    if (i % 3 === 0 && i % 5 === 0) {

        myCount.innerHTML +=`<li> fizzbuzz </li>`;

    }

    //Il programma verifica se il nuumero è multiplo di 3 e se lo è stampa "fizz" al posto del numero

    else if (i % 3 === 0) {

        myCount.innerHTML +=`<li> fizz </li>`;

    }

    //Il programma verifica se il nuumero è multiplo di 5 e se lo è stampa "buzz" al posto del numero

    else if (i % 5 === 0) {

        myCount.innerHTML +=`<li> buzz </li>`;

    }

    // se il numero non è nè multiplo di tre nè di 5 allora il programma stampa il numero

    else {

        myCount.innerHTML +=`<li> ${i} </li>`;

    }

}