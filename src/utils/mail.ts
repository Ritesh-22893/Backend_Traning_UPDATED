import { error } from 'console';
import * as nodemailer from 'nodemailer'
const sendmail = async (Maildetails,callback) => {
    try {
        const transporter = nodemailer.createTransport({
            port:465,
            service:"Gmail",
            host:"smtp.gmail.com",
            secure:true,
            auth:{
                user:'riteshpokhrel73@gmail.com',
                pass:" qtir gbsw komq lyzo"
            }
        })
        const info = await transporter.sendMail(Maildetails)
        callback(info)
}
     catch(error) {
    console.log(error);
}
    

}
export default sendmail 
