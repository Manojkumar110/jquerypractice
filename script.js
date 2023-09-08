// Heading start here :-
$(document).ready(function () {
    var heading = getLocalStorage("Heading");
    if (heading) {
        $("main").append(heading);
    }
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    $(".select-heading").on('submit', function (e) {
        var heading = $('input').val()
        $("main").append('<section class="ui-sortable-handle"><h1>' + heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="" width="10" height="10"></button></h1><div class="subheads-list ui-sortable"></div></section>')
        $('.select-sub-heading option').remove()
        $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
        $('.select-form #headings option').remove()
        $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
        $('section h1').each(function (key) {
            key = key + 1
            var heading_in_sub_heading = $(this).text()
            $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
            $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        })

        setLocalStorage();
        SortAbleFunction();
        e.preventDefault();
        e.target.reset();
    })
    SortAbleFunction();
});

$("#headingTextModel").click(function () {
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
})
// heading end here :-

// sub heading start here :- 

$("#SubSeadingId").click(function () {
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    $('.select-sub-heading option').remove()
    $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
    $('.select-form #headings option').remove()
    $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })
    setLocalStorage();
});

$(document).ready(function () {
    getLocalStorage("sub heading Heading")
    $(".select-sub-heading").on('submit', function (e) {
        var heading_in_sub_heading = $('select option:selected', this).val()
        var sub_heading = $('input', this).val()
        $("section:nth-child(" + heading_in_sub_heading + ") div.subheads-list").append('<div class="container mt-1 ui-sortable-handle ui-sortable"><h4 class="subheadingtxt">' + sub_heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="" width="10" height="10"></button></h4><form class="ui-sortable"></form>')
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        $('section .container h4').each(function (key) {
            key = key + 1
            $(this).text()
            setLocalStorage();
            SortAbleFunction();
            e.preventDefault();
            e.target.reset();
        })
    })
    SortAbleFunction();
});

// sub heading end here :- 

// form section start here :-
$("#formModelId").click(function () {
    formReset()
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    $('.select-sub-heading option').remove()
    $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
    $('.select-form #headings option').remove()
    $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })

    var subheading = [];
    $('.formheading').on("change", function () {
        var heading_in_sub_heading = $('.formheading option:selected').val()
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        subheading = []
        $("section:nth-child(" + heading_in_sub_heading + ") div h4").each(function (key) {
            subheading.push($(this).text())
        })

        $.each(subheading, function (index, itemData) {
            $('#sectionTagId').append($("<option></option>")
                .attr("value", index + 2)
                .text(itemData));
        });
    })
    setLocalStorage();
    SortAbleFunction();
});

$(document).ready(function () {
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.formheading').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })
    var subheading = [];
    $('.formheading').on("change", function () {
        var heading_in_sub_heading = $('.formheading option:selected').val()
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        subheading = []
        $("section:nth-child(" + heading_in_sub_heading + ") div h4").each(function (key) {
            subheading.push($(this).text())
        })
        $.each(subheading, function (index, itemData) {
            $('#sectionTagId').append($("<option></option>")
                .attr("value", index + 2)
                .text(itemData));
        });
    })

    $(".select-form").on('submit', function (e) {
        var frmheading = $('.formheading option:selected').val()
        var frmsh = $('.subheadingform option:selected').val()
        $('.select-input').change(function () {
            var frmchngvalue = $(this).val()
            console.log("options :", frmchngvalue)
        })
        var controlType = $('#controlType').val();
        var inputLabel = $('.labels').val()
        var inputClass = $('.classes').val()
        var InputId = $('.ids').val()
        var inputPlaceholder = $('.placeholders').val()
        var inputValue = $('.values').val()
        var inputName = $('.names').val()
        var element = '<label >' + inputLabel + '</label > <input type="' + controlType + '"  label="' + inputLabel + '" class="' + inputClass + '" id="' + InputId + '" value="' + inputValue + '" name="' + inputName + '" placeholder="' + inputPlaceholder + '"  />'
        $('main section:nth-child(' + frmheading + ') div .container:nth-child(' + (frmsh - 1) + ') form').append('<div class="forminputs ui-sortable ui-sortable-handle">' + element + '<span class="" onclick="removed(this)"><img src="img/delete.png" class="img-fluid" alt="" width="10" height="10"></span></div>')
        setLocalStorage();
        SortAbleFunction();
        e.preventDefault();
        e.target.reset();
    })
    setLocalStorage();
    SortAbleFunction();
});

// form section end here :- 

// input validation start here :- 
$('.select-input').on("change", function () {
    var frmchngvalue = $(this).val()
    var selectValue = frmchngvalue;
    $('#Labels').val("");
    $('#Ids').val("");
    $('#Classes').val("");
    $('#Placeholders').val("");
    $('#Values').val("");
    $('#Names').val("");
    resSet()
    switch (selectValue) {
        case 'button':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.labels').attr('readonly', true);
            break;
        case 'checkbox':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'color':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'date':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'datetime-local':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'radio':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'range':
            resSet()
            $('.placeholders').attr('readonly', true);
            break;
    }
})
// input validation end here :-

// local storage start here :-
function setLocalStorage() {
    var selectValue = $('main').html();
    localStorage.setItem("Heading", selectValue);
};

function getLocalStorage(property) {
    return localStorage.getItem(property);
};

// local storage end here :-

// dragdrop start here :-
function SortAbleFunction() {
    $('main').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        items: '> section ',
    });

    $('section div:first-of-type').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: 'section > div',
        items: 'div',
        dropOnEmpty: true,
        cancel: 'h1, button div .forminputs ',
    });

    $('.subheads-list').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        items: '> .container ',
    });

    $('.subheads-list .container form').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: 'section > div > div > form',
        items: '.forminputs ',
        dropOnEmpty: true,
    });

    $('.container').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: '.container',
        items: '.forminputs',
        dropOnEmpty: false,
        cancel: 'h1, button ',
    });

    setLocalStorage();
}
// drag and drop end here:-


function removeFun(remove) {
    $(remove).parent().siblings().remove();
    $(remove).parent().parent().remove();
    setLocalStorage();
}

function removed(remove) {

    $(remove).parent().remove();
    setLocalStorage();
}

function resSet() {
    $('.placeholders').attr('readonly', false);
    $('.labels').attr('readonly', false);
    $('.values').attr('readonly', false);
}

function formReset() {
    $('.select-form')[0].reset();
}