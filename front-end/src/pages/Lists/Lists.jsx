import "./Lists.css";
import { useState, useEffect } from "react"; 
import { getAllLists, createList } from "../../services/loginUserService" 
import PostList from "../../components/PostList/PostList";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const Lists = () => {
  const [lists, setLists] = useState([])
  const [newList, setNewList] = useState([])
  const [title, setTitle] = useState('')
  const [searchText, setSearchText] = useState('')
  const [userList, setUserList] = useState(false)

  const handleOpen = () => {
    setUserList(true)
  }

  const handleClose = () => {
    setUserList(false)
    setTitle('')
  }

  const handleCreateList = async () => {
    const res = await createList({ title })
    setNewList(res)
  }

  const handleLists = async () => {
    const res = await getAllLists()
    setLists(res)
  }

  useEffect(() => {
    handleLists()
  },[])

  return (
    <section className="listPage-container">
      <div className="formList-container">
        <div className="filterList-container">
          <input
            type="text"
            className="input-lists"
            placeholder="Search for a list"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="buttonList-container">
          <button className="button-list" onClick={handleOpen}><h2>Create a new list</h2></button>
          <Dialog
            open={userList}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: () => {
                handleCreateList()
                handleClose();
              }
            }}
          >
            <Box sx={{ display: "flex", backgroundColor: '#2A2D33', justifyContent: "space-between" }}>
              <DialogTitle sx={{ backgroundColor: '#2A2D33', color: '#fff' }}>Create a new List</DialogTitle>
              <IconButton onClick={handleClose} sx={{ paddingRight: "15px" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="title"
              label="List title"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#353941", display: "flex", justifyContent: "center" }}>
              <Button type="submit" sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div className="lists-container">
        {
          lists && lists
                      .filter((list) =>
                        list.title.toLowerCase().includes(searchText.toLowerCase())
                      )
                      .map((list, idx) => <PostList key={idx} list={list}/>)
        }
      </div>
    </section>
  );
};

export default Lists;
