var images=new domImage();

var changePicture=function(event){
    $('.mainSpace').html('');

    console.log($('.loadPictureForm'));

    var pictureUrl=images.loadFileToDOM(event,'faceImage');

    $('.mainSpace').css('background-image','url(\''+pictureUrl+'\')');
    $('.mainSpace').append('<img style="width:100%;opacity: 0;" src="'+pictureUrl+'"/>');
};

var hitPicture=function(event,hitBy){
    var mainSpacePosition=$('.mainSpace').offset();

    var clickX=event.x-35;
    var clickY=event.y-mainSpacePosition.top-35;

    console.log(mainSpacePosition);
    console.log(event.x);
    console.log(clickX);

    $('.mainSpace').append('<img src="img/hits/'+hitBy+'.png" style="position:absolute;left:'+clickX+'px;margin-top:'+clickY+'px;"/>');
};

var clearSpace=function(){
    $('.mainSpace').html('');
    $('.loadPictureForm').val('');
}