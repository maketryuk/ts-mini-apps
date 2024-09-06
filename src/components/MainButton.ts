import { TypeError, ValueError } from '../errors';

/**
 * Тип для параметров MainButton.
 */
type Color = string;

interface MainButtonParams {
    text?: string;
    color?: Color;
    text_color?: Color;
    is_active?: boolean;
    is_visible?: boolean;
}

/**
 * Класс MainButton предназначен для управления основной кнопкой в Telegram WebApp.
 * Этот класс предоставляет методы для управления текстом кнопки, цветами, видимостью,
 * активностью, а также для добавления обработчиков событий.
 *
 * @class
 */
class MainButton {
    private readonly _mainButton: globalThis.MainButton;

    /**
     * Создает экземпляр класса MainButton.
     * Если Telegram, Telegram.WebApp или Telegram.WebApp.MainButton не определены,
     * выбрасывает ошибку.
     *
     * @throws {Error} Если Telegram или его компоненты не определены.
     */
    constructor() {
        if (typeof Telegram === 'undefined') throw new Error('LTelegram: Telegram is not defined.');

        if (typeof Telegram.WebApp === 'undefined') throw new Error('LTelegram: Telegram.WebApp is not defined.');

        if (typeof Telegram.WebApp.MainButton === 'undefined') throw new Error('LTelegram: Telegram.WebApp.MainButton is not defined.');

        this._mainButton = Telegram.WebApp.MainButton;

        this.isVisible = true;
    }

    /**
     * Текущий текст кнопки.
     * По умолчанию установлено значение "Продолжить".
     */
    public get text(): string {
        return this._mainButton.text;
    }

    public set text(value: string) {
        if (typeof value !== 'string') throw new TypeError('LTelegram: value must be a string');

        this._mainButton.text = value;
    }

    /**
     * Текущий цвет кнопки в формате hex.
     * По умолчанию установлено themeParams.button_color
     */
    public get color(): string {
        return this._mainButton.color;
    }

    public set color(value: string) {
        if (!this.isValidHexColor(value)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }

        this._mainButton.color = value;
    }

    /**
     * Текущий цвет текста кнопки в формате hex.
     * По умолчанию установлено themeParams.button_text_color
     */
    public get textColor(): string {
        return this._mainButton.textColor;
    }

    public set textColor(value: string) {
        if (!this.isValidHexColor(value)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }

        this._mainButton.textColor = value;
    }

    /**
     * Флаг указывающий, отображать ли кнопку.
     */
    public get isVisible(): boolean {
        return this._mainButton.isVisible;
    }

    public set isVisible(value: boolean) {
        if (typeof value !== 'boolean') throw new TypeError('LTelegram: value must be a boolean');

        this._mainButton.isVisible = value;
    }

    /**
     * Флаг указывающий, включена ли кнопка.
     */
    public get isActive(): boolean {
        return this._mainButton.isActive;
    }

    public set isActive(value: boolean) {
        if (typeof value !== 'boolean') throw new TypeError('LTelegram: value must be a boolean');

        this._mainButton.isActive = value;
    }

    /**
     * Флаг указывающий, отображать ли спиннер.
     */
    public get isProgressVisible(): boolean {
        return this._mainButton.isProgressVisible;
    }

    public set isProgressVisible(value: boolean) {
        if (typeof value !== 'boolean') throw new TypeError('LTelegram: value must be a boolean');

        this._mainButton.isProgressVisible = value;
    }

    /**
     * Устанавливает текст кнопки.
     *
     * @param {string} value - Текст кнопки.
     * @throws {TypeError} Если передано значение не типа string.
     */
    public setText(value: string): void {
        if (typeof value !== 'string') throw new TypeError('LTelegram: value must be a string');

        this._mainButton.setText(value);
    }

    /**
     * Включает отображение основной кнопки.
     *
     * @returns {void}
     */
    public show(): void {
        this._mainButton.show();
    }

    /**
     * Выключает отображение основной кнопки.
     *
     * @returns {void}
     */
    public hide(): void {
        this._mainButton.hide();
    }

    /**
     * Добавляет callback-функцию на событие клика по основной кнопке.
     *
     * @param {Function} callback Функция, которая будет вызвана при клике по кнопке.
     * @returns {void}
     */
    public onClick(callback: () => void): void {
        this._mainButton.onClick(callback);
    }

    /**
     * Удаляет ранее добавленный callback с события клика по основной кнопке.
     *
     * @param {Function} callback Функция, которую необходимо удалить.
     * @returns {void}
     */
    public offClick(callback: () => void): void {
        this._mainButton.offClick(callback);
    }

    /**
     * Добавляет callback-функцию на одноразовое событие клика по основной кнопке.
     * После первого клика callback будет автоматически удален.
     *
     * @param {Function} callback Функция, которая будет вызвана при клике по кнопке.
     * @returns {void}
     */
    public onceClick(callback: () => void): void {
        const handleClick = (): void => {
            callback();
            this.offClick(handleClick);
        };

        this.onClick(handleClick);
    }

    /**
     * Отключает основную кнопку.
     *
     * @returns {void}
     */
    public disable(): void {
        this._mainButton.disable();
    }

    /**
     * Включает основную кнопку.
     *
     * @returns {void}
     */
    public enable(): void {
        this._mainButton.enable();
    }

    /**
     * Включает отображение прогресса на кнопке.
     *
     * @param {boolean} [leaveActive] - Флаг, указывающий, должна ли кнопка оставаться активной.
     * @returns {void}
     */
    public showProgress(leaveActive?: boolean): void {
        this._mainButton.showProgress(leaveActive);
    }

    /**
     * Выключает отображение прогресса на кнопке.
     *
     * @returns {void}
     */
    public hideProgress(): void {
        this._mainButton.hideProgress();
    }

    /**
     * Устанавливает параметры кнопки.
     *
     * @param {MainButtonParams} params - Объект с параметрами для настройки кнопки.
     * @throws {TypeError} Если параметры имеют некорректные типы данных.
     * @throws {ValueError} Если параметры имеют некорректные значения.
     */
    public setParams(params: MainButtonParams): void {
        if (params.text !== undefined && typeof params.text !== 'string') {
            throw new TypeError('LTelegram: text must be a string');
        }
        if (params.color !== undefined && !this.isValidHexColor(params.color)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }
        if (params.text_color !== undefined && !this.isValidHexColor(params.text_color)) {
            throw new ValueError('LTelegram: Invalid hex color value');
        }
        if (params.is_active !== undefined && typeof params.is_active !== 'boolean') {
            throw new TypeError('LTelegram: is_active must be a boolean');
        }
        if (params.is_visible !== undefined && typeof params.is_visible !== 'boolean') {
            throw new TypeError('LTelegram: is_visible must be a boolean');
        }

        this._mainButton.setParams(params);
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

export default new MainButton();
