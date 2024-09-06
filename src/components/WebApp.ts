import { TypeError, ValueError } from '../errors';

/**
 * Класс WebApp предоставляет доступ к функциональности Telegram WebApp API,
 * что позволяет получать информацию о платформе, темах, настройках, а также управлять
 * различными параметрами мини-приложения.
 *
 * @class
 */
class WebApp {
    private readonly _webApp: globalThis.WebApp;
    private _initData: string;

    /**
     * Создает экземпляр класса WebApp.
     * Инициализирует параметры и проверяет наличие объектов Telegram и Telegram.WebApp.
     *
     * @throws {Error} Если Telegram или его компоненты не определены.
     */
    constructor() {
        if (typeof Telegram === 'undefined') throw new Error('LTelegram: Telegram is not defined.');

        if (typeof Telegram.WebApp === 'undefined') throw new Error('LTelegram: Telegram.WebApp is not defined.');

        this._webApp = Telegram.WebApp;
        this._initData = this._webApp.initData;
    }

    /**
     * Получает строку с необработанными данными, переданными в мини-приложение.
     * Используется для авторизации пользователя при запросах к серверу.
     *
     * @type {string}
     */
    public get initData(): string {
        return this._initData;
    }

    public set initData(value: string) {
        if (typeof value !== 'string') {
            this._initData = this._webApp.initData;
            return;
        }

        this._initData = value;
    }

    /**
     * Возвращает версию API бота, доступную в приложении Telegram пользователя.
     *
     * @type {string}
     */
    public get version(): string {
        return this._webApp.version;
    }

    /**
     * Возвращает объект с входными данными, переданными в мини-приложение.
     *
     * @type {globalThis.WebAppInitData}
     */
    public get initDataUnsafe(): globalThis.WebAppInitData {
        return this._webApp.initDataUnsafe;
    }

    /**
     * Возвращает название платформы, на которой запущено мини-приложение.
     *
     * @type {string}
     */
    public get platform(): string {
        return this._webApp.platform;
    }

    /**
     * Возвращает текущую цветовую схему, используемую в приложении Telegram.
     * Возможные значения: "light" или "dark".
     * Также доступна как переменная CSS `var(--tg-color-scheme)`.
     *
     * @type {"light" | "dark"}
     */
    public get colorScheme(): "light" | "dark" {
        return this._webApp.colorScheme;
    }

    /**
     * Возвращает объект, содержащий текущие параметры темы, используемые в приложении Telegram.
     *
     * @type {globalThis.ThemeParams}
     */
    public get themeParams(): globalThis.ThemeParams {
        return this._webApp.themeParams;
    }

    /**
     * Возвращает флаг, указывающий, развернуто ли мини-приложение до максимально доступной высоты.
     *
     * @type {boolean}
     */
    public get isExpanded(): boolean {
        return this._webApp.isExpanded;
    }

    /**
     * Возвращает текущую высоту видимой области мини-приложения.
     * Также доступно в CSS как переменная `var(--tg-viewport-height)`.
     *
     * @type {number}
     */
    public get viewportHeight(): number {
        return this._webApp.viewportHeight;
    }

    /**
     * Возвращает высоту видимой области мини-приложения в его последнем стабильном состоянии.
     * Также доступно в CSS как переменная `var(--tg-viewport-stable-height)`.
     *
     * @type {number}
     */
    public get viewportStableHeight(): number {
        return this._webApp.viewportStableHeight;
    }

    /**
     * Возвращает текущий цвет фона в формате #RRGGBB.
     *
     * @type {string}
     * @throws {TypeError} Если передано значение не типа string.
     * @throws {ValueError} Если переданное значение не является валидным hex-кодом.
     */
    public get backgroundColor(): string {
        return this._webApp.backgroundColor;
    }

    public set backgroundColor(value: string) {
        if (typeof value !== 'string') {
            throw new TypeError('LTelegram: value must be a string');
        }

        if (!this.isValidHexColor(value)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }

        this._webApp.backgroundColor = value;
    }

    /**
     * Возвращает текущий цвет шапки в формате #RRGGBB.
     *
     * @type {string}
     * @throws {TypeError} Если передано значение не типа string.
     * @throws {ValueError} Если переданное значение не является валидным hex-кодом.
     */
    public get headerColor(): string {
        return this._webApp.headerColor;
    }

    public set headerColor(value: string) {
        if (typeof value !== 'string') {
            throw new TypeError('LTelegram: value must be a string');
        }

        if (!this.isValidHexColor(value)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }

        this._webApp.headerColor = value;
    }

    /**
     * Возвращает флаг, указывающий, разрешено ли диалоговое окно подтверждения
     * при попытке пользователя закрыть мини-приложение.
     *
     * @type {boolean}
     * @throws {TypeError} Если передано значение не типа boolean.
     */
    public get isClosingConfirmationEnabled(): boolean {
        return this._webApp.isClosingConfirmationEnabled;
    }

    public set isClosingConfirmationEnabled(value: boolean) {
        if (typeof value !== 'boolean') {
            throw new TypeError('LTelegram: value must be a boolean');
        }

        this._webApp.isClosingConfirmationEnabled = value;
    }

    /**
     * Возвращает флаг, указывающий, разрешены ли вертикальные свайпы для закрытия
     * или сворачивания мини-приложения. Независимо от этого, пользователь по-прежнему
     * сможет сворачивать и закрывать мини-приложение, проведя пальцем по шапке.
     *
     * @type {boolean}
     * @throws {TypeError} Если передано значение не типа boolean.
     */
    public get isVerticalSwipesEnabled(): boolean {
        return this._webApp.isVerticalSwipesEnabled;
    }

    public set isVerticalSwipesEnabled(value: boolean) {
        if (typeof value !== 'boolean') {
            throw new TypeError('LTelegram: value must be a boolean');
        }

        this._webApp.isVerticalSwipesEnabled = value;
    }

    /**
     * Проверяет, является ли переданное значение валидным hex-кодом цвета.
     *
     * @param {string} value - Значение для проверки.
     * @returns {boolean} True, если значение валидное, иначе false.
     * @private
     */
    private isValidHexColor(value: string): boolean {
        return /^#[0-9A-Fa-f]{6}$/.test(value);
    }
}

export default new WebApp();
