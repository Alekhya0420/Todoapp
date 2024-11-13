import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, updateItem, deleteItem } from '../../redux/slice/Todoslice';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, TextField, Button, 
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {tableCellClasses} from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 3,
  },
}));



const ShowList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setEditItem(item);
  };

  const handleSave = () => {
    if (editItem) {
      dispatch(updateItem(editItem));
      setEditItem(null); 
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(rgb(10,50,50), rgb(10,50,50))',
        color: 'white',
        p: 2,
      }}
    >
    <div>
      <h1>Todo List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Completed</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>Actionss</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                {editItem?.id === item.id ? (
                  <>
                    <TableCell>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="title"
                        value={editItem.title}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="description"
                        value={editItem.description}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="date"
                        name="date"
                        value={editItem.date}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="isCompleted"
                        value={editItem.isCompleted}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="photo"
                        value={editItem.photo}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={handleSave} variant="contained" color="primary">
                        Save
                      </Button>
                      <Button onClick={() => setEditItem(null)} variant="contained" color="secondary">
                        Cancel
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.isCompleted}</TableCell>
                    <TableCell>
                      {item.photo && item.photo.url ? (
                        <img src={item.photo.url} alt="Photo" width={100} />
                      ) : (
                        'No Photo Available'
                      )}
                    </TableCell>
                    <TableCell>
                      <Button 
                        onClick={() => handleUpdate(item)} 
                        variant="outlined" 
                        sx={{marginX:"5px"}}
                        color="primary">
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDelete(item.id)} 
                        variant="outlined" 
                        color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Box>
  );
};

export default ShowList;
