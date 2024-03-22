import { Translator } from "../../../../i18n";
import { VariantType } from "notistack";

export const contactSender = async (
	t: Translator,
	locale: string,
	values: {
		contactName: string,
		contactEmail: string,
		contactMessage: string,
	},
	openSnackbar: (message: string, variant: VariantType) => void,
): Promise<boolean> => {
	const body: {
		contactClientName: string,
		contactClientEmail: string,
		contactClientMessage: string,
		contactClientRegion: string,
		locale: string,
		today: Date,
	} = {
		contactClientName: values.contactName,
		contactClientEmail: values.contactEmail,
		contactClientMessage: values.contactMessage,
		today: new Date(),
		locale: locale,
		contactClientRegion: Intl.DateTimeFormat().resolvedOptions().timeZone,
	}
	try {
		const response: Response = await fetch("/api/sendContactEmail", {
			method: "POST",
			body: JSON.stringify(body)
		});
		if (response.ok || response.status === 200 || response.status === 202) {
			openSnackbar(t("emails.contact.feedback.success"), "success");
			return true;
		} else if (response.status === 500) {
			openSnackbar(t("emails.contact.feedback.unexpectedError"), "error");
			return false;
		};
	} catch (error) {
		console.error(error);
		openSnackbar(t("emails.contact.feedback.unexpectedError").replace("code", error.code), "error");
		return false;
	};
};