import { selectCount } from "../store/counter/counter.reducer"
import { useAppDispatch, useAppSelector } from "../store/counter/hooks"
import { increment,incrementByAmount } from '../store/counter/counter.reducer'


export const HomePage = () => {

    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>Hello from home</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(incrementByAmount(2))}>click</button>
        </div>
    )
}