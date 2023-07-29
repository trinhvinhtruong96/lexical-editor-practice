import './styles.css'
import {useEffect} from 'react';
import {$getRoot, $getSelection, EditorState} from 'lexical';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const theme = {}

function onError(error: Error) {
	console.error(error);
}

function MyOnChangePlugin(props: { onChange: (editorState: EditorState) => void }) {
	const [editor] = useLexicalComposerContext();
	const {onChange} = props;
	useEffect(() => {
		return editor.registerUpdateListener(({editorState}) => {
			onChange(editorState)
		});
	}, [onChange, editor])
	return <></>
}

export default function Editor() {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<PlainTextPlugin
				contentEditable={<ContentEditable className='contentEditable'/>}
				placeholder={<div className='placeholder'>Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin/>
			<MyOnChangePlugin onChange={(editorState) => {
				console.log('state', editorState)
			}}/>
		</LexicalComposer>
	);
}
