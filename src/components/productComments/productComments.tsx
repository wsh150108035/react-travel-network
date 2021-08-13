import { Comment, Tooltip, List } from 'antd';

interface PropsType {
  data: {
    author: string,
    avatar: string,
    content: string,
    createDate: string
  }[]
}

const ProductComments: React.FC<PropsType> = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.createDate}
        />
      </li>
    )}
  />
)

export default ProductComments