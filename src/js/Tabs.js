import $ from 'jquery';

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


export default Tabs;