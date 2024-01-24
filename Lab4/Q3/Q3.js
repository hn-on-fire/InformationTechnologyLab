
$(document).ready(function() {
    var greet = $("#greet");
    var colorSelect = $("#color-select");
    var fontSelect = $("#font-select");
    var sizeInput = $("#size-input");
    var imageCheckbox = $("#image-checkbox");
    var cardTitle = $("#card-title");
    var cardText = $("#card-text");
    var cardImage = $("#card-image");
    $("#greet").on('keyup', function(){
        cardText.text(this.value)
    });
    function updateCardStyle() {
        var color = colorSelect.val();
        var font = fontSelect.val();
        var size = sizeInput.val();
        
        cardTitle.css("color", color);
        cardText.css("color", color);
        cardTitle.css("font-family", font);
        cardText.css("font-family", font);
        cardTitle.css("font-size", size + "px");
        cardText.css("font-size", size + "px");
    }

    function updateCardImage() {
        var showImage = imageCheckbox.prop("checked");

        if (showImage) {
            cardImage.show();
        } else {
            cardImage.hide();
        }
    }

    updateCardStyle();
    updateCardImage();

    colorSelect.change(updateCardStyle);
    fontSelect.change(updateCardStyle);
    sizeInput.change(updateCardStyle);
    imageCheckbox.change(updateCardImage);
});
