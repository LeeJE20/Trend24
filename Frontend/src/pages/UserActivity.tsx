import styled from "styled-components";

import UserDataGraph from "../components/pages/useractivity/user/UserDataGraph";
import UserStayTimeGraph from "../components/pages/useractivity/user/UserStayTimeGraph";
import ClickDataChart from "../components/common/chart/ClickDataChart";

const UserActivity = () => {
  return (
    <PageContainer>
      <UserDataGraph />
      <ClickDataChart />
      <UserStayTimeGraph />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default UserActivity;