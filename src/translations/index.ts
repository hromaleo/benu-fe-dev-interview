import { createI18n } from "vue-i18n";
import cs from "./czech";
import en from "./english";

const messages = {
  cs,
  en,
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const { t, tc } = i18n.global;

export { i18n, t, tc };
