  /*
  
  This is the javaScript , Jquery and Ajax to get the Jason from my  github repository, parse it and write it to an html page.
  
  */
  
        $(document).ready(function(){
            
            var $theRepos = $('#theRepos')
   

                $.get("https://api.github.com/users/iamkeithcarter", function(data, status){

                    var  item= data.repos_url;

                        
                    $.get(item,function(data,status){

                        for(var idx=0; idx<data.length; idx++){
                            var repo = data[idx];
                            var link = repo.html_url;
                            var name = repo.name;
                            var updatedDate = repo.updated_at;

                            $theRepos.append('<li><a href="'+link+'">'+name+'</a li>');

                          
                        
                        //These pull the exact element by name out of the repo.
                        
                        }
                    });      
        });

});