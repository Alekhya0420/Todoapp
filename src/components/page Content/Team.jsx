// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {Box,Grid,Card,CardContent,Button} from '@mui/material';
// import {Link} from 'react-router-dom';

// const Team = () => {

//     const[team,setTeam]=useState([]);

//     async function Team()
//     {
//         await axios.get(`http://89.116.32.22:7702/api/team`)
//         .then((res)=>{
//           setTeam(res.data)
//         })

//         .catch((error)=>console.log("error is",error));
//     }

//     useEffect(()=>{
//       Team();
//     },[])

//     console.log("Team members are",team);

//   return (
//     <Box>
//          <p>{team.message}</p>
//         <Grid container={2} padding={2}>
//     {
//         team?.TeamMember?.map((data,index)=>(
//          <Grid item xs={12} sm={6} md={4} lg={4} key={index} padding={2}>
//           <Card>
//             <CardContent>
//               <p>{data.name}</p>
//               <p>{data.possession}</p>
              
//               <Link to={`/pagecontent/teampic/${data._id}`}>
//               <Button sx={{backgroundColor:"red",color:"white"}}>See</Button>
//               </Link>
            
//             </CardContent>  
//           </Card>
//           </Grid> 
//         ))
//     }
//     </Grid>
//     </Box>
//   )
// }

// export default Team


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Card, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Team = () => {
  const [team, setTeam] = useState([]);

  async function fetchTeam() {
    await axios
      .get('http://89.116.32.22:7702/api/team')
      .then((res) => {
        setTeam(res.data);
      })
      .catch((error) => console.log('Error is', error));
  }

  useEffect(() => {
    fetchTeam();
  }, []);

//   console.log('Team members are', team);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" align="center" sx={{marginBottom: 4,color:'red'}}>
        Meet Our Team
      </Typography>
      <Grid container spacing={3}>
        {team?.TeamMember?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#333',
                color: '#fff', 
                boxShadow: 10,
                borderRadius: 2,
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {data.name}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {data.possession}
                </Typography>

                <Link
                  to={`/pagecontent/teampic/${data._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    sx={{
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      width: '100%',
                      padding: '10px',
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
