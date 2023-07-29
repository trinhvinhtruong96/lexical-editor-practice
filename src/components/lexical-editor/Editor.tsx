import './styles.css'

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";

const theme = {
	text: {
		bold: 'lexical-editor-bold',
		italic: 'lexical-editor-italic'
	}
}

function onError(error: Error) {
	console.error(error);
}

export default function Editor() {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<RichTextPlugin
				contentEditable={<ContentEditable className='contentEditable'/>}
				placeholder={<div className='placeholder'>Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin/>
			<OnChangePlugin onChange={(editorState) => {
				console.log('state', editorState)
			}}/>
		</LexicalComposer>
	);
}
