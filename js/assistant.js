sentences = [
    "News regarding COVID-19 can be found on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletters</a>.",
    "If you want to know who we are and what we do, check our <a style='text-decoration: underline' href='./about.html'>about page</a>.",
    "To learn more about our doctors, check out our <a style='text-decoration: underline' href='./index.html#doctor-description'>doctors service</a>.",
    "Ways to contact us can be found <a style='text-decoration: underline' href='javascript:document.getElementById(\"contact\").scrollIntoView()'>here</a>.",
    "Learn more about our appointments <a style='text-decoration: underline' href='./index.html#appointment-description'>here</a>.",
    "At Epanos, we make sure to help diagnose your condition. More about this can be found <a style='text-decoration: underline' href='./index.html#diagnosis-description'>here</a>.",
    "Find some of our latest articles on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletter</a>.",
    "Information about vaccines can be found on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletter</a>."
]
function generateResponse(msg) {
    if (/reference|judg|copyright|checklist|grade|grading/.test(msg)) return "Are you a judge? See our references and checklists <a style='text-decoration: underline' href='./references.html'>here</a>.";
    else if (/cov|corona|sars|-19/.test(msg)) return sentences[0];
    else if (/who|about/.test(msg)) return sentences[1];
    else if (/doctor|logist|ician/.test(msg)) return sentences[2];
    else if (/contact|call|phone|media|message/.test(msg)) return sentences[3];
    else if (/appointment|schedule|book/.test(msg)) return sentences[4];
    else if (/diagnos/.test(msg)) return sentences[5];
    else if (/news|article/.test(msg)) return sentences[6];
    else if (/vaccin/.test(msg)) return sentences[7];
    else return sentences[Math.floor(Math.random() * sentences.length)]
}

$('#chat').on('submit', (e) => {
    e.preventDefault()
    var msg = $('#chatbar').val().replace("<", "&#60;")
    if (msg.split(" ").join("") != "") {
        $('#chatbox-left').append(`<div class="message"><div class="clientmessage"><b>You</b>: ${msg}</div></div><br>`);
        $('#chatbox-right').append(`<div class="message-invis"><div class="botmessage"><b>You</b>: ${msg}</div></div><br>`);
        $('#botimage-surrounding').css('animation-name', 'none')
        $('#botimage-surrounding').css('animation-duration', 'none')
        var response = generateResponse(msg);
        $('#chatbox-left').append(`<div class="message-invis"><div class="botmessage"><b>Virtual Assistant</b>: ${response}</div></div><br>`);
        var interval = setInterval(() => {
            $('#botimage-surrounding').css('animation-name', 'colorchange')
            $('#botimage-surrounding').css('animation-duration', '1s')
            $('#chatbox-right').append(`<div class="message"><div class="botmessage"><b>Virtual Assistant</b>: ${response}</div></div><br>`);
            $('#chatbar').val('')
            $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
            clearInterval(interval)
        }, 30);
       
    }
})