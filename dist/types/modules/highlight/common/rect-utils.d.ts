export interface IRectSimple {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IRect extends IRectSimple {
    bottom: number;
    right: number;
}
export declare function getClientRectsNoOverlap(range: Range, doNotMergeHorizontallyAlignedRects: boolean): IRect[];
export declare function getClientRectsNoOverlap_(clientRects: DOMRectList, doNotMergeHorizontallyAlignedRects: boolean): IRect[];
export declare function rectIntersect(rect1: IRect, rect2: IRect): IRect;
export declare function rectSubtract(rect1: IRect, rect2: IRect): IRect[];
export declare function rectContainsPoint(rect: IRect, x: number, y: number, tolerance: number): boolean;
export declare function rectContains(rect1: IRect, rect2: IRect, tolerance: number): boolean;
export declare function getBoundingRect(rect1: IRect, rect2: IRect): IRect;
export declare function rectsTouchOrOverlap(rect1: IRect, rect2: IRect, tolerance: number): boolean;
export declare function mergeTouchingRects(rects: IRect[], tolerance: number, doNotMergeHorizontallyAlignedRects: boolean): IRect[];
export declare function replaceOverlappingRects(rects: IRect[]): IRect[];
export declare function getRectOverlapX(rect1: IRect, rect2: IRect): number;
export declare function getRectOverlapY(rect1: IRect, rect2: IRect): number;
export declare function removeContainedRects(rects: IRect[], tolerance: number): IRect[];
export declare function checkOverlaps(rects: IRect[]): void;
