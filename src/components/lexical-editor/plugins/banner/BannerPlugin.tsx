import {
	$createParagraphNode,
	$getSelection,
	$isRangeSelection,
	COMMAND_PRIORITY_EDITOR,
	createCommand,
	EditorConfig,
	ElementNode,
	LexicalEditor,
	LexicalNode,
	NodeKey, ParagraphNode, RangeSelection
} from "lexical";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect} from "react";
import {$setBlocksType} from "@lexical/selection";

export const INSERT_BANNER_COMMAND = createCommand('INSERT_BANNER_COMMAND');

export function BannerPlugin() {
	const [editor] = useLexicalComposerContext();
	if (!editor.hasNode(BannerNode)) {
		throw new Error('BannerPlugin: BannerNode not registered on editor');
	}
	useEffect(() => {
		return editor.registerCommand(INSERT_BANNER_COMMAND, () => {
				const selection = $getSelection();
				if ($isRangeSelection(selection)) {
					$setBlocksType(selection, $createBannerNode)
				}
				// true: only this command is applied, stop dispatch other command
				// false: allow other command dispatched
				return true
			},
			COMMAND_PRIORITY_EDITOR)
	})
	return <></>
}

export class BannerNode extends ElementNode {
	constructor(key?: NodeKey) {
		super(key);
	}

	static getType(): string {
		return 'banner-node';
	}

	static clone(node: BannerNode): BannerNode {
		return new BannerNode(node.__key)
	}

	createDOM(_config: EditorConfig, _editor: LexicalEditor): HTMLElement {
		const element = document.createElement('div');
		element.className = _config.theme.banner;
		return element;
	}

	collapseAtStart(selection: RangeSelection): boolean {
		const paragraph = $createParagraphNode();
		const children = this.getChildren();
		children.forEach((child) => paragraph.append(child));
		this.replace(paragraph);
		return true;
	}

	insertNewAfter(_: RangeSelection, restoreSelection: boolean): ParagraphNode {
		const newElement = $createParagraphNode();
		const direction = this.getDirection();
		newElement.setDirection(direction);
		this.insertAfter(newElement, restoreSelection);
		return newElement;
	}
}

export function $createBannerNode(): BannerNode {
	return new BannerNode();
}

export function $isBannerNode(node: LexicalNode | undefined | null): node is BannerNode {
	return node instanceof BannerNode
}
