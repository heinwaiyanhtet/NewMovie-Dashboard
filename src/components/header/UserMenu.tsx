import React from 'react'
import { Dropdown } from 'antd';
import UserAvatar from '../../images/user-avatar-32.png'
import type { MenuProps } from 'antd';


interface Props{
    name:string,
}

const items : MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];


export default function UserMenu() {
  return (
      
       <>
        <img className="w-8 h-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
            <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow={{
                  pointAtCenter: true,
                }}
              >
               <p className='truncate ml-2 text-sm font-medium group-hover:text-slate-800'> Ko Kyaw Si Thu </p> 
            </Dropdown>
         </>
  )
}