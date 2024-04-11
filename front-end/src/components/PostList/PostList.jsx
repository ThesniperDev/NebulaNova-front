import "./PostList.css"
import PropTypes from 'prop-types'
import {
  Card,
  CardMedia
} from "@mui/material"

const PostList = ({ list }) => {
  return (
    <div>
      <Card>
        <CardMedia/>
        <p className="title-list">{list.title}</p>
      </Card>
    </div>
  )
}

PostList.propTypes = {
  list: PropTypes.object
}

export default PostList