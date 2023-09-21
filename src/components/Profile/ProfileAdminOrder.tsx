import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProfileMainInfo, ProfileTitle } from "./ProfileStyle";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import {
  currentUserInfo,
  userInfoSelectors,
} from "../../features/users/users-selectors";
import { loadingAllUsers } from "../../features/users/users-slice";
import { allOrdersSelector } from "../../features/order/order-selectors";
import { loadingAllOrder } from "../../features/order/order-slice";

function ProfileAdminOrder() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(allOrdersSelector);
  useEffect(() => {
    if (orders.length === 0) dispatch(loadingAllOrder());
  }, [dispatch]);
  {
  }
  return (
    <ProfileMainInfo>
      <ProfileTitle>Пользователи</ProfileTitle>
      <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
        <Table sx={{ width: "700px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Номер заказа</TableCell>
              <TableCell>Адресс</TableCell>
              <TableCell>Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.address}
                  </TableCell>
                  <TableCell align="left"> {item.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ProfileMainInfo>
  );
}

export default ProfileAdminOrder;
