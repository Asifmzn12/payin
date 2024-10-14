(function(){
    const fonts = ["cursive"];
    let captchaValue = "";
    
    function gencaptcha() {
        
        let value = Math.floor(100000 + Math.random() * 900000);
        captchaValue = value.toString(); 
    }

    function setcaptcha() {
        let html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span
                style="
                transform:rotate(${rotate}deg);
                font-family:${fonts[font]};
                "
               >${char} </span>`;
        }).join("");
        document.querySelector(".login_form #captcha .preview").innerHTML = html;
    }

    function initCaptcha() {
        document.querySelector(".login_form #captcha .captcha_refersh").addEventListener("click", function(){
            gencaptcha();
            setcaptcha();
        });

        gencaptcha();
        setcaptcha();
    }

    initCaptcha();

    document.querySelector(".login_form .form_button").addEventListener("click", function() {
        let inputcaptchavalue = document.querySelector(".login_form #captcha input").value;

        if (inputcaptchavalue === captchaValue) {
            alert("Log in success");
        } else {
            alert("Invalid Captcha");
        }
    });
})();
