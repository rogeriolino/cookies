/** 
 * Cookie helper
 * Original source-code http://www.quirksmode.org/js/cookies.html
 * Modifed by <rogeriolino.com>
 */
var cookies = {
    create: function(name, value, days) {
        var date, expires = '';
        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    read: function(name) {
        var nameEQ = name + "=", ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },
    erase: function(name) {
        this.create(name, "", -1);
    }
};
