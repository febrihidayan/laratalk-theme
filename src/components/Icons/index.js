import AttachmentIcon from './AttachmentIcon'
import GroupIcon from './GroupIcon'
import MessageIcon from './MessageIcon'
import MonthIcon from './MonthIcon'
import MoreFillIcon from './MoreFillIcon'
import SearchIcon from './SearchIcon'
import SendIcon from './SendIcon'
import SettingIcon from './SettingIcon'
import SunIcon from './SunIcon'
import UserIcon from './UserIcon'

import { use, registerComponent } from './../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, AttachmentIcon),
        registerComponent(Vue, GroupIcon),
        registerComponent(Vue, MessageIcon),
        registerComponent(Vue, MonthIcon),
        registerComponent(Vue, MoreFillIcon),
        registerComponent(Vue, SearchIcon),
        registerComponent(Vue, SendIcon),
        registerComponent(Vue, SettingIcon),
        registerComponent(Vue, SunIcon),
        registerComponent(Vue, UserIcon)
    }
}

use(Plugin)

export default Plugin

export {
    AttachmentIcon,
    GroupIcon,
    MessageIcon,
    MonthIcon,
    MoreFillIcon,
    SearchIcon,
    SendIcon,
    SettingIcon,
    SunIcon,
    UserIcon,
}