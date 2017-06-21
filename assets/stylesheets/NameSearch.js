(function() {

  $(function() {

    let searchterm;
    let search_text;
    let name;
    let image;

    function WriteChars(name, image) {
      //$("#listofchars").append(name + ":" +  "<img width=100px src=" + image + "></br>");
      $("#table").append('<tr><td>' + name + '<td><td>' + "<img width=100px src=" + image + "></td><tr>" )
    }


    function NameSearch() {
      $.get("http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + searchterm + "&ts=1&apikey=d8d0d7d6bb700ea477df7f5f7f020ec8&hash=73cff854aaf05a6baff147d7a90f132d", function(data) {
        $.each(data.data.results, function(index, value) {
          name = value.name;
          image = (value.thumbnail.path) + "." + (value.thumbnail.extension);
          WriteChars(name, image);
          console.log(index + " : " + name + " : " + image);
        }) //each
      }); //get
    } //NameSearch function


    $("#submit").click(function() {
      $("#table").empty();
      search_text = $(".input").val();
      searchterm = search_text;
      NameSearch();
      $(".input").val("");
    })
   })
})();
