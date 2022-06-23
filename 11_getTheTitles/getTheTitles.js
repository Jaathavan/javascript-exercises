const getTheTitles = function(books) {
    books.reduce((titles, title) => {
        titles.append(books[title]);
    }, []);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
