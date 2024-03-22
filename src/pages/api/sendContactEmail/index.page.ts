import mail from "@sendgrid/mail";
import { utcToZonedTime, format } from "date-fns-tz";
import { NextApiRequest, NextApiResponse } from "next";
import { getTranslator, Translator, dictionaries } from "../../../i18n";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const sendContactEmail = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {
			contactClientName,
			contactClientEmail,
			contactClientMessage,
			contactClientRegion,
			locale,
			today,
		}: {
			contactClientName: string,
			contactClientEmail: string,
			contactClientMessage: string,
			contactClientRegion: string,
			locale: string,
			today: string,
		} = JSON.parse(req.body);

		const dictionary = await dictionaries[locale]();
		const t: Translator = getTranslator(dictionary);

		const userToday: Date = utcToZonedTime(new Date(today), contactClientRegion);
		const leoToday: Date = utcToZonedTime(new Date(today), "America/Sao_Paulo");

		const msgLeo: {
			to: string[],
			from: string,
			subject: string,
			text: string,
			html: string
		} = {
			to: [
				process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
			],
			from: `Leonardo Jacomussi <dev@leonardojacomussi.com>`,
			subject: "Contato - Site",
			text: `Interessado(a)\nNome: ${contactClientName}\nE-mail: ${contactClientEmail}\nMensagem: ${contactClientMessage}\nRegião: ${contactClientRegion}\nEnviado em ${format(leoToday, "dd/MM/yyyy HH:mm:ss")}.`,
			html: `
				<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
				<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
				
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Syne:wght@500;600;700;800&display=swap"
						rel="stylesheet" />
				</head>
				
				<body
					style="width: 100% !important; margin: 0px !important; padding: 0px !important; border: 0px; font-family: 'Syne', sans-serif !important; font-size: 18px !important; color: #141216;">
				
					<table
						style="margin: auto; width: auto; max-width: 700px; color: #141216; background-color: #F2F2F2; border-radius: 0px; padding: 0px; border-collapse: separate; border-spacing: 0px; empty-cells: show;">
						<tr>
							<td>
								<table style="width: 100%;border-spacing: 0px;">
									<tr>
										<td style="padding: 0px; padding-left: 45px; padding-top: 25px; margin: 0px;">
											<a href="#">
												<img src="https://storage.googleapis.com/leonardo-jacomussi-site-public/template-email-v1/logo.png"
													alt="Leonardo Jacomussi" style="max-width: 100%; max-height: 100%;">
											</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<table style="margin: auto; padding: 20px; border-collapse: separate; border-spacing: 25px;">
									<tr>
										<td>
											<h1
												style="font-family: 'Syne', sans-serif; font-size: 23px; font-weight: 600; line-height: 100%; letter-spacing: 0.15%; color: #7B70C7;">
												Hey! 👋🏽
											</h1>
										</td>
									</tr>
									<tr>
										<td>
											Alguém entrou em contatdo pelo site.
										</td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<td style="font-weight: bold;">
											Mensagem recebida:
										</td>
									</tr>
									<tr>
										<td style="width: 100%;">
											<table
												style="margin: auto; width: 100%; border: 0.5px solid #141216; border-radius: 10px; padding: 5px; border-collapse: separate; border-spacing: 10px;">
												<tr>
													<td>
														Nome:
													</td>
													<td>
														${contactClientName}
													</td>
												</tr>
												<tr>
													<td>
														E-mail:
													</td>
													<td>
														<p>
															<a style="color: #141216; text-decoration: none;">${contactClientEmail}</a>
														</p>
													</td>
												</tr>
												<tr>
													<td>
														Mensagem:
													</td>
													<td>
														"${contactClientMessage.replace(/\n/g, "<br />")}"
													</td>
												</tr>
												<tr>
													<td style="white-space: nowrap;">
														Enviado em:
													</td>
													<td>
														${format(leoToday, "dd/MM/yyyy HH:mm:ss")}
													</td>
												</tr>
												<tr>
													<td style="white-space: nowrap;">
														Região:
													</td>
													<td>
														${contactClientRegion}
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<td style="color: #141216 !important; font-size: 16px; white-space: nowrap;">
											----- Não responda este email -----
										</td>
									</tr>
									<tr>
										<td>
											Atenciosamente,
										</td>
									</tr>
									<tr>
										<td>
											<a href="https://www.leonardojacomussi.com" target="_blank">
												<img
													src="https://storage.googleapis.com/leonardo-jacomussi-site-public/template-email-v1/signature.png"
													alt="Leonardo Jacomussi" style="max-width: 250px !important;">
											</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</body>
				
				</html>
				`,
		};

		const msgClient: {
			to: string[],
			from: string,
			subject: string,
			text: string,
			html: string
		} = {
			to: [
				contactClientEmail
			],
			from: `Leonardo Jacomussi <dev@leonardojacomussi.com>`,
			subject: t("emails.contact.subject"),
			text: `${t("emails.contact.hello")} ${contactClientName}.\n${t("emails.contact.intro")}\n\n----------------------\n${t("emails.contact.messageReceived")}\n${t("emails.contact.name")}: ${contactClientName}\n${t("emails.contact.email")}: ${contactClientEmail}\n${t("emails.contact.message")}: "${contactClientMessage}"\n${t("emails.contact.sentIn")} ${format(userToday, "dd/MM/yyyy HH:mm:ss")}.`,
			html: `
				<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
				<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
				
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Syne:wght@500;600;700;800&display=swap"
						rel="stylesheet" />
				</head>
				
				<body
					style="width: 100% !important; margin: 0px !important; padding: 0px !important; border: 0px; font-family: 'Syne', sans-serif !important; font-size: 18px !important; color: #141216;">
				
					<table
						style="margin: auto; width: auto; max-width: 700px; color: #141216; background-color: #F2F2F2; border-radius: 0px; padding: 0px; border-collapse: separate; border-spacing: 0px; empty-cells: show;">
						<tr>
							<td>
								<table style="width: 100%;border-spacing: 0px;">
									<tr>
										<td style="padding: 0px; padding-left: 45px; padding-top: 25px; margin: 0px;">
											<a href="#">
												<img src="https://storage.googleapis.com/leonardo-jacomussi-site-public/template-email-v1/logo.png"
													alt="Leonardo Jacomussi" style="max-width: 100%; max-height: 100%;">
											</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<table style="margin: auto; padding: 20px; border-collapse: separate; border-spacing: 25px;">
									<tr>
										<td>
											<h1
												style="font-family: 'Syne', sans-serif; font-size: 23px; font-weight: 600; line-height: 100%; letter-spacing: 0.15%; color: #7B70C7;">
												${t("emails.contact.hello")} ${contactClientName}. 👋🏽
											</h1>
										</td>
									</tr>
									<tr>
										<td>
											${t("emails.contact.intro")}
										</td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<td style="font-weight: bold;">
											${t("emails.contact.messageReceived")}:
										</td>
									</tr>
									<tr>
										<td style="width: 100%;">
											<table
												style="margin: auto; width: 100%; border: 0.5px solid #141216; border-radius: 10px; padding: 5px; border-collapse: separate; border-spacing: 10px;">
												<tr>
													<td>
														${t("emails.contact.name")}:
													</td>
													<td>
														${contactClientName}
													</td>
												</tr>
												<tr>
													<td>
														${t("emails.contact.email")}:
													</td>
													<td>
														<p>
															<a style="color: #141216; text-decoration: none;">${contactClientEmail}</a>
														</p>
													</td>
												</tr>
												<tr>
													<td>
														${t("emails.contact.message")}:
													</td>
													<td>
														"${contactClientMessage.replace(/\n/g, "<br />")}"
													</td>
												</tr>
												<tr>
													<td style="white-space: nowrap;">
														${t("emails.contact.sentIn")}:
													</td>
													<td>
														${format(userToday, "dd/MM/yyyy HH:mm:ss")}
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<td style="color: #141216 !important; font-size: 16px; white-space: nowrap;">
											----- ${t("emails.contact.dontReply")} -----
										</td>
									</tr>
									<tr>
										<td>
											${t("emails.contact.bestRegards")},
										</td>
									</tr>
									<tr>
										<td>
											<a href="https://www.leonardojacomussi.com" target="_blank">
												<img
													src="https://storage.googleapis.com/leonardo-jacomussi-site-public/template-email-v1/signature.png"
													alt="Leonardo Jacomussi" style="max-width: 250px !important;">
											</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</body>
				
				</html>
				`,
		}
		const responseLeo = await mail.send(msgLeo);
		const responseClient = await mail.send(msgClient);
		res.status(responseLeo[0].statusCode).json({ status: "Ok" });
	} catch (error) {
		// console.log("error: ", error)
		res.status(500).json({ body: { status: "Error", error: error } });
	};
};

export default sendContactEmail;