import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const ProfileTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-top: 15px;
`;

export const WrapperInformation = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
`;

export const WrapperNavigation = styled.nav`
  width: 200px;
  min-height: 80vh;
`;

export const ProfileNavigation = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 7px;
`;

export const ProfileMainInfo = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export const ProfileAddWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const ProfileAddForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ProfileAddInput = styled.input`
  width: 100%;
  border: none;
  margin-top: 10px;
  background-color: transparent;
  padding: 6px 12px;
  border-bottom: 1px solid black;
`;

export const ProfileAddButton = styled.button`
  width: 150px;
  margin: 50px auto;
  border: 1px solid black;
  outline: none;
  display: block;
  padding: 12px;
  border-radius: 6px;
`;
