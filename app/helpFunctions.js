var domImage=function(){
    var varsPrefix='DOMVAR_'

    this.loadFileToDOM = function(event,key) {
        var url=URL.createObjectURL(event.target.files[0]);
        var domVarSelector=$('#'+varsPrefix+key);


        if(domVarSelector.val()!=undefined){
            domVarSelector.attr('src',url)
        } else {
            $('body').append('<!-- DOM VAR -->');
            $('body').append('<img style="display:none" src="'+url+'" id="'+varsPrefix+key+'">');
        }

        return url;
    };

    this.getFileUrlFromDOM =function(key){
        var url=$('#'+varsPrefix+key).attr('src');

        return url;
    };

    this.generateJquerySelector=function(key){
        var selector=$('#'+varsPrefix+key);
        return selector;
    }

    return this;
};