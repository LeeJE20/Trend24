import styled from "styled-components";
import { useState } from "react";
import BookClickGraph from "./BookClickGraph";

const data = {
  status: 200,
  message: "성공",
  result: {
    list: [
      {
        bookId: 1,
        clickCountSum: 36,
        productName: "책제목",
        ranking: 1,
        weeklyClickCount: [
          {
            date: "2024-05-16",
            clickCount: 4,
          },
          {
            date: "2024-04-24",
            clickCount: 3,
          },
        ],
      },
      {
        bookId: 2,
        clickCountSum: 7,
        productName: "책제목",
        ranking: 2,
        weeklyClickCount: [
          {
            date: "2024-04-25",
            clickCount: 4,
          },
          {
            date: "2024-04-24",
            clickCount: 3,
          },
        ],
      },
      {
        bookId: 3,
        clickCountSum: 7,
        productName: "책제목",
        ranking: 3,
        weeklyClickCount: [
          {
            date: "2024-04-25",
            clickCount: 4,
          },
          {
            date: "2024-04-24",
            clickCount: 3,
          },
        ],
      },
    ],
  },
};

const BookClicks = () => {
  const [isBookClicked, setIsBookClicked] = useState(false);
  const [selectedRanking, setSelectedRanking] = useState<number | null>(null); // 선택된 도서의 랭킹을 저장하기 위한 상태

  const handleOpenGraph = (ranking: number) => {
    setIsBookClicked(true);
    setSelectedRanking(ranking); // 선택된 랭킹을 상태에 저장
  };

  // 선택된 랭킹에 따라 그래프에 전달할 데이터를 결정하는 로직
  const selectedData =
    data.result.list.find((book) => book.ranking === selectedRanking)
      ?.weeklyClickCount || [];

  return (
    <Container>
      <Title>도서 클릭수 Top 3</Title>
      {isBookClicked ? (
        <GraphContainer>
          <GraphTitleContainer>
            <GraphTitle>일주일간 클릭 수</GraphTitle>
            <GoBackBtn onClick={() => setIsBookClicked(false)}>
              돌아가기
            </GoBackBtn>
          </GraphTitleContainer>
          <GraphBox>
            <BookClickGraph data={selectedData} />
          </GraphBox>
        </GraphContainer>
      ) : (
        <ContentContainer>
          {[1, 2, 3].map((ranking) => {
            const book = data.result.list.find(
              (book) => book.ranking === ranking
            );
            return (
              <BookContainer key={ranking}>
                <BookTitleBox>
                  <BookTitle>{book?.productName || "데이터 없음"}</BookTitle>
                  <BookRanking>{ranking}위</BookRanking>
                </BookTitleBox>
                <BookImage
                  style={{
                    backgroundImage: `url('https://via.placeholder.com/150')`,
                  }}
                ></BookImage>
                <BookClickBox>
                  <BookClickCount>
                    {book?.clickCountSum || "데이터 없음"}회
                  </BookClickCount>
                  <GotoGraphBtn onClick={() => handleOpenGraph(ranking)}>
                    일주일간
                    <br />
                    통계
                  </GotoGraphBtn>
                </BookClickBox>
              </BookContainer>
            );
          })}
        </ContentContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  height: 10%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  width: 100%;
  box-sizing: border-box;
`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  box-sizing: border-box;
`;

const BookTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
`;

const BookTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  width: 50%;
`;

const BookRanking = styled.div`
  font-size: 2rem;
  text-align: right;
  width: 50%;
`;

const BookImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BookClickBox = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #c2cec5;
`;

const BookClickCount = styled.div`
  font-size: 4rem;
  width: 60%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  align-content: center;
`;

const GotoGraphBtn = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  height: 100%;
  background-color: #5f996d;
  border-radius: 10px;

  &:hover {
    background-color: #c1e1d2;
    cursor: pointer;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
`;

const GraphTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  height: 10%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const GraphBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
`;

const GoBackBtn = styled.div`
  font-size: 1rem;
  width: 20%;
  height: 100%;
  background-color: #5f996d;
  border-radius: 10px;
  margin-left: 10px;

  &:hover {
    background-color: #c1e1d2;
    cursor: pointer;
  }
`;

const GraphTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
  box-sizing: border-box;
`;

export default BookClicks;