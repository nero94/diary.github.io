'use strict';

angular.module('diaryApp').component('diaryItem', {
    templateUrl: 'components/diary-item/diary-item.html',
    controller: DiaryItemController,
    bindings: {
        item: '<',
        active: '<',
        removeItemFn: '&'
    }
});

/**
 * DiaryItemController constructor
 * @constructor
 */
function DiaryItemController() {
}