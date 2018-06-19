import assets from "./assets";
import $ from 'jquery';
const resources = assets.resources;
import Board from './Board';
/**
 * Menu tabs
 * @param {*} element 
 */
function Tabs(element) {
    this.element = $(element);
    this.tabs = $(element).find('.tab-menu a');
    this.pages = $(element).find('.tab');
    this.activeTab = this.tabs.eq(0).data('tab');
}

Tabs.prototype.init = function () {
    let _self = this;
    _self.tabs.on('click', function (e) {
        e.preventDefault();
        _self.changeTab($(this));
    });
}

Tabs.prototype.changeTab = function (tab) {
    let _self = this;
    this.tabs.removeClass('active');
    $(tab).addClass('active');
    this.activeTab = $(tab).data('tab');
    this.pages.removeClass('active');
    let $page = this.pages.filter(function () {
        return $(this).data('tab') == _self.activeTab
    });
    $page.addClass('active');
}


function MaterialCalculator(id, resouces) {
    this.resources = resources;
    this.board = new Board(id, 40);
}

MaterialCalculator.prototype.init = function () {
    this.board.init();
}

MaterialCalculator.prototype.selectedResource = function () {



}





$(document).ready(function () {

    const calc = new MaterialCalculator('board', resources).init();
    const menuTabs = new Tabs('.construction-menu').init();

});