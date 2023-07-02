let bg_color = document.getElementById('bgColorInput');
let font_color = document.getElementById('fontColorInput');
let font_size = document.getElementById('fontSizeInput');
let font_weight = document.getElementById('fontWeightInput');
let padding = document.getElementById('paddingInput');
let border_radius = document.getElementById('borderRadiusInput');
let custom_button = document.getElementById('customButton');

function applyButton() {
    custom_button.style.backgroundColor = bg_color.value;
    custom_button.style.color = font_color.value;
    custom_button.style.fontSize = font_size.value;
    custom_button.style.fontWeight = font_weight.value;
    custom_button.style.padding = padding.value;
    custom_button.style.borderRadius = border_radius.value;
}