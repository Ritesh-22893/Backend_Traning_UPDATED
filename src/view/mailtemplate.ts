const HTML_template = (text, message) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome page</title>
        <style>
            body {
                font-family: cursive;
                margin: 0;
                padding: 0;
            }
            
            .container {
                margin: 4% auto;
                max-width: 70%;
                background-color: rgb(230, 240, 240);
                border-radius: 10px;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
                padding: 20px;
            }
            
            .exitbtn {
                font-family: cursive;
                font-size: 20px;
                background-color: red;
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
            }
            
            .headingText {
                color: rgb(162, 85, 165);
            }
            
            .headingText span {
                color: rgb(117, 170, 48);
            }
            
            .subheading {
                color: rgb(31, 43, 216);
            }
            
            .paragraph p {
                font-size: 16px;
                line-height: 1.6;
            }
            
            .additionalInfo {
                margin-top: 20px;
                text-align: center;
            }
            
            .moreinfo, .exploresite, .wlcmbtn {
                font-family: cursive;
                font-size: 16px;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            
            .moreinfo {
                font-weight: 700;
                background-color: blueviolet;
                color: beige;
            }
            
            .exploresite {
                font-weight: 900;
                background-color: rgb(252, 248, 248);
                color: blueviolet;
                margin-left: 10px;
            }
            
            .wlcmbtn {
                background-color: rgb(230, 240, 240);
                color: rgb(121, 7, 121);
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
            }
            
            .openwelcomepage {
                text-align: center;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="exiticon" style="text-align: right;">
                <input class="exitbtn" type="button" value="X">
            </div>
            <div class="heading">
                <h1 class="headingText">Welcome to <span>CodingHub.com</span></h1>
                <h2 class="subheading">Feel free to explore ... </h2>
            </div>
            <div class="paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae natus eveniet repellendus inventore dolorum tempore, pariatur omnis repellat. Nesciunt officiis et blanditiis eius voluptatibus quo dolores deleniti odit, quas magni dolorem eos vitae aliquid est quia accusamus veritatis sint beatae dolore inventore ratione minus nisi neque temporibus. In excepturi magni perferendis quisquam commodi magnam quae asperiores ullam quos odit?</p>
            </div>
            <div class="additionalInfo">
                <input class="moreinfo" type="button" value="Continue Reading">
                <input class="exploresite" type="button" value="Surf Website">
            </div>
        </div>
        <div class="openwelcomepage">
            <input class="wlcmbtn" type="button" value="Open Welcome Page">
        </div>
    
        <script>
            let btnstate = document.querySelector(".exitbtn");
            let contents = document.querySelector(".container");
            let wlcmpage = document.querySelector(".openwelcomepage");
            wlcmpage.style.display = "none";
            
            btnstate.addEventListener("click", () => {
                contents.style.display = "none";
                wlcmpage.style.display = "block";
            });
            
            wlcmpage.addEventListener("click", () => {
                contents.style.display = "block";
                wlcmpage.style.display = "none";
            });
        </script>
    
        <h1>${message}</h1>
        <h1>${text}</h1>
    </body>
    
    </html>`;
}

export default HTML_template;
