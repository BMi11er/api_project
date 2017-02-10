/**
 * Created by h205p3 on 2/8/17.
 */
function gitTest() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
            'api-key': "b6cdaafb43c84cf0bd83533bcbe93e4c"
        });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
}