exports.registerEmailParams = (name, email, token) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_TO],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data:
                        `   <html>
                                <h1 style="color: teal;">Hello ${name}, please verify your email address</h1>
                                <p style="color: teal;">Please use the following link to complete your registration</p>
                                <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                            </html>
                        `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Complete your registration"
            }
        }
    }
}

exports.forgotPasswordEmailParams = (email, token) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_TO],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data:
                        `   <html>
                                <p style="color: #EA0000;">Please use the following link to reset your password</p>
                                <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
                            </html>
                        `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Reset your password"
            }
        }
    }
}