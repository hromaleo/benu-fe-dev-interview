import { i18n } from "@/translations";

export default function learnMore() {
  alert("So you want to learn more. Switching to your native language!");
  i18n.global.locale = "cs";
}
