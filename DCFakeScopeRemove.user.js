// ==UserScript==
// @name DiscordFakeScopeRemover
// @description Removes the dumb extra scopes Discord adds underneath the actual scopes at the OAuth2 page
// @match https://discord.com/oauth2/*
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @author Sinner
// @grant GM_addStyle
// ==/UserScript==


(function () {
	'use strict';

    //fuck you to whoever thought this was funny
    setTimeout(function(){
        $('.scope-J9cQRk:contains("Bake a cake")').css('display', 'none');
        $('.scope-J9cQRk:contains("Solve a mystery with Scooby and the gang")').css('display', 'none');
        $('.scope-J9cQRk:contains("Have an existential crisis")').css('display', 'none');
        $('.scope-J9cQRk:contains("Read you a bedtime story")').css('display', 'none');
        $('.scope-J9cQRk:contains("Paint a happy little tree")').css('display', 'none');
        $('.scope-J9cQRk:contains("Record a new mixtape")').css('display', 'none');
        $('.scope-J9cQRk:contains("Buy you a nice seafood dinner")').css('display', 'none');
        $('.scope-J9cQRk:contains("Microbrew some local kombucha")').css('display', 'none');
    }, 300);
})();
