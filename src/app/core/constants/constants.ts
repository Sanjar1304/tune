
export class Constants {
    public static readonly LOCAL_STORAGE_KEYS = {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        language: 'language',
    };
    public static readonly LANGUAGES = {
        uz: 'O‘zbekcha',
        en: 'English',
        ru: 'Русский',
    };

    public static readonly DEFAULT_LANGUAGE: keyof typeof Constants.LANGUAGES =
        'uz';
    public static readonly GOOGLE_TRANSLATION_FROM: keyof typeof Constants.LANGUAGES =
        'uz';
    public static LanguageList = Object.keys(Constants.LANGUAGES) as Array<
        keyof MultiLanguageField
    >;
    public static readonly LANGUAGE_KEYS: LanguageKeys = ['uz', 'ru', 'en'];
}

export type LanguageKeys = Array<keyof typeof Constants.LANGUAGES>;

export interface MultiLanguageField {
    uz?: string | undefined;
    ru?: string | undefined;
    en?: string | undefined;
}