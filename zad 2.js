function Book(tytul, imie, nazwisko, rok) {
    this.tytul = tytul;
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rok = rok;

    this.getAuthorFullName = function() {
        return this.imie + " " + this.nazwisko;
    };
}

function bookInfo(book) {
    return book.tytul + " - " + book.getAuthorFullName() + " (" + book.rok + ")";
}

var books = [
    new Book("W Pustyni i w Puszczy", "Henryk", "Sienkiewicz", 1932),
    new Book("Ogniem i Mieczem", "Henryk", "Sienkiewicz", 1884),
    new Book("Mały Książę", "Antoine", "de Saint-Exupéry", 1943),
    new Book("Chłopcy z Placu Broni", "Ferenc", "Molnar", 1907)
];

var selectedRok = 1932;

books.forEach(function(book) {
    if (book.rok === selectedRok) {
    }
});

books.forEach(function(book) {
    console.log(bookInfo(book));
});
