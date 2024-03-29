//moreSlide - an easy way to implement 'more...' option
// Created By : Logesh Kumar
// Created On : 30/08/2011 4.15pm
// Licence : open to all
//
// options :
//           limit -> limit the number of elements to be shown initialy 
//           repeatingElementSelector -> the selector for the repeating element which is to be hidden partly
// Insructions
// -----------
//To use this tab plugin,the elements to be restricted should have same repeating classes 
//
// Example :
//   <div class = 'elem1'></div>
//   <div class = 'elem2'></div>
//   <div class = 'elem3'></div>
//   <div class = 'elem4'></div>






(function($){
    
$.fn.moreSlide = function(options){
    var defaults = {limit : 2, repeatingElementSelector : '.my-projects'},
    settings = $.extend({},defaults,options);
    
    var pno = this.size();
            if(pno>settings.limit)
            {
                        this.last().after('<a href="#" class="more">more..</a></br>');
                        var $this = this;
                        $this.eq((settings.limit-1)).nextAll(settings.repeatingElementSelector).hide();
            
                        $('a.more').click(function(e){
                                    var $this2 = this;
                                    e.preventDefault();
                                    var prevElement = $this.prevAll(':visible').first(),
                                    displayNum = settings.repeatingElementSelector+':lt('+settings.limit+')';
                                    visibleElements = settings.repeatingElementSelector +':visible',
                                    prevElement.nextAll(displayNum).slideDown();
                                   
                                    if($(this).prevAll(visibleElements ).size() == pno)
                                    {
                                        $(this).remove();
                                    }
                        });
            }
            
    
    };

return this;  

})(jQuery);