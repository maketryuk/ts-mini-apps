import { TypeError } from '../errors';

/**
 * Класс BackButton предназначен для управления кнопкой "Назад" в Telegram WebApp.
 * Этот класс предоставляет методы для отображения, скрытия кнопки, а также
 * установки callback-функций для обработки событий клика по кнопке.
 *
 * @class
 */
class BackButton {
    private readonly _backButton: globalThis.BackButton;

    /**
     * Создает экземпляр класса BackButton.
     * Если Telegram, Telegram.WebApp или Telegram.WebApp.BackButton не определены,
     * выбрасывает ошибку.
     *
     * @throws {Error} Если Telegram или его компоненты не определены.
     */
    constructor() {
        if (typeof Telegram === 'undefined') throw new Error('LTelegram: Telegram is not defined.');

        if (typeof Telegram.WebApp === 'undefined') throw new Error('LTelegram: Telegram.WebApp is not defined.');

        if (typeof Telegram.WebApp.BackButton === 'undefined') throw new Error('LTelegram: Telegram.WebApp.BackButton is not defined.');

        this._backButton = Telegram.WebApp.BackButton;
    }

    /**
     * Возвращает флаг, отображается ли кнопка "Назад".
     * Можно использовать как геттер, так и сеттер для управления видимостью кнопки.
     *
     * @type {boolean}
     * @throws {TypeError} Если передано не boolean значение.
     */
    public get isVisible(): boolean {
        return this._backButton.isVisible;
    }

    public set isVisible(value: boolean) {
        if (typeof value !== 'boolean') throw new TypeError('LTelegram: value must be a boolean');

        this._backButton.isVisible = value;
    }

    /**
     * Включает отображение кнопки "Назад".
     *
     * @returns {void}
     */
    public show(): void {
        this._backButton.show();
    }

    /**
     * Выключает отображение кнопки "Назад".
     *
     * @returns {void}
     */
    public hide(): void {
        this._backButton.hide();
    }

    /**
     * Добавляет callback-функцию на событие клика по кнопке "Назад".
     *
     * @param {Function} callback Функция, которая будет вызвана при клике по кнопке.
     * @returns {void}
     */
    public onClick(callback: () => void): void {
        this._backButton.onClick(callback);
    }

    /**
     * Удаляет ранее добавленный callback с события клика по кнопке "Назад".
     *
     * @param {Function} callback Функция, которую необходимо удалить.
     * @returns {void}
     */
    public offClick(callback: () => void): void {
        this._backButton.offClick(callback);
    }

    /**
     * Добавляет callback-функцию на одноразовое событие клика по кнопке "Назад".
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
}

export default new BackButton();
