import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$createTextNode, $getRoot} from "lexical";
import {$createHeadingNode} from '@lexical/rich-text'

export default function MyHeadingPlugin() {
	const [editor] = useLexicalComposerContext()
	const onClick = (e: React.MouseEvent) => {
		editor.update(() => {
			const root = $getRoot();
			const headingNode = $createHeadingNode('h1');
			headingNode.append($createTextNode('Hello World'))
			root.append(headingNode)
		})
	}
	return <button onClick={onClick}>Heading</button>
}
