function isTouching(fixedRect,movingRect){
if(fixedRect.width/2 + movingRect.width/2 >= fixedRect.x-fixedRect.x
    && fixedRect.width/2+movingRect.width/2 >= fixedRect.x-movingRect.x
    && fixedRect.height/2 + movingRect.height/2 >= movingRect.y-fixedRect.y
    && fixedRect.height/2+movingRect.height/2 >= fixedRect.y-movingRect.y){
        return true;

    } else {
        return false;
    }
}