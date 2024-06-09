sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/book/book/test/integration/FirstJourney',
		'ns/book/book/test/integration/pages/BooksList',
		'ns/book/book/test/integration/pages/BooksObjectPage',
		'ns/book/book/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/book/book') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);