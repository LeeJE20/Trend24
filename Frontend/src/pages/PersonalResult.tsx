import styled from "styled-components";
import { bookListData, Book } from "../constants/DummyData/BookListData";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { questionType } from "../store/slices/recommendSlice";
import { useSelector } from "react-redux";
import { BookType } from "../constants/Type/Type";

const PersonalResult = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  const selectedQuestion: questionType = useSelector(
    (state: RootState) => state.recommend.selectedQuestion
  );

  const selectedBook: BookType = useSelector(
    (state: RootState) => state.recommend.selectedBook
  );

  useEffect(() => {
    setBookList(bookListData);
  }, []);

  return (
    <Container>
      <Title>Q. {selectedQuestion.questionText}</Title>
      <UserBook>
        <div>{selectedBook.productName}</div>
        <div>줄거리</div>
      </UserBook>
      <RecommendBook>
        {bookList.map((li) => (
          <BookImage
            src={`https://image.yes24.com/goods/${li.product_id}/XL`}
            alt="Book Cover"
          />
        ))}
      </RecommendBook>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  color: white;
  background-image: url("/Image/EventPage/bg.jpg");
`;

const Title = styled.div`
  font-size: 5vh;
  margin-top: 150px;
  font-weight: bold;
  padding: 50px;
  width: 50%;
  border: solid 1px white;
`;

const UserBook = styled.div`
  border: solid 1px white;
`;

const RecommendBook = styled.div`
  position: absolute;
  /* border: solid 1px white; */
  padding-left: 150px;
  height: 200%;
  width: 50%;
  right: 0%;
  top: -20%;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: rotate(-315deg);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: baseline;
  flex-wrap: wrap;

  background: linear-gradient(
    to right,
    transparent,
    #e3e3e3f3,
    #e3e3e3f3,
    #e3e3e3f3,
    #e3e3e3f3,
    #e3e3e3,
    #ffffff,
    #ffffff
  );
`;
const BookImage = styled.img`
  width: 200px;
  height: auto;
  margin: 10px 15px;
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 1px #67676755;

  &:hover {
    opacity: 0.8;
  }
`;

export default PersonalResult;