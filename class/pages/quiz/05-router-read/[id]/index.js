import {router, useRouter} from 'next/router' 
import {useQuery, gql} from '@apollo/client'

const FETCH_PRODUCT =gql`
 query fetchProduct($productId:ID){
     fetchProduct(productId:$productId){
         seller
         name
         detail
     }
 }
`

export default function ProductRoutingPage(){

    const router =useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.id }
    })

    return(
        <>
            <div>상품정보 상세페이지</div>
            <div>게시자 아이디:{router.query.id}</div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품: {data?.fetchProduct.name}</div>
            <div>내용: {data?.fetchProduct.detail}</div>
        </>
    )
}