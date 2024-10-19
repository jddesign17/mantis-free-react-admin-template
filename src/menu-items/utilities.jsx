// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BookOutlined,
  LoadingOutlined,
  TeamOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BookOutlined,
  TeamOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'MENU ITEM',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Register Details',
      type: 'item',
      url: '/registerdetails',
      icon: icons.BookOutlined
    },
    {
      id: 'util-color',
      title: 'Attendance',
      type: 'item',
      url: '/attendance',
      icon: icons.TeamOutlined
    },
   
  ]
};

export default utilities;
