function BINARY()
{
    var szukana = parseInt(document.getElementById("liczba").value);

    var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    var lewo = tab[0];
    var prawo = tab[tab.length-1];


    document.getElementById("wynik").innerHTML = BINARY_SEARCH(tab, lewo, prawo, szukana);

}



function BINARY_SEARCH(list, start, stop, search)
{
    if(start > stop)
    {
        return "Nie znaleziono takiego elementu";
    }
    
    var q = parseInt((start + stop) / 2);

    if(list[q] == search)
    {
            return "Ta liczba znajduje się w tablicy";
    }

    if(list[q] > search)
    {
        return BINARY_SEARCH(list,start,q-1,search);
    }

    if(list[q] < search)
    {
        return BINARY_SEARCH(list,q+1,stop,search);
    }


    
}