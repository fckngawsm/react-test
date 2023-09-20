// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { ProfileTitle, ProfileMainInfo } from "./ProfileStyle";

// function ProfileMyOrder() {
//   return (
//     <ProfileMainInfo>
//       <ProfileTitle> Мои заказы</ProfileTitle>
//       <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
//         <Table sx={{ width: "700px" }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Почта</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Lastname</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users &&
//               users.map((user) => (
//                 <TableRow
//                   key={user.id}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {user.email}
//                   </TableCell>
//                   <TableCell align="left">{user.name}</TableCell>
//                   <TableCell>{user.lastname}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </ProfileMainInfo>
//   );
// }

// export default ProfileMyOrder;
export {};
