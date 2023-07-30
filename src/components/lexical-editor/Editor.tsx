import './styles.css'

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {HeadingNode} from '@lexical/rich-text'
import {ListItemNode, ListNode} from '@lexical/list'
import ToolbarPlugin from "./plugins/toolbar/ToolbarPlugin";
import {BannerNode, BannerPlugin} from "./plugins/banner/BannerPlugin";

const theme = {
	heading: {
		h1: 'lexical-editor-h1',
		h2: 'lexical-editor-h2',
		h3: 'lexical-editor-h3',
	},
	text: {
		bold: 'lexical-editor-bold',
		italic: 'lexical-editor-italic',
	},
	banner: 'lexical-editor-banner',
}

function onError(error: Error) {
	console.error(error);
}

export default function Editor() {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
		nodes: [
			HeadingNode,
			ListNode,
			ListItemNode,
			BannerNode,
		]
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<ToolbarPlugin/>
			<BannerPlugin/>
			<RichTextPlugin
				contentEditable={<ContentEditable className='contentEditable'/>}
				placeholder={<div className='placeholder'>Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin/>
			<OnChangePlugin onChange={(editorState) => {
				console.log('state', editorState)
			}}/>
			<ListPlugin/>
		</LexicalComposer>
	);
}
