import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from "next/router"

export default function BoardWrite(props){
    const router = useRouter()
    
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [updateBoard] =useMutation(UPDATE_BOARD)
    
    const[myWriter, setMyWriter] = useState("")
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")

    const[zzz, setZzz] = useState(false)
    const[qqq, setQqq] = useState(false)

    //myWriter, myTitle, myContents 모두 내용이 저장되어 있다면, 
    //즉 (myWriter !== "" && myTitle !== "" && myContents !== "")라면,
    //setQqq를 사용해서, false =>true, 이모션의 버튼색을 노란색으로 변경하기
    //동일한 logic이 onChange함수 안에 모두 작성되어야 함
    
    function onChangeMyWriter(event){
      setMyWriter(event.target.value)
      if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setQqq(true);
      }
    }

    function onChangeMyTitle(event){
      setMyTitle(event.target.value)
      if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
        setQqq(true);
      }
    }

    function onChangeMyContents(event){
      setMyContents(event.target.value)
      if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setQqq(true);
      }
    }

    async function aaa() {
      try {
        const result = await createBoard({
          variables: {writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.number)
        router.push(`08-04-board-detail/${result.data.createBoard.number}`)
      } catch (error) {
        console.log(error)
      }
     
    }

    async function onClickEdit(){
      try{
      
      await updateBoard({
        variables:{
          number: Number(router.query.number),
          writer: myWriter,
          title: myTitle,
          contents: myContents,
          

         }
      })
      router.push(`/08-04-board-detail/${router.query.number}`)
      }catch(error){
      console.log(error)
      }
    }

    return<BoardWriteUI 
    onChangeMyWriter={onChangeMyWriter}
    onChangeMyTitle={onChangeMyTitle}
    onChangeMyContents={onChangeMyContents}
    aaa={aaa}
    zzz={zzz}
    qqq={qqq}
    isEdit={props.isEdit}
    onClickEdit={onClickEdit}
    />
    //한줄일때는 괄호() 생략가능
}