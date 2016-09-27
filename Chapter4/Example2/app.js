jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true;

var main = function () {
   'use strict';
var userFlag1, userFlag2 = true;

   var addCommentFromInputBox = function (button) 
   {
        var $newComment;
        switch(button) 
        {
            case 1:
                if ($('.comment-input-1 input').val() !== '')               /* switches boolean flag to true/false to switch back and forth between colors*/
                {
                    if (userFlag1 === true) 
                    {
                        $newComment = $('<p class=\'user-1_comment-1\'>');
                        userFlag1 = false;
                    }
                    else 
                    {
                        $newComment = $('<p class=\'user-1_comment-2\'>');
                        userFlag1 = true;
                    }
                    $newComment.text($('.comment-input-1 input').val());
                    $newComment.hide();
                    $('.comments').append($newComment);
                    $newComment.fadeIn();
                    $('.comment-input-1 input').val('');
                    $('.comment-input-2 input').val('');
                }
                break;
            case 2:
                if ($('.comment-input-2 input').val() !== '')   /*2nd user comment - switches boolean flag to true/false to switch back and forth between colors*/
                {
                    if (userFlag2 === true) 
                    {
                        $newComment = $('<p class=\'user-2_comment-1\'>');
                        userFlag2 = false;
                    }
                    else 
                    {
                        $newComment = $('<p class=\'user-2_comment-2\'>');
                        userFlag2 = true;
                    }
                    $newComment.text($('.comment-input-2 input').val());
                    $newComment.hide();
                    $('.comments').append($newComment);
                    $newComment.fadeIn();
                    $('.comment-input-1 input').val('');
                    $('.comment-input-2 input').val('');
                }
                break;
            default: 
                console.log('This is the default case.');
        }
    };

    $('.comment-input-1 button').on('click', function () 
    {
       addCommentFromInputBox(1);
    });

    $('.comment-input-1 input').on('keypress', function (event) 
    {
        if (event.keyCode == 13) 
        {
            addCommentFromInputBox(1);
        }
    });
    
    $('.comment-input-2 button').on('click', function () 
    {
        addCommentFromInputBox(2);
    });

    $('.comment-input-2 input').on('keypress', function (event) 
    {
        if (event.keyCode == 13) 
        {
            addCommentFromInputBox(2);
        }
    });
    

};

$(document).ready(main);
