import {EditorState} from "lexical";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect} from "react";

export default function MyOnChangePlugin(props: { onChange: (editorState: EditorState) => void }) {
	const [editor] = useLexicalComposerContext();
	const {onChange} = props;
	useEffect(() => {
		return editor.registerUpdateListener(({editorState}) => {
			onChange(editorState)
		});
	}, [onChange, editor])
	return <></>
}
