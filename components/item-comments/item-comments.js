'use strict';

angular.module('diaryApp').component('itemComments', {
    templateUrl: 'components/item-comments/item-comments.html',
    controller: ItemCommentsController,
    bindings: {
        item: '<',
        index: '<',
        updateStorageFn: '&'
    }
});

/**
 * ItemCommentsController constructor
 * @constructor
 */
function ItemCommentsController() {
    this.newCommentText = '';
}

/**
 * Add new comment to active item
 * @param  {string} text - comment's text
 */
ItemCommentsController.prototype.addComment = function (text) {
    this.item.comments.push({
        text: text,
        timestamp: +new Date()
    });
    this.newCommentText = '';
};

/**
 * Handling ctrl+enter to save comment
 * @param {!Event} event
 */
ItemCommentsController.prototype.handleKeyPress = function (event) {
    var code = event.keyCode || event.which;
    if (code === 10 && event.ctrlKey) {
        this.addComment(this.newCommentText);
        this.updateStorageFn();
        event.preventDefault();
    }
};