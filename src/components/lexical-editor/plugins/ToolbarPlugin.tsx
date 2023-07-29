import MyHeadingToolbarPlugin from "./MyHeadingToolbarPlugin";
import ListToolbarPlugin from "./ListToolbarPlugin";

export default function ToolbarPlugin() {
	return <div className='toolbarWrapper'>
		<MyHeadingToolbarPlugin/>
		<ListToolbarPlugin/>
	</div>
}
