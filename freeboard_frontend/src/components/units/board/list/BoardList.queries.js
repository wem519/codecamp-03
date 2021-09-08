import {gql} from '@apollo/client'



export const FETCH_BOARDS =gql`
 query {
     fetchBoards{
         _id
         writer
         title
         createdAt
     }
 }
`
//페이지 분할 후 연결해줘야 하기 때문에 단독문장에는 export가 필요없지만 여기서는 export가 필요하다.