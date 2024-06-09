sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ns.book.book',
            componentId: 'Books_textsObjectPage',
            contextPath: '/Books/texts'
        },
        CustomPageDefinitions
    );
});