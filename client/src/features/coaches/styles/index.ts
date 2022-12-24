import styled from 'styled-components';

export const CoachContainer = styled.div.attrs({
  className: 'container text-center',
})``;

export const CoachHeader = styled.h3``;

export const CoachRow = styled.div.attrs({
  className: 'row row-cols-auto align-items-center justify-content-center',
})``;

export const CoachItem = styled.div.attrs({
  className: 'container ',
})``;

export const CoachDetail = styled.div.attrs({
  className: 'col',
})``;

export const CoachTitle = styled.h5``;

export const CoachImage = styled.img`
  width: 140px;
  border-radius: 50%;
`;

export const CoachTeam = styled.div`
  font-weight: 550;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const CoachLine = styled.hr``;
