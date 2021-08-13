import { Image } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { Link } from 'react-router-dom'

interface PropsType {
  id: number | string;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: number | string;
}

const ProductImage: React.FC<PropsType> = ({ id, size, title, imageSrc, price }) => {
  return (
    <Link to={`detail/${id}`}>
      {
        size === "large" ?
          (<Image src={imageSrc} height={285} width={490} />)
          : (<Image src={imageSrc} height={120} width={240} />)
      }
      <div>
        <Text type='secondary'>{title.slice(0, 25)}</Text>
        <Text type='danger' strong>¥ {price} 起</Text>
      </div>
    </Link>
  )
}
export default ProductImage