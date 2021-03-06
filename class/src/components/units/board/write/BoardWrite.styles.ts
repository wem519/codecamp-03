import styled from '@emotion/styled'

interface Iprops {
    zzz: boolean
    qqq: boolean

}
interface IButtonProps{
    qqq:boolean
}

export const MyButton = styled.button`
    background-color:${(props: IButtonProps) => (props.qqq === true ? 'yellow': 'grey')};
    
`
interface ITitleProps{
    zzz:boolean
}

export const Title = styled.h1`
    color:${(props: ITitleProps) => (props.zzz ===true ? 'red' : 'yellow')};
    
`
