import MyHeadingToolbarPlugin from "./MyHeadingToolbarPlugin";
import ListToolbarPlugin from "./ListToolbarPlugin";
import BannerToolbarPlugin from "./BannerToolbarPlugin";

export default function ToolbarPlugin() {
	return <div className='toolbarWrapper'>
		<MyHeadingToolbarPlugin/>
		<ListToolbarPlugin/>
		<BannerToolbarPlugin/>
	</div>
}
