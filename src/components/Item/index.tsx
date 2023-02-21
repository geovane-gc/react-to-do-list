import './styles.css'

interface Props {
  title: string;
}

const Item: React.FC<Props> = ({ title }) => {

  return (
      <div className="item-container">
        <input type="checkbox" />
        <span className="item-title">{title}</span>
      </div>
  )
}

export default Item;
