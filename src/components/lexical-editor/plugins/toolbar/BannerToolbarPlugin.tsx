import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React from "react";
import {INSERT_BANNER_COMMAND} from "../banner/BannerPlugin";

export default function BannerToolbarPlugin() {
	const [editor] = useLexicalComposerContext()
	const onClick = () => {
		editor.dispatchCommand(INSERT_BANNER_COMMAND, undefined);
	}
	return <button onClick={onClick}>Banner</button>
}
