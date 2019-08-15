/* eslint-disable no-continue */
/* eslint-disable no-plusplus */

function duplicateEncode(word) {
        let string = '';
        const lowerCaseWord = word.toLowerCase();
        for (let i = 0; i < lowerCaseWord.length; i++) {
                if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
                        string += '(';
                } else {
                        string += ')';
                }
        }
        return string;
}

duplicateEncode('adefolaju');

// jquery code that called when page is loaded or resize.
// It calculates the screen height and slots
// it into the fill-screen class height property in css
$(function() {
        $(window).on('load resize', function() {
                $('.fill-screen').css('height', window.innerHeight);
        });
});
