import { TabBar} from "antd-mobile";
import { HomeOutlined } from "@ant-design/icons";
import '@/style/layout/bottomTabs.css'

function BottomTabs() {
	return (
		<div className="tab-bar">
			<TabBar >
				<TabBar.Item title="首页2" key="home" icon={<HomeOutlined />} />
			</TabBar>
		</div>
	)
}

export default BottomTabs