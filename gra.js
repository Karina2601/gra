/**
 * Created by karina on 27.05.16.
 */
"use strict";
var $aplikacja=$('#aplikacja');
    function createboard(){
     var $table = $('<table>');
     $aplikacja.append($table);
     for(var i= 0; i < 3; i += 1) {
         var $tr = $('<tr>');
         $table.append($tr);
         for(var j= 0; j < 3; j += 1){
             var $td = $('<td>');
             $tr.append($td);
             $td.addClass("game");
         }
     }
 }
function pcclick(){
    var emptyrow=$('td:not(.cross, .circle)');
    emptyrow.eq(Math.round(Math.random()*(emptyrow.length-1))).trigger("click",true);
}



$aplikacja.on("click", "td:not(.cross, .circle)", function(event,who){
    if (who === true){
        $(this).addClass("circle");
    } else {
        $(this).addClass("cross");
        setTimeout(function(){
            pcclick();
        },1000);
    }

});

createboard();