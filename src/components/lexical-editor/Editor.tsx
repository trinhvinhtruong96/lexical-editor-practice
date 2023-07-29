import './styles.css'
import {useEffect} from 'react';
import {$getRoot, $getSelection} from 'lexical';

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

export default function Editor() {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<PlainTextPlugin
				contentEditable={<ContentEditable class />}
				placeholder={<div>Enter some textsss...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
		</LexicalComposer>
	);
}
