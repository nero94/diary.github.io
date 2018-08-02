'use strict';

angular.module('diaryApp').component('home', {
    templateUrl: 'components/home/home.html',
    controller: HomeController
});

/**
 * HomeController constructor
 * @constructor
 */
function HomeController() {
}
HomeController.prototype.DATA_KEY = 'ITEMS';

HomeController.prototype.$onInit = function () {
    this.items = [];
    this.activeItem = null;
    this.newItemName = '';

    this.initLocalStorageData();
};

/**
 * Set item as active on select
 * @param {Item} item
 */
HomeController.prototype.setActiveItem = function (item) {
    this.activeItem = item;
};

/**
 * Initialize data from local storage
 */
HomeController.prototype.initLocalStorageData = function () {
    var items = JSON.parse(localStorage.getItem(this.DATA_KEY));
    if (items && Array.isArray(items)) {
        this.items = items;
    }
};

/**
 * Update data in local storage
 */
HomeController.prototype.updateLocalStorageData = function () {
    localStorage.setItem(this.DATA_KEY, JSON.stringify(this.items));
};

/**
 * Create new item using name from input
 */
HomeController.prototype.addItem = function () {
    var name = this.newItemName.trim();
    if (name) {
        this.items.push({
            name: name,
            comments: [],
            timestamp: +new Date()
        });
    }
    this.newItemName = '';
    this.updateLocalStorageData();
};

/**
 * Removes
 * @param {Item} item - item to remove
 */
HomeController.prototype.removeItem = function (item) {
    var index = this.items.indexOf(item);
    if (index > -1) {
        this.items.splice(index, 1);
    }
    if (this.items.indexOf(this.activeItem) === -1) {
        this.activeItem = null;
    }
    this.updateLocalStorageData();
};