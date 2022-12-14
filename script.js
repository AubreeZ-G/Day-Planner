var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek);


for (var i = 0; i < 9; i++) {
    $('.container').append($(`<div id="row-0${i+1}" class="row time-block"><div id="time-0${i+1}" class="col-md-1 col-sm-1 col-2 hour"></div><textarea id="text-0${i+1}" class="col-md-10 col-sm-8 col-8 col-8"></textarea><button class="col-md-1 col-sm-1 col-sm-1 col-2 saveBtn"><i class="far fa-save"></i></button></div>`))   
}

var saveBtn = $('.row').children('.saveBtn')                                            

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} AM`)                   
    } else if (index === 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} PM`)
    } else {
        $('.row').children('.hour').eq(index - 8).text(`${index - 12} PM`)
    }
    if (index == moment().format('H')) {                                               
        $('textarea').eq(index - 8).addClass('present')
    } else if (index < moment().format('H')) {
        $('textarea').eq(index - 8).addClass('past')
    } else {
        $('textarea').eq(index - 8).addClass('future')
    }
    $(`#text-0${index - 7}`).text(localStorage.getItem(`text-0${index - 7}`))           
}

saveBtn.on('click', function () {
    
    var textEl = $(this.parentNode).children('.col-md-10').attr('id');                   
    var textToStorage = $(this.parentNode).children('.col-md-10').val();                
    localStorage.setItem(textEl, textToStorage)                                         
})
