import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND} from "@lexical/list";

type ListTag = 'ol' | 'ul'

export default function ListToolbarPlugin() {
	const tags: ListTag[] = ['ul', 'ol'];
	const [editor] = useLexicalComposerContext()
	const onClick = (tag: ListTag) => {
		console.log("=>(ListToolbarPlugin.tsx:18) tag", tag);
		if (tag === 'ol') {
			editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
			return;
		}
		editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
	}
	return <>
		{tags.map((tag) => {
			return <button key={tag} onClick={() => onClick(tag)}>{tag.toUpperCase()}</button>
		})}
	</>
}
