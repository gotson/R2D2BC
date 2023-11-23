declare class GrabToPan {
    #private;
    private element;
    private document;
    private readonly onActiveChanged;
    private active;
    private scrollLeftStart;
    private scrollTopStart;
    private clientXStart;
    private clientYStart;
    private readonly overlay;
    private readonly _endPan;
    private readonly _onMouseDown;
    private readonly _onMouseMove;
    /**
     * Construct a GrabToPan instance for a given HTML element.
     * @param {Element} options.element
     * @param {function} [options.ignoreTarget] - See `ignoreTarget(node)`.
     * @param {function(boolean)} [options.onActiveChanged] - Called when
     *   grab-to-pan is (de)activated. The first argument is a boolean that
     *   shows whether grab-to-pan is activated.
     */
    constructor(options: any);
    /**
     * Bind a mousedown event to the element to enable grab-detection.
     */
    activate(): void;
    /**
     * Removes all events. Any pending pan session is immediately stopped.
     */
    deactivate(): void;
    toggle(): void;
    /**
     * Whether to not pan if the target element is clicked.
     * Override this method to change the default behaviour.
     *
     * @param {Element} node - The target of the event.
     * @returns {boolean} Whether to not react to the click event.
     */
    ignoreTarget(node: any): any;
}
export { GrabToPan };
