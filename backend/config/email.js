exports.message =(email,full_name,link)=>{
             return({
                subject:"Reset ShopNet Password",
                from:"bikorimanaxavier@gmail.com",
                to:email,
                html:`
                    <DOCTYPE html>
                    <html lang='en'>
                      <head>
                         <meta charset='UTF-8'>
                         <title>Reset ShopNet Password</title>
                         <link rel="preconnect" href="https://fonts.googleapis.com">
                         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                         <link href="https://fonts.googleapis.com/css2?family=Andika&display=swap" rel="stylesheet">
                         </style>
                      </head>
                    <body style="font-family: 'Andika', sans-serif;font-size:16px">
                       <p>Dear ${full_name},</p>

                        <p>We have received a request to reset your password for ShopNet. To reset your password, please click on the following link:<p>

                        <p style="font-size:13px"><a href='${link}'>${link}</a><p>

                        <p>Please note that this link will expire in 15 minutes. If you did not request a password reset, please ignore this email.</p>

                        <p>Thank you,</p>

                        <p>ShopNet Techical Support</p>
                    </body>
                    </html>
                `
            });
};