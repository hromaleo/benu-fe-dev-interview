import type { InjectionKey, Ref } from "vue";

const headerHeightKey = Symbol("headerHeight") as InjectionKey<Ref<number>>;

export default headerHeightKey;
