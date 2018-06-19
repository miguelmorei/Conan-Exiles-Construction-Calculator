import assets from "./assets";
import $ from 'jquery';
const resources = assets.resources;
import Board from './Board';
import Tabs from './Tabs';

/**
 * Menu tabs
 * @param {*} element 
 */


function MaterialCalculator(id, resouces) {
    this.resources = resources;
    this.board = new Board(id, 40);
    this.activeResource = {};
}

MaterialCalculator.prototype.init = function () {
    this.board.init();

    return this;
}

MaterialCalculator.prototype.setActiveResource = function (resource) {

    let activeResource = this.resources.filter(r=>{
        return resource == r.name;
    })

    console.log(activeResource);

}

MaterialCalculator.prototype.selectedResource = function () {


}





$(document).ready(function () {

    const calc = new MaterialCalculator('board', resources).init();
    const menuTabs = new Tabs('.construction-menu').init();

    $('.construction-menu .icon').on('click', function(e){
        e.preventDefault();
        $('.construction-menu .icon').removeClass('active');
        $(this).addClass('active');
        calc.setActiveResource($(this).data('resource'));

    })

});