  function performSearch() {
         var searchTerm = encodeURIComponent(document.getElementById('searchField').value);
         window.open('http://www.google.com/search?q=' + searchTerm, '_blank');
         window.open('http://search.yahoo.com/search?p=' + searchTerm, '_blank_1');
         window.open('https://www.bing.com/search?q=' + searchTerm, '_blank_2');
         window.open('https://duckduckgo.com/?q=' + searchTerm, '_blank_3');
         window.open('http://www.dogpile.com/search/web?q=' + searchTerm, '_blank_4');
         window.open('https://www.wolframalpha.com/input/?i=' + searchTerm, '_blank_5');
         window.open('https://www.yandex.com/search/?text=' + searchTerm, '_blank_6');
         window.open('http://www.gigablast.com/cgi/0.cgi?q=' + searchTerm, '_blank_7');
         window.open('http://web.ask.com/web?q=' + searchTerm, '_blank_8');
        }

