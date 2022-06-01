import NodeType from './type';
import HTMLElement from './html';
/**
 * Node Class as base class for TextNode and HTMLElement.
 */
export default abstract class Node {
    parentNode: HTMLElement;
    abstract nodeType: NodeType;
    childNodes: Node[];
    abstract text: string;
    abstract rawText: string;
    abstract toString(): string;
    constructor(parentNode?: HTMLElement);
    get innerText(): string;
    get textContent(): string;
    set textContent(val: string);
}
