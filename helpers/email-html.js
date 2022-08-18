

const emailTemplate = (email, code, title, name, lastName) => {

    let mensaje = '';

    if (title === 'REGISTRO') {
        mensaje = `
        <tbody>
        <tr>
            <td></td>
            <td style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Hola,</p>
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Alguien esta intentando registrarse en una cuenta para asistir a un evento virtual con <a href="mailto:${email}" target="_blank">${email}</a>.
                    Si fuiste vos ingresa este codigo de confirmación en la aplicación:
                </p>
            </td>
        </tr>
        <tr>
            <td></td>
            <td style="padding:10px;color:#565a5c;font-size:32px;font-weight:500;text-align:center;padding-bottom:25px">
                ${code}</td>
        </tr>
    </tbody>
        `
    }

    else {
        mensaje = `
        <tbody>
        <tr>
            <td></td>
            <td style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Hola, ${name} ${lastName}</p>
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Te has registrado con exito para asitir al evento virtual que se efectuara el dia de mañana.
                </p>
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Nos vemos pronto.
                </p>
                <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">
                    Saludos.
                </p>
            </td>
        </tr>
        <tr>
            <td></td>
        </tr>
    </tbody>
        `
    }
    return (
        `
    <div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
        <table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7650884979018722939email_table"
            style="border-collapse:collapse">
            <tbody>
                <tr>
                    <td id="m_-7650884979018722939email_content"
                        style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
                        <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                            <tbody>
                                <tr>
                                    <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td height="1" colspan="3" style="line-height:1px"></td>
                                </tr>
                
                                <tr>
                                    <td>
                                        <table border="0" width="430" cellspacing="0" cellpadding="0"
                                            style="border-collapse:collapse;margin:0 auto 0 auto">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table border="0" width="430px" cellspacing="0" cellpadding="0"
                                                            style="border-collapse:collapse;margin:0 auto 0 auto;width:430px">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="15" style="display:block;width:15px">
                                                                        &nbsp;&nbsp;&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="12" style="display:block;width:12px">
                                                                        &nbsp;&nbsp;&nbsp;</td>
                                                                    <td>
                                                                        <table border="0" width="100%" cellspacing="0"
                                                                            cellpadding="0"
                                                                            style="border-collapse:collapse">
                                                                            ${mensaje}
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table border="0" cellspacing="0" cellpadding="0"
                                            style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px">
                                            <tbody>
                                                <tr>
                                                    <td height="4" style="line-height:4px" colspan="3">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td width="15px" style="width:15px"></td>
                                                    <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                    <td style="text-align:center">
                                                        
                                                        <div style="height:10px"></div>
                                                        
                                                        <div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">
                                                            This message was sent to <a
                                                                style="color:#abadae;text-decoration:underline">${email}</a>.<br>
                                                        </div>
                                                    </td>
                                                    <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                                    <td width="15px" style="width:15px"></td>
                                                </tr>
                                                <tr>
                                                    <td height="32" style="line-height:32px" colspan="3">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table><span><img
                                src="https://ci3.googleusercontent.com/proxy/IO08w6NqM60SnsjX8DMsoh2mL_8SPu8vo0dd1ez8giOEUjAI7cQm6cwqDxFxTLlrfmQOiDgMygT4UMRlrzK-3jQaYT-WGYV35yiCVW7IIt4zS6ZVBxk3r3pC253ecZosmbWgcRdrdySxlsdg3RH_gZaUOOb1=s0-d-e1-ft#https://www.facebook.com/email_open_log_pic.php?mid=5e3518732e829G24bc2cdafa4000G5e351d0c8eafcG37f"
                                style="border:0;width:1px;height:1px" class="CToWUd"></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `);
}

module.exports = {
    emailTemplate
};