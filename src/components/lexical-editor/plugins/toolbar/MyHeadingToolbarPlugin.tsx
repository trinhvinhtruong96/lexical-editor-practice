import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$getSelection, $isRangeSelection} from "lexical";
import {$setBlocksType} from '@lexical/selection';
import {$createHeadingNode} from '@lexical/rich-text';

type HeadingTag = 'h1' | 'h2' | 'h3';

export default function MyHeadingToolbarPlugin() {
	const tags: HeadingTag[] = ['h1', 'h2', 'h3'];
	const [editor] = useLexicalComposerContext()
	const onClick = (tag: HeadingTag) => {
		editor.update(() => {
			const selection = $getSelection()
			if ($isRangeSelection(selection)) {
				$setBlocksType(selection, () => $createHeadingNode(tag))
			}
		})
	}
	return <div>
		{tags.map((tag) => {
			return <button key={tag} onClick={() => onClick(tag)}>{tag.toUpperCase()}</button>
		})}
	</div>
}
