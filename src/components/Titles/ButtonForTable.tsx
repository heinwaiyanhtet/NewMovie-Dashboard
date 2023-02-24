import { Button ,Space } from 'antd'
import React from 'react'

interface CustomProps {
  onClick : () => void
  title:string,
}

const ButtonForTable : React.FC<CustomProps> = ({onClick,title}) => {
  return (
    <Space>
      
      <button 
            onClick={onClick}
            className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {title}
      </button>

      {/* <Button type="primary" className='bg-sky-400'>
          Delete
      </Button> */}
      {/* <Button type="primary">
          Delete
      </Button> */}
    </Space>
  )
}
export default ButtonForTable;
