window.onload = function(){
    const items = document.querySelectorAll(".mv-items-content-alertLink");
    for (var i=0; i<items.length; i+=2) {
      const leftItem = items[i];
      const leftItemH = leftItem.clientHeight;
      const rightItem = items[i+1];
      if(rightItem) {
        var rightItemH = rightItem.clientHeight;
        if( leftItemH < rightItemH ){
          leftItem.style.height = `${rightItemH}px`
        } else if ( leftItemH > rightItemH ) {
          rightItem.style.height = `${leftItemH}px`
        }
      }
    }
  }